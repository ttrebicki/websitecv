import styled, { css, keyframes } from 'styled-components';

/** Values in between 390px and 1440px track the viewport, including when they shrink. */
const fluid = (at390: number, at1440: number) => {
  const low = Math.min(at390, at1440);
  const high = Math.max(at390, at1440);
  return `clamp(${low}px, calc(${at390}px + ${at1440 - at390} * ((100vw - 390px) / 1050)), ${high}px)`;
};

const DESKTOP_MIN = '56.25rem';
const desktop = `@media (min-width: ${DESKTOP_MIN})`;

const linkFocus = css`
  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.25em;
  }

  &:focus-visible {
    outline: 2px solid var(--ink);
    outline-offset: 3px;
  }
`;

/** Headline starts 14px lower and settles; layout size is unchanged because only transform moves. */
const headlineRise = keyframes`
  from {
    transform: translateY(14px);
  }

  to {
    transform: translateY(0);
  }
`;

/**
 * Asterisk turns, overshoots, and settles in 1.6s.
 * Keyframe times map the 2s Figma timeline (settle at 0.8) onto that 1.6s window.
 */
const asteriskTurn = keyframes`
  0% {
    transform: rotate(0deg);
    animation-timing-function: ease-in-out;
  }

  40.625% {
    transform: rotate(65deg);
    animation-timing-function: ease-out;
  }

  71.875% {
    transform: rotate(-8deg);
    animation-timing-function: ease-out;
  }

  100% {
    transform: rotate(0deg);
  }
`;

const restMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: none;
  }
`;

/** Letters shift through the rainbow once, then return to ink. */
const rainbowLetters = keyframes`
  0% {
    color: transparent;
    background-position: 0% 50%;
  }

  75% {
    color: transparent;
    background-position: 100% 50%;
  }

  100% {
    color: var(--ink);
    background-position: 100% 50%;
  }
`;

/** One gloss, named Klinika Polinice, crosses the headline from left to right. */
const klinikaPolinice = keyframes`
  0% {
    transform: translateX(-120%);
    opacity: 0;
  }

  15% {
    opacity: 0.9;
  }

  100% {
    transform: translateX(120%);
    opacity: 0;
  }
`;

export const HeroRoot = styled.section`
  overflow-x: hidden;
  background: var(--mint);
  color: var(--ink);
  padding: ${fluid(38, 57)} ${fluid(24, 64)} ${fluid(32, 20)};
`;

export const Stage = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-areas:
    'intro intro'
    'side side'
    'actions actions';
  align-items: start;

  ${desktop} {
    grid-template-columns: minmax(0, 1fr) ${fluid(160, 376)};
    grid-template-areas:
      'intro side'
      'actions side';
    column-gap: ${fluid(24, 40)};
  }
`;

export const Intro = styled.div`
  grid-area: intro;
`;

export const Name = styled.p`
  margin: 0 0 ${fluid(16, 20)};
  font-family: var(--font-display);
  font-size: ${fluid(20, 22)};
  font-weight: 700;
  line-height: 1.4;
`;

export const Eyebrow = styled.p`
  margin: 0 0 ${fluid(34, 37)};
  font-family: var(--font-mono);
  font-size: ${fluid(10, 12)};
  font-weight: 500;
  line-height: ${fluid(14.5, 16.8)};
`;

export const EyebrowDesktop = styled(Eyebrow)`
  display: none;

  ${desktop} {
    display: block;
  }
`;

export const EyebrowMobile = styled(Eyebrow)`
  ${desktop} {
    display: none;
  }
`;

export const Headline = styled.h1`
  position: relative;
  overflow: hidden;
  margin: 0 0 ${fluid(24, 50)};
  max-width: ${fluid(350, 1050)};
  font-family: var(--font-display);
  font-size: ${fluid(40, 100)};
  font-weight: 500;
  line-height: ${fluid(42, 102)};
  animation: ${headlineRise} 650ms ease-out 1 both;
  ${restMotion}
`;

/** The Klinika Polinice gloss. Hidden from assistive tech; it is decoration. */
export const Gloss = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  color: white;
  font: inherit;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  pointer-events: none;
  mix-blend-mode: soft-light;
  animation: ${klinikaPolinice} 1.4s ease-in-out 1 both;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

