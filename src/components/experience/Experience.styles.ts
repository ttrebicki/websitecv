import styled from 'styled-components';

const DESKTOP = '@media (min-width: 900px)';
const WIDE = '@media (min-width: 1200px)';

/** Interpolate a px value from the 390px frame to the 1440px frame. */
const fluid = (at390: number, at1440: number) => {
  const low = Math.min(at390, at1440);
  const high = Math.max(at390, at1440);
  return `clamp(${low}px, calc(${at390}px + ${at1440 - at390} * ((100vw - 390px) / 1050)), ${high}px)`;
};

export const Section = styled.section`
  background: var(--paper);
  color: var(--ink);
  padding: ${fluid(42, 56)} ${fluid(24, 64)} ${fluid(64, 80)};
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: ${fluid(50, 55)};

  ${DESKTOP} {
    grid-template-columns: minmax(0, 1fr) minmax(12rem, 22.4375rem);
    column-gap: ${fluid(24, 48)};
    align-items: end;
  }
`;

export const Kicker = styled.p`
  margin: 0;
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: ${fluid(10, 12)};
  line-height: ${fluid(14.5, 17.4)};
  color: var(--muted);

  ${DESKTOP} {
    grid-column: 1 / -1;
  }
`;

export const Title = styled.h2`
  margin: ${fluid(24, 21)} 0 0;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: ${fluid(40, 48)};
  line-height: ${fluid(42, 52.8)};
  color: var(--ink);
`;

export const Dek = styled.p`
  display: none;
  margin: 0;
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 16px;
  line-height: 23.2px;
  color: var(--muted);

  ${DESKTOP} {
    display: block;
    grid-column: 2;
    grid-row: 2;
    justify-self: end;
    align-self: end;
    max-width: 22.5rem;
    text-align: left;
  }
`;

export const Rows = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Row = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: ${fluid(8, 0)};
  margin: 0;
  padding: ${fluid(18, 16)} 0 ${fluid(20, 16)};
  border-top: 1px solid var(--line);

  ${WIDE} {
    grid-template-columns: 19.375rem 22.5rem minmax(12rem, 1fr) 5.625rem;
    column-gap: ${fluid(24, 32)};
    align-items: baseline;
  }
`;

export const Dates = styled.p`
  margin: 0;
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: ${fluid(10, 11)};
  line-height: ${fluid(14.5, 15.95)};
  color: var(--muted);
`;

export const Company = styled.h3`
  margin: 0;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: ${fluid(23, 21)};
  line-height: ${fluid(33.35, 30.45)};
  color: var(--ink);
`;

export const Role = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-weight: 400;
  font-size: ${fluid(13, 14)};
  line-height: ${fluid(18.85, 20.3)};
  color: var(--ink);
`;

export const Where = styled.p`
  display: none;
  margin: 0;
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: 11px;
  line-height: 15.95px;
  color: var(--muted);
  text-align: left;

  ${DESKTOP} {
    display: block;
  }

  ${WIDE} {
    text-align: right;
  }
`;

/** Keeps both breakpoint strings in the document; only one is visible. */
export const DesktopCopy = styled.span`
  display: none;

  ${DESKTOP} {
    display: inline;
  }
`;

export const MobileCopy = styled.span`
  display: inline;

  ${DESKTOP} {
    display: none;
  }
`;
