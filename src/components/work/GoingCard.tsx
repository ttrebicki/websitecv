import { images, site } from '@/content/site';
import {
  Article,
  Body,
  Kicker,
  Media,
  MediaImage,
  MediaLabel,
  ProjectLink,
  Stack,
  Title,
} from './GoingCard.styles';

const going = site.work.going;
const goingImage = images.going;
const GOING_SIZES = '(min-width: 900px) 32vw, 80vw';
const EXTERNAL_REL = 'noreferrer';

export const GoingCard = () => (
  <Article>
    <Media>
      <MediaLabel>{going.mediaLabel.desktop}</MediaLabel>
      <MediaImage
        alt={goingImage.alt}
        height={goingImage.height}
        sizes={GOING_SIZES}
        src={goingImage.src}
        width={goingImage.width}
      />
    </Media>
    <Kicker>{going.kicker}</Kicker>
    <Title>{going.title}</Title>
    <Body>{going.body}</Body>
    <Stack>{going.stack}</Stack>
    <ProjectLink href={going.link.href} rel={EXTERNAL_REL} target="_blank">
      {going.link.label}
    </ProjectLink>
  </Article>
);