export const HeadlineLine = styled.span`
  display: block;
  background-image: linear-gradient(
    90deg,
    #ff5a5a,
    #ffb020,
    #ffe14a,
    #3dff8a,
    #3dc9ff,
    #8a6dff,
    #ff4d9a,
    #ff5a5a
  );
  background-size: 220% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: var(--ink);
  animation: ${rainbowLetters} 1.3s ease-in-out 1;
  ${restMotion}
`;

export const Lead = styled.p`
  margin: 0;
  max-width: ${fluid(342, 786)};
  font-family: var(--font-body);
  font-size: ${fluid(17, 22)};
  font-weight: 400;
  line-height: ${fluid(25.5, 33)};
`;

export const Side = styled.div`
  grid-area: side;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  gap: ${fluid(16, 24)};
  margin-block: ${fluid(40, 0)};

  ${desktop} {
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    align-self: stretch;
    min-height: ${fluid(200, 420)};
    margin-block: 0;
    padding-top: ${fluid(0, 160)};
  }
`;

export const Playground = styled.div`
  /* Fixed clip box so the rotating mark cannot grow the hero. */
  overflow: hidden;
  flex: 0 0 auto;
  width: ${fluid(156, 376)};
  height: ${fluid(182, 348)};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const Asterisk = styled.span`
  display: block;
  font-family: var(--font-display);
  font-size: ${fluid(160, 490)};
  font-weight: 700;
  line-height: 1;
  transform-origin: 50% 50%;
  animation: ${asteriskTurn} 1.6s 1 both;
  ${restMotion}
`;

export const Aside = styled.div`
  font-family: var(--font-mono);
  font-size: ${fluid(10, 12)};
  font-weight: 400;
  line-height: ${fluid(14.5, 18)};

  ${desktop} {
    text-align: right;
    padding-inline-end: ${fluid(0, 16)};
  }
`;

export const AsideLine = styled.p`
  margin: 0;
`;

export const Actions = styled.div`
  grid-area: actions;
  display: flex;
  flex-direction: column;
  gap: ${fluid(12, 16)};
  margin-top: ${fluid(24, 46)};
  width: 100%;

  ${desktop} {
    flex-direction: row;
    width: auto;
  }
`;

const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  min-height: ${fluid(52, 56)};
  padding: 0 ${fluid(18, 20)};
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: ${fluid(14, 15)};
  font-weight: 500;
  line-height: ${fluid(19.6, 21)};
  text-decoration: none;
  white-space: nowrap;
  ${linkFocus}

  ${desktop} {
    width: auto;
  }
`;

export const PrimaryLink = styled(ActionLink)`
  background: var(--ink);
  color: var(--mint);
`;

export const SecondaryLink = styled(ActionLink)`
  background: transparent;
  color: var(--ink);
  border: 1px solid var(--ink);
`;

export const Hairline = styled.hr`
  border: 0;
  height: 1px;
  margin: ${fluid(32, 42)} 0 ${fluid(20, 25)};
  background: var(--hairline);
`;

export const Meta = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${fluid(24, 16)};

  ${desktop} {
    grid-template-columns: 1fr 1fr auto;
    align-items: center;
    gap: ${fluid(16, 24)};
  }
`;

export const Now = styled.div``;

export const Place = styled.div``;

export const MetaLabel = styled.p`
  margin: 0 0 ${fluid(8, 7)};
  font-family: var(--font-mono);
  font-size: ${fluid(10, 11)};
  font-weight: 500;
  line-height: ${fluid(14.5, 15.4)};
`;

export const PlaceLabel = styled(MetaLabel)`
  font-weight: 400;
`;

export const MetaBody = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: ${fluid(14, 15)};
  font-weight: 400;
  line-height: ${fluid(20.3, 21)};
`;

export const Stack = styled(MetaBody)`
  display: none;

  ${desktop} {
    display: block;
  }
`;

export const ScrollHint = styled.p`
  display: none;
  margin: 0;
  font-family: var(--font-mono);
  font-size: ${fluid(10, 11)};
  font-weight: 400;
  line-height: ${fluid(14.5, 15.4)};
  white-space: nowrap;

  ${desktop} {
    display: block;
  }
`;
