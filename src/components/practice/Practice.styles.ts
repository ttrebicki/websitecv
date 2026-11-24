import styled from 'styled-components';

const DESKTOP = '@media (min-width: 900px)';

/** Interpolate a px value from the 390px frame to the 1440px frame. */
const fluid = (at390: number, at1440: number) => {
  const low = Math.min(at390, at1440);
  const high = Math.max(at390, at1440);
  return `clamp(${low}px, calc(${at390}px + ${at1440 - at390} * ((100vw - 390px) / 1050)), ${high}px)`;
};

export const Section = styled.section`
  background: var(--ink);
  color: var(--paper);
`;

/** Keeps the copy on the 1440 frame while the ink background runs to the viewport edges. */
export const Inner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${fluid(42, 57)} ${fluid(24, 64)} ${fluid(80, 72)};
`;

export const Kicker = styled.p`
  margin: 0;
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: ${fluid(10, 12)};
  line-height: ${fluid(14.5, 17.4)};
  color: var(--mint);
`;

export const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: ${fluid(26, 37)};

  ${DESKTOP} {
    grid-template-columns: minmax(0, 1fr) minmax(12rem, 18.75rem);
    column-gap: ${fluid(24, 48)};
    align-items: start;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: ${fluid(36, 68)};
  line-height: ${fluid(38.16, 71.4)};
  color: var(--paper);
`;

export const Asides = styled.div`
  display: none;
  margin: 0;
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: 12px;
  line-height: 20.4px;
  color: var(--mint);

  p {
    margin: 0;
  }

  ${DESKTOP} {
    display: block;
    grid-column: 2;
    grid-row: 1;
    justify-self: end;
    padding-top: ${fluid(0, 26)};
    width: min(18.75rem, 100%);
  }
`;

export const Body = styled.p`
  margin: ${fluid(48, 35)} 0 0;
  max-width: 50rem;
  font-family: var(--font-body);
  font-weight: 400;
  font-size: ${fluid(16, 20)};
  line-height: ${fluid(24.8, 30)};
  color: var(--going);
`;

export const Steps = styled.ol`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  margin: ${fluid(48, 57)} 0 0;
  padding: 0;
  list-style: none;

  ${DESKTOP} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: ${fluid(24, 32)};
  }
`;

export const Step = styled.li`
  margin: 0;
  padding-top: ${fluid(26, 24)};
  border-top: 1px solid var(--stage-line);
  display: grid;
  grid-template-columns: ${fluid(40, 48)} minmax(0, 1fr);
  column-gap: ${fluid(3, 0)};
  row-gap: ${fluid(8, 11)};
`;

export const StepNumber = styled.span`
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: ${fluid(11, 12)};
  line-height: ${fluid(16, 17.4)};
  color: var(--mint);
  padding-top: ${fluid(8, 6)};
`;

export const StepTitle = styled.h3`
  margin: 0;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 23px;
  line-height: 33.35px;
  color: var(--paper);
`;

export const StepBody = styled.p`
  grid-column: 2;
  margin: 0;
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 15px;
  line-height: ${fluid(23.25, 24)};
  color: var(--soft);
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
