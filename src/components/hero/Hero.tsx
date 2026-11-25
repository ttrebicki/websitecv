'use client';

import { heroLead, site } from '@/content/site';
import {
  Actions,
  Aside,
  AsideLine,
  Asterisk,
  EyebrowDesktop,
  EyebrowMobile,
  Gloss,
  Hairline,
  Headline,
  HeadlineLine,
  HeroRoot,
  Intro,
  Lead,
  Meta,
  MetaBody,
  MetaLabel,
  Name,
  Now,
  Place,
  PlaceLabel,
  Playground,
  PrimaryLink,
  ScrollHint,
  SecondaryLink,
  Side,
  Stack,
  Stage,
} from './Hero.styles';

const hero = site.hero;
const HEADLINE_LINES = hero.headline.split(' / ');
const ASIDE_LINES = hero.aside.split(' / ');

export const Hero = () => (
  <HeroRoot>
    <Stage>
      <Intro>
        <Name>{hero.name}</Name>
        <EyebrowDesktop>{hero.eyebrow.desktop}</EyebrowDesktop>
        <EyebrowMobile>{hero.eyebrow.mobile}</EyebrowMobile>
        <Headline>
          {HEADLINE_LINES.map((line) => (
            <HeadlineLine key={line}>{line}</HeadlineLine>
          ))}
          <Gloss aria-hidden="true">Klinika Polinice</Gloss>
        </Headline>
        <Lead>{heroLead}</Lead>
      </Intro>
      <Side>
        <Playground aria-hidden="true">
          <Asterisk>{hero.mark}</Asterisk>
        </Playground>
        <Aside>
          {ASIDE_LINES.map((line) => (
            <AsideLine key={line}>{line}</AsideLine>
          ))}
        </Aside>
      </Side>
      <Actions>
        <PrimaryLink href={hero.primary.href}>{hero.primary.label}</PrimaryLink>
        <SecondaryLink href={hero.secondary.href}>{hero.secondary.label}</SecondaryLink>
      </Actions>
    </Stage>
    <Hairline />
    <Meta>
      <Now>
        <MetaLabel>{hero.now}</MetaLabel>
        <MetaBody>{hero.nowBody}</MetaBody>
      </Now>
      <Place>
        <PlaceLabel>{hero.place}</PlaceLabel>
        <Stack>{hero.stackLine.desktop}</Stack>
      </Place>
      <ScrollHint>{hero.scrollHint.desktop}</ScrollHint>
    </Meta>
  </HeroRoot>
);

export default Hero;
