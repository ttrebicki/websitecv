import styled from 'styled-components';

const DESKTOP = '@media (min-width: 900px)';

/** Interpolate a px value from the 390px frame to the 1440px frame. */
const fluid = (at390: number, at1440: number) => {
  const low = Math.min(at390, at1440);
  const high = Math.max(at390, at1440);
  return `clamp(${low}px, calc(${at390}px + ${at1440 - at390} * ((100vw - 390px) / 1050)), ${high}px)`;
};

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'kicker'
    'figure'
    'copy'
    'rule';
  row-gap: ${fluid(24, 16)};
  background: var(--paper);
  color: var(--ink);
  padding: ${fluid(46, 92)} ${fluid(24, 64)} ${fluid(1, 12)};
  max-width: 1440px;
  margin: 0 auto;

  ${DESKTOP} {
    grid-template-columns: minmax(16rem, 26.25rem) minmax(0, 1fr);
    grid-template-areas:
      'figure kicker'
      'figure copy'
      'rule rule';
    column-gap: ${fluid(40, 108)};
    align-items: start;
  }
`;

export const Kicker = styled.p`
  grid-area: kicker;
  margin: 0;
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: ${fluid(10, 12)};
  line-height: ${fluid(14.5, 17.4)};
  color: var(--muted);
`;

export const Figure = styled.figure`
  grid-area: figure;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${fluid(22, 21)};
`;

export const Portrait = styled.img`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 420 / 448;
  object-fit: cover;
  object-position: center;
  border-radius: ${fluid(8, 10)};
`;

export const Caption = styled.figcaption`
  margin: 0;
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: ${fluid(10, 11)};
  line-height: ${fluid(14.5, 15.95)};
  color: var(--muted);
`;

export const Copy = styled.div`
  grid-area: copy;
`;

export const Title = styled.h2`
  margin: 0 0 ${fluid(26, 39)};
  font-family: var(--font-display);
  font-weight: 500;
  font-size: ${fluid(40, 64)};
  line-height: ${fluid(42, 67.2)};
  color: var(--ink);
`;

export const Paragraph = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-weight: 400;
  font-size: ${fluid(16, 19)};
  line-height: ${fluid(25.6, 30.4)};
  color: var(--ink);

  &:not(:first-of-type) {
    margin-top: ${fluid(24, 26)};
  }
`;

export const Rule = styled.div`
  grid-area: rule;
  height: 1px;
  margin-top: ${fluid(24, 20)};
  background: var(--line);
`;
