import styled from 'styled-components';

/** Matches nav: stacked labels below this width, one row from here up. */
const DESKTOP_MIN = '56.25rem';

/** Fluid px between the 390 and 1440 frames. */
const fluid = (at390: number, at1440: number) => {
  const low = Math.min(at390, at1440);
  const high = Math.max(at390, at1440);
  return `clamp(${low}px, calc(${at390}px + ${at1440 - at390} * ((100vw - 390px) / 1050)), ${high}px)`;
};

const FooterLink = styled.a`
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.25em;
  }

  &:focus-visible {
    outline: 2px solid var(--ink);
    outline-offset: 3px;
  }
`;

export const FooterRoot = styled.footer`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  row-gap: ${fluid(32, 36)};
  column-gap: 1rem;
  min-height: ${fluid(136, 88)};
  padding-inline: ${fluid(24, 64)};
  padding-block: ${fluid(28, 36)};
  background: var(--mint);
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: ${fluid(10, 11)};
  line-height: 1.45;

  &::before {
    content: '';
    position: absolute;
    inset-inline: ${fluid(24, 64)};
    top: 0;
    height: 1px;
    background: var(--hairline);
  }

  @media (min-width: ${DESKTOP_MIN}) {
    flex-wrap: nowrap;
    row-gap: 0;
    height: ${fluid(76, 88)};
    min-height: ${fluid(76, 88)};
    padding-block: 0;
  }
`;

export const Copyright = styled.p`
  flex: 1 0 100%;
  margin: 0;
  white-space: nowrap;

  @media (min-width: ${DESKTOP_MIN}) {
    flex: 0 1 auto;
  }
`;

export const DownloadLink = FooterLink;

export const DesktopEndLink = styled(FooterLink)`
  display: none;

  @media (min-width: ${DESKTOP_MIN}) {
    display: inline;
  }
`;

export const MobileEndLink = styled(FooterLink)`
  display: inline;

  @media (min-width: ${DESKTOP_MIN}) {
    display: none;
  }
`;
