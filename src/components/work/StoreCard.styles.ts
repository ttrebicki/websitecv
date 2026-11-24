import Image from 'next/image';
import styled from 'styled-components';

/** 390px uses the min; 1440px uses the max. Values in between track the viewport. */
const fluid = (at390: number, at1440: number) => {
  const low = Math.min(at390, at1440);
  const high = Math.max(at390, at1440);
  return `clamp(${low}px, calc(${at390}px + ${at1440 - at390} * ((100vw - 390px) / 1050)), ${high}px)`;
};

const TWO_COL = '@media (min-width: 900px)';

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const Media = styled.div`
  align-items: center;
  background: var(--card);
  border-radius: ${fluid(10, 12)};
  display: flex;
  height: ${fluid(304, 416)};
  justify-content: center;
  overflow: hidden;
  padding: ${fluid(15, 24)} ${fluid(80, 180)};
  position: relative;
`;

export const MediaLabel = styled.p`
  display: none;
  font-family: var(--font-mono);
  font-size: ${fluid(9, 10)};
  font-weight: 500;
  left: ${fluid(20, 24)};
  line-height: ${fluid(13, 14.5)};
  margin: 0;
  position: absolute;
  top: ${fluid(16, 23)};

  ${TWO_COL} {
    display: block;
  }
`;

export const MediaImage = styled(Image)`
  display: block;
  height: auto;
  max-height: 100%;
  object-fit: contain;
  width: auto;
  max-width: 100%;
`;

export const Kicker = styled.p`
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: ${fluid(10, 11)};
  font-weight: 500;
  line-height: ${fluid(14.5, 15.95)};
  margin: ${fluid(24, 30)} 0 0;
`;

export const Title = styled.h3`
  font-family: var(--font-display);
  font-size: ${fluid(31, 36)};
  font-weight: 500;
  line-height: ${fluid(34.1, 39.6)};
  margin: ${fluid(8, 16)} 0 0;
`;

export const Body = styled.p`
  font-family: var(--font-body);
  font-size: ${fluid(16, 17)};
  font-weight: 400;
  line-height: ${fluid(23.2, 24.65)};
  margin: ${fluid(16, 22)} 0 0;
`;

export const DesktopBody = styled(Body)`
  display: none;

  ${TWO_COL} {
    display: block;
  }
`;

export const MobileBody = styled(Body)`
  ${TWO_COL} {
    display: none;
  }
`;

export const Stack = styled.p`
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: ${fluid(9, 10)};
  font-weight: 400;
  line-height: ${fluid(13.05, 14.5)};
  margin: ${fluid(20, 32)} 0 0;
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${fluid(16, 32)};
  margin-top: ${fluid(16, 24)};
`;

export const ProjectLink = styled.a`
  align-items: center;
  color: var(--ink);
  display: inline-flex;
  font-family: var(--font-mono);
  font-size: ${fluid(13, 14)};
  font-weight: 500;
  line-height: ${fluid(18.85, 20.3)};
  min-height: 44px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(--ink);
    outline-offset: 3px;
  }
`;
