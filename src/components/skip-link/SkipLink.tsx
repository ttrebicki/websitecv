import { site } from '@/content/site';
import { SkipAnchor } from './SkipLink.styles';

const SKIP_HREF = '#content';

const SkipLink = () => (
  <SkipAnchor href={SKIP_HREF}>{site.skipLink}</SkipAnchor>
);

export default SkipLink;
