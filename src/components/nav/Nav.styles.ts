import styled from 'styled-components';

/** Desktop label set (portfolio brand + section links) from this width up. */
const DESKTOP_MIN = '56.25rem';

/** Fluid px between the 390 and 1440 frames. */
const fluid = (minPx: number, maxPx: number) =>
  `clamp(${minPx}px, calc(${minPx}px + ${maxPx - minPx} * (100vw - 390px) / 1050), ${maxPx}px)`;

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

export const NavRoot = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${fluid(76, 88)};
  padding-inline: ${fluid(24, 64)};
  background: var(--mint);
  color: var(--ink);

  &::after {
    content: '';
    position: absolute;
    inset-inline: ${fluid(24, 64)};
    bottom: 0;
    height: 1px;
    background: var(--hairline);
  }
`;

export const BrandCluster = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${fluid(16, 48)};
  min-width: 0;
`;

export const Name = styled.p`
  margin: 0;
  font-family: var(--font-display);
  font-size: ${fluid(20, 22)};
  font-weight: 700;
  line-height: 1.4;
  white-space: nowrap;

  @media (min-width: ${DESKTOP_MIN}) {
    display: none;
  }
`;

export const DesktopBrand = styled.p`
  display: none;
  margin: 0;
  font-family: var(--font-mono);
  font-size: 11px;
  line-height: 1.4;
  white-space: nowrap;

  @media (min-width: ${DESKTOP_MIN}) {
    display: block;
  }
`;

export const LinkList = styled.div`
  display: none;
  align-items: center;
  gap: ${fluid(28, 40)};

  @media (min-width: ${DESKTOP_MIN}) {
    display: flex;
  }
`;

export const NavLink = styled.a`
  color: inherit;
  font-family: var(--font-mono);
  font-size: 14px;
  line-height: 1.4;
  text-decoration: none;
  white-space: nowrap;
  ${linkFocus}
`;

export const NavCta = styled(NavLink)`
  font-weight: 500;
  margin-inline-start: ${fluid(8, 16)};
`;

export const MobileCta = styled(NavCta)`
  margin-inline-start: 0;
  font-size: 13px;

  @media (min-width: ${DESKTOP_MIN}) {
    display: none;
  }
`;
