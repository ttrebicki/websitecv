import styled from 'styled-components';

/** 390px uses the min; 1440px uses the max. Values in between track the viewport. */
const fluid = (at390: number, at1440: number) => {
  const low = Math.min(at390, at1440);
  const high = Math.max(at390, at1440);
  return `clamp(${low}px, calc(${at390}px + ${at1440 - at390} * ((100vw - 390px) / 1050)), ${high}px)`;
};

const TWO_COL = '@media (min-width: 900px)';

export const Section = styled.section`
  background: var(--paper);
  color: var(--ink);
  padding: 0 ${fluid(24, 64)} ${fluid(48, 32)};
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  padding: ${fluid(47, 53)} 0 ${fluid(40, 30)};
  row-gap: ${fluid(12, 8)};

  ${TWO_COL} {
    align-items: end;
    column-gap: ${fluid(24, 48)};
    grid-template-columns: 1fr minmax(12rem, 20.625rem);
  }
`;

export const Kicker = styled.p`
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: ${fluid(10, 12)};
  font-weight: 500;
  letter-spacing: 0;
  line-height: ${fluid(14.5, 16.8)};
  margin: 0;

  ${TWO_COL} {
    color: var(--ink);
    grid-column: 1;
  }
`;

export const Heading = styled.h2`
  font-family: var(--font-display);
  font-size: ${fluid(36, 48)};
  font-weight: 500;
  line-height: ${fluid(39.6, 52.8)};
  margin: 0;

  ${TWO_COL} {
    grid-column: 1;
  }
`;

export const Dek = styled.p`
  /* Desktop-only line from the content map; hidden at the 390px layout. */
  display: none;
  color: var(--body-muted);
  font-family: var(--font-body);
  font-size: ${fluid(14, 16)};
  font-weight: 400;
  line-height: ${fluid(20, 22.4)};
  margin: 0;

  ${TWO_COL} {
    display: block;
    grid-column: 2;
    grid-row: 1 / span 2;
  }
`;

export const Projects = styled.div`
  display: grid;
  gap: ${fluid(48, 32)};
  grid-template-columns: 1fr;

  ${TWO_COL} {
    grid-template-columns: 1fr 1fr;
  }
`;
