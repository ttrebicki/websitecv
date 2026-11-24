import styled from 'styled-components';

/** 390px uses the min; 1440px uses the max. Values in between track the viewport. */
const fluid = (at390: number, at1440: number) => {
  const low = Math.min(at390, at1440);
  const high = Math.max(at390, at1440);
  return `clamp(${low}px, calc(${at390}px + ${at1440 - at390} * ((100vw - 390px) / 1050)), ${high}px)`;
};

const TWO_COL = '@media (min-width: 900px)';

export const Article = styled.article`
  background: var(--card);
  border-radius: ${fluid(10, 12)};
  display: grid;
  gap: ${fluid(20, 24)} ${fluid(24, 40)};
  /* Stack copy, then the diagram, then role and link. Two columns from 900px. */
  grid-template-areas:
    'top'
    'title'
    'body'
    'caps'
    'diagram'
    'role'
    'link';
  margin-bottom: ${fluid(44, 64)};
  padding: ${fluid(20, 40)};

  ${TWO_COL} {
    align-items: start;
    grid-template-areas:
      'top diagram'
      'title diagram'
      'body diagram'
      'caps diagram'
      'role diagram'
      'link diagram';
    grid-template-columns: minmax(0, 530px) minmax(0, 1fr);
  }
`;

export const Copy = styled.div`
  display: contents;
`;

export const Top = styled.div`
  align-items: baseline;
  display: flex;
  grid-area: top;
  justify-content: space-between;
`;

export const Kicker = styled.p`
  font-family: var(--font-mono);
  font-size: ${fluid(10, 12)};
  font-weight: 500;
  line-height: ${fluid(14.5, 17.4)};
  margin: 0;
`;

export const DesktopKicker = styled(Kicker)`
  display: none;

  ${TWO_COL} {
    display: block;
  }
`;

export const MobileKicker = styled(Kicker)`
  ${TWO_COL} {
    display: none;
  }
`;

export const DateStamp = styled.p`
  display: none;
  font-family: var(--font-mono);
  font-size: ${fluid(10, 11)};
  font-weight: 400;
  line-height: ${fluid(14.5, 15.95)};
  margin: 0;

  ${TWO_COL} {
    display: block;
  }
`;

export const Title = styled.h3`
  font-family: var(--font-display);
  font-size: ${fluid(30, 61)};
  font-weight: 500;
  grid-area: title;
  line-height: ${fluid(32, 62.83)};
  margin: 0;
`;

export const Body = styled.p`
  font-family: var(--font-body);
  font-size: ${fluid(15, 19)};
  font-weight: 400;
  grid-area: body;
  line-height: ${fluid(21.75, 27.55)};
  margin: 0;
`;

export const Caps = styled.div`
  grid-area: caps;
`;

export const CapabilityList = styled.div`
  color: var(--muted);
  font-family: var(--font-body);
  font-size: ${fluid(13, 15)};
  font-weight: 400;
  line-height: ${fluid(21.45, 25.5)};
  margin: 0;

  p {
    margin: 0;
  }
`;

export const DesktopCapabilities = styled(CapabilityList)`
  display: none;

  ${TWO_COL} {
    display: block;
  }
`;

export const MobileCapabilities = styled(CapabilityList)`
  ${TWO_COL} {
    display: none;
  }
`;

export const RoleBlock = styled.div`
  grid-area: role;
  margin-top: ${fluid(8, 16)};
`;

export const RoleLabel = styled.p`
  display: none;
  font-family: var(--font-mono);
  font-size: ${fluid(9, 10)};
  font-weight: 500;
  line-height: ${fluid(13, 14.5)};
  margin: 0 0 ${fluid(6, 10)};

  ${TWO_COL} {
    display: block;
  }
`;

export const RoleValue = styled.p`
  display: none;
  font-family: var(--font-body);
  font-size: ${fluid(14, 15)};
  font-weight: 400;
  line-height: ${fluid(20, 21.75)};
  margin: 0 0 ${fluid(16, 24)};

  ${TWO_COL} {
    display: block;
  }
`;

export const MobileRole = styled.p`
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: ${fluid(9, 10)};
  font-weight: 400;
  line-height: ${fluid(13.05, 14.5)};
  margin: 0;

  ${TWO_COL} {
    display: none;
  }
`;

export const ProjectLink = styled.a`
  align-items: center;
  color: var(--ink);
  display: inline-flex;
  font-family: var(--font-mono);
  font-size: ${fluid(13, 14)};
  font-weight: 500;
  line-height: ${fluid(18.85, 20.3)};
  grid-area: link;
  min-height: 44px;
  text-decoration: none;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(--ink);
    outline-offset: 3px;
  }
`;

export const Diagrams = styled.div`
  grid-area: diagram;
  min-width: 0;

  ${TWO_COL} {
    padding-top: ${fluid(24, 79)};
  }
`;

export const Figure = styled.figure`
  margin: 0;
`;

