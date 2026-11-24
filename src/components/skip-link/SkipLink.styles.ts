import styled from 'styled-components';

/** Fluid px between the 390 and 1440 frames. */
const fluid = (minPx: number, maxPx: number) =>
  `clamp(${minPx}px, calc(${minPx}px + ${maxPx - minPx} * (100vw - 390px) / 1050), ${maxPx}px)`;

export const SkipAnchor = styled.a`
  position: absolute;
  inset-inline-start: ${fluid(24, 64)};
  top: ${fluid(12, 16)};
  z-index: 10;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
  background: var(--mint);
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: ${fluid(13, 14)};
  font-weight: 500;
  line-height: 1.4;
  text-decoration: none;

  &:focus {
    width: auto;
    height: auto;
    padding: 0.5rem 0.75rem;
    overflow: visible;
    clip: auto;
    clip-path: none;
    outline: 2px solid var(--ink);
    outline-offset: 3px;
  }
`;
