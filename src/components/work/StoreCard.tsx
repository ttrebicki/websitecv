import { images, site } from '@/content/site';
import {
  Article,
  DesktopBody,
  Kicker,
  Links,
  Media,
  MediaImage,
  MediaLabel,
  MobileBody,
  ProjectLink,
  Stack,
  Title,
} from './StoreCard.styles';

const store = site.work.store;
const storeImage = images.store;
const STORE_SIZES = '(min-width: 900px) 18vw, 45vw';
const EXTERNAL_REL = 'noreferrer';

export const StoreCard = () => (
  <Article>
    <Media>
      <MediaLabel>{store.mediaLabel.desktop}</MediaLabel>
      <MediaImage
        alt={storeImage.alt}
        height={storeImage.height}
        sizes={STORE_SIZES}
        src={storeImage.src}
        width={storeImage.width}
      />
    </Media>
    <Kicker>{store.kicker}</Kicker>
    <Title>{store.title}</Title>
    <DesktopBody>{store.body.desktop}</DesktopBody>
    <MobileBody>{store.body.mobile}</MobileBody>
    <Stack>{store.stack}</Stack>
    <Links>
      <ProjectLink href={store.live.href} rel={EXTERNAL_REL} target="_blank">
        {store.live.label}
      </ProjectLink>
      <ProjectLink href={store.github.href} rel={EXTERNAL_REL} target="_blank">
        {store.github.label}
      </ProjectLink>
    </Links>
  </Article>
);
