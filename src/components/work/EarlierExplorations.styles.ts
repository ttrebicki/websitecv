import styled from 'styled-components';

/** 390px uses the min; 1440px uses the max. Values in between track the viewport. */
const fluid = (at390: number, at1440: number) => {
  const low = Math.min(at390, at1440);
  const high = Math.max(at390, at1440);
  return `clamp(${low}px, calc(${at390}px + ${at1440 - at390} * ((100vw - 390px) / 1050)), ${high}px)`;
};

const TWO_COL = '@media (min-width: 900px)';

export const Block = styled.div`
  border-top: 1px solid var(--line);
  margin-top: ${fluid(40, 48)};
  padding-top: ${fluid(24, 22)};
`;

export const Title = styled.p`
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: ${fluid(10, 10)};
  font-weight: 500;
  line-height: ${fluid(14.5, 14.5)};
  margin: 0 0 ${fluid(16, 0)};

  ${TWO_COL} {
    font-weight: 400;
  }
`;

export const Layout = styled.div`
  ${TWO_COL} {
    align-items: baseline;
    display: flex;
    justify-content: space-between;
  }
`;

export const Items = styled.p`
  color: var(--muted);
  display: flex;
  flex-direction: column;
  font-family: var(--font-mono);
  font-size: ${fluid(12, 12)};
  font-weight: 400;
  gap: ${fluid(8, 0)};
  line-height: ${fluid(21.6, 17.4)};
  margin: 0;

  ${TWO_COL} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`;

export const Joiner = styled.span`
  display: none;

  /* Keep the two explorations on one line with the content-map joiner from 900px. */
  ${TWO_COL} {
    display: inline;
    white-space: pre;
  }
`;
