import styled from 'styled-components';

const DESKTOP = '@media (min-width: 900px)';
const WIDE = '@media (min-width: 1100px)';

/** Interpolate a px value from the 390px frame to the 1440px frame. */
const fluid = (at390: number, at1440: number) => {
  const low = Math.min(at390, at1440);
  const high = Math.max(at390, at1440);
  return `clamp(${low}px, calc(${at390}px + ${at1440 - at390} * ((100vw - 390px) / 1050)), ${high}px)`;
};

export const Section = styled.section`
  background: var(--paper);
  color: var(--ink);
  padding: ${fluid(42, 48)} ${fluid(24, 64)} ${fluid(80, 56)};
  max-width: 1440px;
  margin: 0 auto;
`;

export const Kicker = styled.p`
  margin: 0;
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: ${fluid(10, 12)};
  line-height: ${fluid(14.5, 17.4)};
  color: var(--muted);
`;

export const Title = styled.h2`
  margin: ${fluid(24, 19)} 0 0;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: ${fluid(36, 44)};
  line-height: ${fluid(37.8, 48.4)};
  color: var(--ink);
`;

export const Groups = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${fluid(18, 32)};
  row-gap: ${fluid(60, 0)};
  margin-top: ${fluid(64, 34)};

  ${WIDE} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const Group = styled.div`
  min-width: 0;
  padding-top: ${fluid(20, 19)};
  border-top: 1px solid var(--line);
`;

export const Heading = styled.h3`
  margin: 0;
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: ${fluid(9, 10)};
  line-height: ${fluid(13.05, 14.5)};
  color: var(--muted);
`;

export const List = styled.ul`
  margin: ${fluid(21, 21)} 0 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  margin: 0;
  font-family: var(--font-body);
  font-weight: 400;
  font-size: ${fluid(13, 17)};
  line-height: ${fluid(22.75, 28.9)};
  color: var(--ink);
`;

export const DesktopList = styled(List)`
  display: none;

  ${DESKTOP} {
    display: block;
  }
`;

export const MobileList = styled(List)`
  display: block;

  ${DESKTOP} {
    display: none;
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
