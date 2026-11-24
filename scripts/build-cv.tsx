/**
 * Builds public/cv.pdf from the cv export in src/content/site.ts.
 * Two A4 pages, one column, selectable text. Portrait on page 1 only.
 *
 * Run from the repo root:
 *   cp scripts/build-cv.tsx scripts/build-cv.ts && node scripts/build-cv.ts; rm -f scripts/build-cv.ts
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { deflateSync } from 'node:zlib';
import sharp from 'sharp';
import { cv } from '../src/content/site.ts';

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN_X = 50;
const MARGIN_TOP = 42;
const MARGIN_BOTTOM = 36;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2;
const PORTRAIT_PT = 64;
const NAME_SIZE = 16;
const ROLE_SIZE = 11;
const HEADER_SIZE = 9.5;
const HEADING_SIZE = 11.5;
const JOB_SIZE = 10;
const META_SIZE = 9;
const BODY_SIZE = 9;
const PAGE_NUM_SIZE = 9;
const BODY_LEADING = 11.4;
const SECTION_GAP = 11;
const HEADING_GAP = 4;
const JOB_GAP = 8;
const HEADER_GAP = 14;
const BULLET = '•';

const REGULAR_FONT_PATHS = [
  '/System/Library/Fonts/Supplemental/Arial.ttf',
  '/Library/Fonts/Arial.ttf',
];
const BOLD_FONT_PATHS = [
  '/System/Library/Fonts/Supplemental/Arial Bold.ttf',
  '/Library/Fonts/Arial Bold.ttf',
];

type TtfTable = { offset: number; length: number };

type TtfFont = {
  psName: string;
  unitsPerEm: number;
  ascent: number;
  descent: number;
  capHeight: number;
  italicAngle: number;
  bbox: [number, number, number, number];
  file: Buffer;
  glyphId: (codePoint: number) => number;
  glyphWidth: (gid: number) => number;
};

type DrawOp =
  | {
      kind: 'text';
      face: 'regular' | 'bold';
      size: number;
      x: number;
      y: number;
      text: string;
    }
  | { kind: 'image'; x: number; y: number; width: number; height: number };

type Cursor = { y: number };

type Face = 'regular' | 'bold';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const findFont = (candidates: string[]): string => {
  const found = candidates.find((candidate) => existsSync(candidate));
  if (!found) throw new Error(`Font not found. Tried: ${candidates.join(', ')}`);
  return found;
};

const readU16 = (file: Buffer, offset: number) => file.readUInt16BE(offset);
const readI16 = (file: Buffer, offset: number) => file.readInt16BE(offset);
const readU32 = (file: Buffer, offset: number) => file.readUInt32BE(offset);
const readI32 = (file: Buffer, offset: number) => file.readInt32BE(offset);

const tableMap = (file: Buffer): Map<string, TtfTable> => {
  const numTables = readU16(file, 4);
  const tables = new Map<string, TtfTable>();
  for (let i = 0; i < numTables; i += 1) {
    const entry = 12 + i * 16;
    tables.set(file.toString('ascii', entry, entry + 4), {
      offset: readU32(file, entry + 8),
      length: readU32(file, entry + 12),
    });
  }
  return tables;
};

const requireTable = (tables: Map<string, TtfTable>, tag: string): TtfTable => {
  const table = tables.get(tag);
  if (!table) throw new Error(`TTF is missing table ${tag}`);
  return table;
};

const parseCmapLookup = (file: Buffer, cmap: TtfTable): ((code: number) => number) => {
  const start = cmap.offset;
  const numSubtables = readU16(file, start + 2);
  type Record = { platform: number; encoding: number; offset: number };
  const records: Record[] = [];
  for (let i = 0; i < numSubtables; i += 1) {
    const o = start + 4 + i * 8;
    records.push({
      platform: readU16(file, o),
      encoding: readU16(file, o + 2),
      offset: start + readU32(file, o + 4),
    });
  }

  const score = (record: Record) => {
    if (record.platform === 3 && record.encoding === 10) return 4;
    if (record.platform === 3 && record.encoding === 1) return 3;
    if (record.platform === 0 && record.encoding === 4) return 2;
    if (record.platform === 0) return 1;
    return 0;
  };

  const chosen = records.reduce<Record | undefined>((best, record) => {
    if (!best || score(record) > score(best)) return record;
    return best;
  }, undefined);
  if (!chosen || score(chosen) === 0) throw new Error('No Unicode cmap subtable');

  const format = readU16(file, chosen.offset);

  if (format === 12) {
    const nGroups = readU32(file, chosen.offset + 12);
    const groups: Array<{ start: number; end: number; glyph: number }> = [];
    for (let i = 0; i < nGroups; i += 1) {
      const o = chosen.offset + 16 + i * 12;
      groups.push({
        start: readU32(file, o),
        end: readU32(file, o + 4),
        glyph: readU32(file, o + 8),
      });
    }
    return (code) => {
      const group = groups.find((item) => code >= item.start && code <= item.end);
      if (!group) return 0;
      return group.glyph + (code - group.start);
    };
  }

  if (format !== 4) throw new Error(`Unsupported cmap format ${format}`);

  // Format 4: segmented coverage. idRangeOffset is a byte offset from its own
  // slot in the table, not an index into glyphIdArray.
  const segCount = readU16(file, chosen.offset + 6) / 2;
  const endCodesOff = chosen.offset + 14;
  const startCodesOff = endCodesOff + segCount * 2 + 2;
  const deltasOff = startCodesOff + segCount * 2;
  const rangeOff = deltasOff + segCount * 2;
  type Segment = {
    start: number;
    end: number;
    delta: number;
    rangeOffset: number;
    rangePos: number;
  };
  const segments: Segment[] = [];
  for (let i = 0; i < segCount; i += 1) {
    segments.push({
      start: readU16(file, startCodesOff + i * 2),
      end: readU16(file, endCodesOff + i * 2),
      delta: readI16(file, deltasOff + i * 2),
      rangeOffset: readU16(file, rangeOff + i * 2),
      rangePos: rangeOff + i * 2,
    });
  }

  return (code) => {
    const segment = segments.find((item) => code >= item.start && code <= item.end);
    if (!segment) return 0;
    if (segment.rangeOffset === 0) return (code + segment.delta) & 0xffff;
    const glyphPos = segment.rangePos + segment.rangeOffset + (code - segment.start) * 2;
    const gid = readU16(file, glyphPos);
    if (gid === 0) return 0;
    return (gid + segment.delta) & 0xffff;
  };
};

const parseTtf = (filePath: string, psName: string): TtfFont => {
  const file = readFileSync(filePath);
  const tables = tableMap(file);
  const head = requireTable(tables, 'head');
  const hhea = requireTable(tables, 'hhea');
  const hmtx = requireTable(tables, 'hmtx');
  const maxp = requireTable(tables, 'maxp');
  const cmap = requireTable(tables, 'cmap');
  const os2 = tables.get('OS/2');
  const post = tables.get('post');

  const unitsPerEm = readU16(file, head.offset + 18);
  const bbox: [number, number, number, number] = [
    readI16(file, head.offset + 36),
    readI16(file, head.offset + 38),
    readI16(file, head.offset + 40),
    readI16(file, head.offset + 42),
  ];
  const ascent = readI16(file, hhea.offset + 4);
  const descent = readI16(file, hhea.offset + 6);
  const numberOfHMetrics = readU16(file, hhea.offset + 34);
  const numGlyphs = readU16(file, maxp.offset + 4);
  const glyphId = parseCmapLookup(file, cmap);

  const widths = Array.from({ length: numGlyphs }, () => 0);
  for (let i = 0; i < numberOfHMetrics; i += 1)
    widths[i] = readU16(file, hmtx.offset + i * 4);
  const lastWidth = widths[numberOfHMetrics - 1] ?? 0;
  for (let i = numberOfHMetrics; i < numGlyphs; i += 1) widths[i] = lastWidth;

  const capHeight =
    os2 && readU16(file, os2.offset) >= 2 ? readI16(file, os2.offset + 88) : Math.round(unitsPerEm * 0.7);
  const italicAngle = post ? readI32(file, post.offset + 4) / 65536 : 0;
  return {
    psName,
    unitsPerEm,
    ascent,
    descent,
    capHeight,
    italicAngle,
    bbox,
    file,
    glyphId,
    glyphWidth: (gid) => widths[gid] ?? lastWidth,
  };
};

const to1000 = (font: TtfFont, value: number) =>
  Math.round((value * 1000) / font.unitsPerEm);

const pdfNumber = (value: number) => {
  const text = value.toFixed(3).replace(/\.?0+$/, '');
  return text === '' || text === '-' ? '0' : text;
};

const hex4 = (value: number) => value.toString(16).toUpperCase().padStart(4, '0');

const measure = (font: TtfFont, text: string, size: number) =>
  Array.from(text).reduce((width, ch) => {
    const code = ch.codePointAt(0);
    if (code === undefined) return width;
    return width + (font.glyphWidth(font.glyphId(code)) * size) / font.unitsPerEm;
  }, 0);

const wrapText = (font: TtfFont, text: string, size: number, maxWidth: number): string[] => {
  const words = text.split(/\s+/).filter((word) => word.length > 0);
  const lines: string[] = [];
  let current = '';
  const pushChunked = (word: string) => {
    let chunk = '';
    Array.from(word).forEach((ch) => {
      const trial = `${chunk}${ch}`;
      if (chunk !== '' && measure(font, trial, size) > maxWidth) {
        lines.push(chunk);
        chunk = ch;
        return;
      }
      chunk = trial;
    });
    current = chunk;
  };
  words.forEach((word) => {
    const next = current === '' ? word : `${current} ${word}`;
    if (measure(font, next, size) <= maxWidth) {
      current = next;
      return;
    }
    if (current !== '') lines.push(current);
    if (measure(font, word, size) <= maxWidth) {
      current = word;
      return;
    }
    pushChunked(word);
  });
  if (current !== '') lines.push(current);
  return lines.length > 0 ? lines : [''];
};

const addLines = (
  ops: DrawOp[],
  face: Face,
  size: number,
  leading: number,
  x: number,
  font: TtfFont,
  maxWidth: number,
  text: string,
  cursor: Cursor,
) => {
  wrapText(font, text, size, maxWidth).forEach((line) => {
    ops.push({ kind: 'text', face, size, x, y: cursor.y, text: line });
    cursor.y -= leading;
  });
};

const addBullet = (
  ops: DrawOp[],
  font: TtfFont,
  size: number,
  leading: number,
  x: number,
  maxWidth: number,
  text: string,
  cursor: Cursor,
) => {
  const marker = `${BULLET} `;
  const indent = measure(font, marker, size);
  const lines = wrapText(font, text, size, maxWidth - indent);
  lines.forEach((line, index) => {
    const isFirst = index === 0;
    ops.push({
      kind: 'text',
      face: 'regular',
      size,
      x: isFirst ? x : x + indent,
      y: cursor.y,
      text: isFirst ? `${marker}${line}` : line,
    });
    cursor.y -= leading;
  });
};

const assertFits = (cursor: Cursor, label: string) => {
  if (cursor.y < MARGIN_BOTTOM + 10)
    throw new Error(`${label} overflowed the page (y=${cursor.y.toFixed(1)})`);
};

const pageNumberY = MARGIN_BOTTOM - 8;

const layoutPage1 = (regular: TtfFont, bold: TtfFont): DrawOp[] => {
  const ops: DrawOp[] = [];
  const cursor: Cursor = { y: PAGE_HEIGHT - MARGIN_TOP - PORTRAIT_PT };
  ops.push({
    kind: 'image',
    x: MARGIN_X,
    y: cursor.y,
    width: PORTRAIT_PT,
    height: PORTRAIT_PT,
  });
  cursor.y -= 12 + NAME_SIZE;
  ops.push({
    kind: 'text',
    face: 'bold',
    size: NAME_SIZE,
    x: MARGIN_X,
    y: cursor.y,
    text: cv.name,
  });
  cursor.y -= ROLE_SIZE + 6;
  ops.push({
    kind: 'text',
    face: 'regular',
    size: ROLE_SIZE,
    x: MARGIN_X,
    y: cursor.y,
    text: cv.role,
  });
  cursor.y -= HEADER_SIZE + 8;
  addLines(
    ops,
    'regular',
    HEADER_SIZE,
    HEADER_SIZE + 3,
    MARGIN_X,
    regular,
    CONTENT_WIDTH,
    cv.header.locationLine,
    cursor,
  );
  addLines(
    ops,
    'regular',
    HEADER_SIZE,
    HEADER_SIZE + 3,
    MARGIN_X,
    regular,
    CONTENT_WIDTH,
    cv.header.linksLine,
    cursor,
  );
  cursor.y -= HEADER_GAP;

  ops.push({
    kind: 'text',
    face: 'bold',
    size: HEADING_SIZE,
    x: MARGIN_X,
    y: cursor.y,
    text: cv.profile.heading,
  });
  cursor.y -= HEADING_SIZE + HEADING_GAP;
  addLines(
    ops,
    'regular',
    BODY_SIZE,
    BODY_LEADING,
    MARGIN_X,
    regular,
    CONTENT_WIDTH,
    cv.profile.body,
    cursor,
  );
  cursor.y -= SECTION_GAP;

  ops.push({
    kind: 'text',
    face: 'bold',
    size: HEADING_SIZE,
    x: MARGIN_X,
    y: cursor.y,
    text: cv.technicalSkills.heading,
  });
  cursor.y -= HEADING_SIZE + HEADING_GAP;
  [cv.technicalSkills.frontend, cv.technicalSkills.backend, cv.technicalSkills.testing].forEach(
    (line) => {
      addLines(ops, 'regular', BODY_SIZE, BODY_LEADING, MARGIN_X, regular, CONTENT_WIDTH, line, cursor);
    },
  );
  cursor.y -= SECTION_GAP;

  ops.push({
    kind: 'text',
    face: 'bold',
    size: HEADING_SIZE,
    x: MARGIN_X,
    y: cursor.y,
    text: cv.experience.heading,
  });
  cursor.y -= HEADING_SIZE + HEADING_GAP;
  cv.experience.jobs.slice(0, 2).forEach((job, jobIndex, jobs) => {
    addLines(ops, 'bold', JOB_SIZE, JOB_SIZE + 3, MARGIN_X, bold, CONTENT_WIDTH, job.title, cursor);
    addLines(ops, 'regular', META_SIZE, META_SIZE + 3, MARGIN_X, regular, CONTENT_WIDTH, job.meta, cursor);
    cursor.y -= 1;
    job.bullets.forEach((bullet) => {
      addBullet(ops, regular, BODY_SIZE, BODY_LEADING, MARGIN_X, CONTENT_WIDTH, bullet, cursor);
    });
    if (jobIndex < jobs.length - 1) cursor.y -= JOB_GAP;
  });

  ops.push({
    kind: 'text',
    face: 'regular',
    size: PAGE_NUM_SIZE,
    x: (PAGE_WIDTH - measure(regular, cv.pageNumbers[0], PAGE_NUM_SIZE)) / 2,
    y: pageNumberY,
    text: cv.pageNumbers[0],
  });
  assertFits(cursor, 'page 1');
  return ops;
};

const layoutPage2 = (regular: TtfFont, bold: TtfFont): DrawOp[] => {
  const ops: DrawOp[] = [];
  const cursor: Cursor = { y: PAGE_HEIGHT - MARGIN_TOP - NAME_SIZE };
  ops.push({
    kind: 'text',
    face: 'bold',
    size: NAME_SIZE,
    x: MARGIN_X,
    y: cursor.y,
    text: cv.name,
  });
  cursor.y -= ROLE_SIZE + 6;
  ops.push({
    kind: 'text',
    face: 'regular',
    size: ROLE_SIZE,
    x: MARGIN_X,
    y: cursor.y,
    text: cv.role,
  });
  cursor.y -= HEADER_GAP;

  ops.push({
    kind: 'text',
    face: 'bold',
    size: HEADING_SIZE,
    x: MARGIN_X,
    y: cursor.y,
    text: cv.experience.continuedHeading,
  });
  cursor.y -= HEADING_SIZE + HEADING_GAP;
  cv.experience.jobs.slice(2).forEach((job, jobIndex, jobs) => {
    addLines(ops, 'bold', JOB_SIZE, JOB_SIZE + 3, MARGIN_X, bold, CONTENT_WIDTH, job.title, cursor);
    addLines(ops, 'regular', META_SIZE, META_SIZE + 3, MARGIN_X, regular, CONTENT_WIDTH, job.meta, cursor);
    cursor.y -= 1;
    job.bullets.forEach((bullet) => {
      addBullet(ops, regular, BODY_SIZE, BODY_LEADING, MARGIN_X, CONTENT_WIDTH, bullet, cursor);
    });
    if (jobIndex < jobs.length - 1) cursor.y -= JOB_GAP;
  });
  cursor.y -= SECTION_GAP;

  ops.push({
    kind: 'text',
    face: 'bold',
    size: HEADING_SIZE,
    x: MARGIN_X,
    y: cursor.y,
    text: cv.selectedProjects.heading,
  });
  cursor.y -= HEADING_SIZE + HEADING_GAP;
  cv.selectedProjects.items.forEach((item) => {
    addBullet(ops, regular, BODY_SIZE, BODY_LEADING, MARGIN_X, CONTENT_WIDTH, item, cursor);
  });
  cursor.y -= SECTION_GAP;

  ops.push({
    kind: 'text',
    face: 'bold',
    size: HEADING_SIZE,
    x: MARGIN_X,
    y: cursor.y,
    text: cv.education.heading,
  });
  cursor.y -= HEADING_SIZE + HEADING_GAP;
  cv.education.items.forEach((item, itemIndex, items) => {
    addLines(ops, 'bold', JOB_SIZE, JOB_SIZE + 3, MARGIN_X, bold, CONTENT_WIDTH, item.title, cursor);
    if ('meta' in item)
      addLines(ops, 'regular', META_SIZE, META_SIZE + 3, MARGIN_X, regular, CONTENT_WIDTH, item.meta, cursor);
    if (itemIndex < items.length - 1) cursor.y -= 4;
  });
  cursor.y -= SECTION_GAP;

  ops.push({
    kind: 'text',
    face: 'bold',
    size: HEADING_SIZE,
    x: MARGIN_X,
    y: cursor.y,
    text: cv.languages.heading,
  });
  cursor.y -= HEADING_SIZE + HEADING_GAP;
  addLines(
    ops,
    'regular',
    BODY_SIZE,
    BODY_LEADING,
    MARGIN_X,
    regular,
    CONTENT_WIDTH,
    cv.languages.body,
    cursor,
  );

  ops.push({
    kind: 'text',
    face: 'regular',
    size: PAGE_NUM_SIZE,
    x: (PAGE_WIDTH - measure(regular, cv.pageNumbers[1], PAGE_NUM_SIZE)) / 2,
    y: pageNumberY,
    text: cv.pageNumbers[1],
  });
  assertFits(cursor, 'page 2');
  return ops;
};

const gidHex = (font: TtfFont, text: string) =>
  Array.from(text)
    .map((ch) => {
      const code = ch.codePointAt(0);
      if (code === undefined) return '0000';
      const gid = font.glyphId(code);
      if (gid === 0 && code !== 0)
        throw new Error(`Missing glyph U+${code.toString(16)} (${ch}) in ${font.psName}`);
      return hex4(gid);
    })
    .join('');

const collectGidMap = (ops: DrawOp[], face: Face, font: TtfFont) => {
  const gidToCode = new Map<number, number>();
  ops.forEach((op) => {
    if (op.kind !== 'text' || op.face !== face) return;
    Array.from(op.text).forEach((ch) => {
      const code = ch.codePointAt(0);
      if (code === undefined) return;
      gidToCode.set(font.glyphId(code), code);
    });
  });
  return gidToCode;
};

const widthArray = (font: TtfFont, gids: number[]) => {
  const sorted = [...gids].sort((a, b) => a - b);
  const parts: string[] = [];
  let i = 0;
  while (i < sorted.length) {
    const start = i;
    while (i + 1 < sorted.length && sorted[i + 1] === sorted[i] + 1) i += 1;
    const widths = sorted
      .slice(start, i + 1)
      .map((gid) => String(to1000(font, font.glyphWidth(gid))));
    parts.push(`${sorted[start]} [${widths.join(' ')}]`);
    i += 1;
  }
  return `[ ${parts.join(' ')} ]`;
};

const toUnicodeCmap = (gidToCode: Map<number, number>) => {
  const pairs = [...gidToCode.entries()].sort((a, b) => a[0] - b[0]);
  const blocks: string[] = [];
  for (let start = 0; start < pairs.length; start += 100) {
    const slice = pairs.slice(start, start + 100);
    const lines = slice.map(([gid, code]) => `<${hex4(gid)}> <${hex4(code)}>`).join('\n');
    blocks.push(`${slice.length} beginbfchar\n${lines}\nendbfchar`);
  }
  return [
    '/CIDInit /ProcSet findresource begin',
    '12 dict begin',
    'begincmap',
    '/CIDSystemInfo << /Registry (Adobe) /Ordering (UCS) /Supplement 0 >> def',
    '/CMapName /Adobe-Identity-UCS def',
    '/CMapType 2 def',
    '1 begincodespacerange',
    '<0000> <FFFF>',
    'endcodespacerange',
    ...blocks,
    'endcmap',
    'CMapName currentdict /CMap defineresource pop',
    'end',
    'end',
  ].join('\n');
};

const latin1 = (text: string) => Buffer.from(text, 'latin1');

const buildPdf = (
  page1: DrawOp[],
  page2: DrawOp[],
  regular: TtfFont,
  bold: TtfFont,
  image: { data: Buffer; width: number; height: number },
) => {
  const objects: Buffer[] = [];
  const add = (body: Buffer) => {
    objects.push(body);
    return objects.length;
  };
  const addDict = (body: string) => add(latin1(body));
  const addStream = (dict: string, data: Buffer) =>
    add(Buffer.concat([latin1(`${dict}\nstream\n`), data, latin1('endstream')]));

  const embedFont = (font: TtfFont, gidToCode: Map<number, number>, stemV: number) => {
    const compressed = deflateSync(font.file, { level: 9 });
    const fileId = addStream(
      `<< /Length ${compressed.length} /Length1 ${font.file.length} /Filter /FlateDecode >>`,
      compressed,
    );
    const uni = latin1(toUnicodeCmap(gidToCode));
    const uniCompressed = deflateSync(uni, { level: 9 });
    const uniId = addStream(
      `<< /Length ${uniCompressed.length} /Filter /FlateDecode >>`,
      uniCompressed,
    );
    const bbox = font.bbox.map((value) => to1000(font, value)).join(' ');
    const descId = addDict(
      `<< /Type /FontDescriptor /FontName /${font.psName} /Flags 32 /FontBBox [${bbox}] /ItalicAngle ${pdfNumber(font.italicAngle)} /Ascent ${to1000(font, font.ascent)} /Descent ${to1000(font, font.descent)} /CapHeight ${to1000(font, font.capHeight)} /StemV ${stemV} /FontFile2 ${fileId} 0 R >>`,
    );
    const cidId = addDict(
      `<< /Type /Font /Subtype /CIDFontType2 /BaseFont /${font.psName} /CIDSystemInfo << /Registry (Adobe) /Ordering (Identity) /Supplement 0 >> /FontDescriptor ${descId} 0 R /DW 1000 /W ${widthArray(font, [...gidToCode.keys()])} /CIDToGIDMap /Identity >>`,
    );
    const type0Id = addDict(
      `<< /Type /Font /Subtype /Type0 /BaseFont /${font.psName} /Encoding /Identity-H /DescendantFonts [${cidId} 0 R] /ToUnicode ${uniId} 0 R >>`,
    );
    return type0Id;
  };

  const allOps = [...page1, ...page2];
  const regularId = embedFont(regular, collectGidMap(allOps, 'regular', regular), 80);
  const boldId = embedFont(bold, collectGidMap(allOps, 'bold', bold), 120);

  const imageCompressed = deflateSync(image.data, { level: 9 });
  const imageId = addStream(
    `<< /Type /XObject /Subtype /Image /Width ${image.width} /Height ${image.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /FlateDecode /Length ${imageCompressed.length} >>`,
    imageCompressed,
  );

  const pageStream = (ops: DrawOp[], fonts: TtfFont[]) => {
    const chunks: string[] = ['0 g'];
    ops.forEach((op) => {
      if (op.kind === 'image') {
        chunks.push(
          `q ${pdfNumber(op.width)} 0 0 ${pdfNumber(op.height)} ${pdfNumber(op.x)} ${pdfNumber(op.y)} cm /Im1 Do Q`,
        );
        return;
      }
      if (op.text === '') return;
      const font = op.face === 'regular' ? fonts[0] : fonts[1];
      const fontTag = op.face === 'regular' ? 'R' : 'B';
      chunks.push(
        `BT /${fontTag} ${pdfNumber(op.size)} Tf 1 0 0 1 ${pdfNumber(op.x)} ${pdfNumber(op.y)} Tm <${gidHex(font, op.text)}> Tj ET`,
      );
    });
    const data = deflateSync(latin1(chunks.join('\n')), { level: 9 });
    return addStream(`<< /Length ${data.length} /Filter /FlateDecode >>`, data);
  };

  const content1 = pageStream(page1, [regular, bold]);
  const content2 = pageStream(page2, [regular, bold]);

  const resources1 = `<< /Font << /R ${regularId} 0 R /B ${boldId} 0 R >> /XObject << /Im1 ${imageId} 0 R >> >>`;
  const resources2 = `<< /Font << /R ${regularId} 0 R /B ${boldId} 0 R >> >>`;
  const media = `[0 0 ${pdfNumber(PAGE_WIDTH)} ${pdfNumber(PAGE_HEIGHT)}]`;

  const pagesId = objects.length + 3;
  const page1Id = addDict(
    `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox ${media} /Contents ${content1} 0 R /Resources ${resources1} >>`,
  );
  const page2Id = addDict(
    `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox ${media} /Contents ${content2} 0 R /Resources ${resources2} >>`,
  );
  const actualPagesId = addDict(
    `<< /Type /Pages /Kids [${page1Id} 0 R ${page2Id} 0 R] /Count 2 >>`,
  );
  if (actualPagesId !== pagesId)
    throw new Error(`Pages id mismatch: expected ${pagesId}, got ${actualPagesId}`);
  const catalogId = addDict(`<< /Type /Catalog /Pages ${actualPagesId} 0 R >>`);

  const header = latin1('%PDF-1.4\n%\x80\x81\x82\x83\n');
  const parts: Buffer[] = [header];
  let offset = header.length;
  const xrefEntries = ['0000000000 65535 f \n'];
  objects.forEach((body, index) => {
    xrefEntries.push(`${String(offset).padStart(10, '0')} 00000 n \n`);
    const obj = latin1(`${index + 1} 0 obj\n`);
    const end = latin1('\nendobj\n');
    parts.push(obj, body, end);
    offset += obj.length + body.length + end.length;
  });
  const xrefOffset = offset;
  const xref = latin1(`xref\n0 ${objects.length + 1}\n${xrefEntries.join('')}`);
  const trailer = latin1(
    `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`,
  );
  return Buffer.concat([...parts, xref, trailer]);
};

const main = async () => {
  const regular = parseTtf(findFont(REGULAR_FONT_PATHS), 'Arial');
  const bold = parseTtf(findFont(BOLD_FONT_PATHS), 'Arial-Bold');
  if (regular.glyphId(0x0119) === 0) throw new Error('Arial is missing ę');

  const portraitPath = path.join(repoRoot, 'public', ...cv.portrait.src.replace(/^\//, '').split('/'));
  const raw = await sharp(portraitPath).removeAlpha().toColorspace('srgb').raw().toBuffer({
    resolveWithObject: true,
  });
  if (raw.info.channels !== 3)
    throw new Error(`Expected RGB portrait, got ${raw.info.channels} channels`);

  const page1 = layoutPage1(regular, bold);
  const page2 = layoutPage2(regular, bold);
  const pdf = buildPdf(page1, page2, regular, bold, {
    data: raw.data,
    width: raw.info.width,
    height: raw.info.height,
  });
  const outPath = path.join(repoRoot, 'public', 'cv.pdf');
  writeFileSync(outPath, pdf);
  console.log(`Wrote ${outPath} (${pdf.length} bytes)`);
};

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
