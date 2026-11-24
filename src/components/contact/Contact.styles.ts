import styled from 'styled-components';

/** Fluid px between the 390 and 1440 frames. Handles values that shrink as the viewport grows. */
const fluid = (at390: number, at1440: number) => {
  const low = Math.min(at390, at1440);
  const high = Math.max(at390, at1440);
  return `clamp(${low}px, calc(${at390}px + ${at1440 - at390} * ((100vw - 390px) / 1050)), ${high}px)`;
};

const linkFocus = `
  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.25em;
  }

  &:focus-visible {
    outline: 2px solid var(--ink);
    outline-offset: 3px;
  }
`;

export const Section = styled.section`
  background: var(--mint);
  color: var(--ink);
  padding: ${fluid(42, 56)} ${fluid(24, 64)} ${fluid(61, 43)};
`;

export const Kicker = styled.p`
  margin: 0;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: ${fluid(10, 12)};
  font-weight: 500;
  letter-spacing: 0;
  line-height: ${fluid(14.5, 17.4)};
`;

export const Heading = styled.h2`
  margin: ${fluid(28, 34)} 0 0;
  max-width: ${fluid(348, 1080)};
  font-family: var(--font-display);
  font-size: ${fluid(43, 100)};
  font-weight: 500;
  line-height: ${fluid(44.29, 101)};
`;

export const HeadingRest = styled.span`
  display: block;
`;

export const Body = styled.p`
  margin: ${fluid(30, 44)} 0 0;
  max-width: ${fluid(342, 1100)};
  color: var(--ink);
  font-family: var(--font-body);
  font-size: ${fluid(17, 20)};
  font-weight: 400;
  line-height: ${fluid(25.5, 29)};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  column-gap: ${fluid(24, 48)};
  row-gap: ${fluid(35, 16)};
  margin-top: ${fluid(90, 42)};
`;

export const Email = styled.a`
  color: inherit;
  font-family: var(--font-display);
  font-size: ${fluid(21, 30)};
  font-weight: 500;
  line-height: ${fluid(30.45, 43.5)};
  text-decoration: none;
  ${linkFocus}
`;

export const Social = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${fluid(28, 24)};
`;

export const SocialLink = styled.a`
  color: inherit;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  line-height: 17.4px;
  text-decoration: none;
  ${linkFocus}
`;