export const DesktopFigure = styled(Figure)`
  display: none;

  ${TWO_COL} {
    display: block;
  }
`;

export const MobileFigure = styled(Figure)`
  ${TWO_COL} {
    display: none;
  }
`;

export const Panel = styled.div`
  background: color-mix(in srgb, var(--paper) 40%, white);
  border: 1px solid var(--soft);
  border-radius: ${fluid(6, 10)};
  overflow: hidden;
  padding: ${fluid(15, 19)} ${fluid(16, 23)} ${fluid(16, 23)};
`;

export const MobilePanel = styled(Panel)`
  border: 0;
  padding: ${fluid(15, 16)} ${fluid(16, 16)} ${fluid(14, 16)};
`;

export const WorkspaceTitle = styled.p`
  font-family: var(--font-body);
  font-size: ${fluid(12, 13)};
  font-weight: 500;
  line-height: ${fluid(17, 18.85)};
  margin: 0 0 ${fluid(12, 16)};
`;

export const TabRow = styled.div`
  align-items: end;
  border-top: 1px solid var(--line);
  display: flex;
  flex-wrap: wrap;
  gap: ${fluid(16, 24)};
  margin: 0 calc(-1 * (${fluid(16, 23)}));
  padding: ${fluid(16, 24)} ${fluid(16, 23)} 0;
`;

export const Tab = styled.span`
  color: var(--muted);
  font-family: var(--font-body);
  font-size: ${fluid(13, 14)};
  font-weight: 400;
  line-height: ${fluid(18, 20.3)};
`;

export const ActiveTab = styled(Tab)`
  border-bottom: 2px solid var(--deep);
  color: var(--ink);
  font-weight: 600;
  padding-bottom: ${fluid(6, 8)};
`;

export const Language = styled.span`
  font-family: var(--font-mono);
  font-size: ${fluid(10, 11)};
  font-weight: 400;
  line-height: ${fluid(14.5, 15.95)};
  margin-left: auto;
`;

export const TranslationHead = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${fluid(12, 14)};
`;

export const TranslationTitle = styled.p`
  font-family: var(--font-body);
  font-size: ${fluid(13, 14)};
  font-weight: 600;
  line-height: ${fluid(18.85, 20.3)};
  margin: 0;
`;

export const Grid = styled.table`
  border-collapse: collapse;
  margin-top: ${fluid(16, 24)};
  width: 100%;

  th {
    color: var(--muted);
    font-family: var(--font-mono);
    font-size: ${fluid(9, 10)};
    font-weight: 500;
    line-height: ${fluid(13, 14.5)};
    padding: 0 0 ${fluid(8, 10)};
    text-align: left;
  }

  td {
    border-top: 1px solid color-mix(in srgb, var(--line) 80%, var(--paper));
    font-family: var(--font-body);
    font-size: ${fluid(12, 13)};
    font-weight: 400;
    line-height: ${fluid(16, 18.85)};
    padding: ${fluid(10, 12)} 0;
    vertical-align: top;
  }

  td:first-child {
    font-family: var(--font-mono);
    font-size: ${fluid(10, 11)};
    line-height: ${fluid(14.5, 15.95)};
    width: 34%;
  }
`;

export const PairList = styled.ul`
  border-top: 1px solid var(--line);
  list-style: none;
  margin: 0 calc(-1 * (${fluid(16, 16)}));
  padding: ${fluid(16, 18)} ${fluid(16, 16)} 0;
`;

export const Pair = styled.li`
  border-top: 1px solid color-mix(in srgb, var(--line) 80%, var(--paper));
  display: grid;
  font-family: var(--font-body);
  font-size: ${fluid(11, 12)};
  font-weight: 400;
  gap: ${fluid(8, 12)};
  grid-template-columns: 1fr 1fr;
  line-height: ${fluid(15.95, 16)};
  padding: ${fluid(12, 14)} 0;

  &:first-child {
    border-top: 0;
    padding-top: 0;
  }
`;

export const Status = styled.p`
  background: color-mix(in srgb, var(--mint) 28%, var(--paper));
  border-radius: ${fluid(3, 4)};
  color: var(--deep);
  font-family: var(--font-mono);
  font-size: ${fluid(8, 11)};
  font-weight: 400;
  line-height: ${fluid(11.6, 15.95)};
  margin: ${fluid(16, 28)} 0 0;
  padding: ${fluid(2, 12)} ${fluid(8, 12)};
  white-space: pre-wrap;
`;

export const Caption = styled.figcaption`
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: ${fluid(8, 10)};
  font-weight: 400;
  line-height: ${fluid(11.6, 14.5)};
  margin: ${fluid(16, 24)} 0 0;
`;

export const DesktopCaption = styled(Caption)`
  display: none;

  ${TWO_COL} {
    display: block;
  }
`;

export const MobileCaption = styled(Caption)`
  ${TWO_COL} {
    display: none;
  }
`;
