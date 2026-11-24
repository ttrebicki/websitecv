import { site } from '@/content/site';
import { Block, Items, Joiner, Layout, Title } from './EarlierExplorations.styles';

const earlier = site.work.earlier;
const [firstItem, secondItem] = earlier.items;

export const EarlierExplorations = () => (
  <Block>
    <Layout>
      <Title>{earlier.title}</Title>
      <Items>
        <span>{firstItem}</span>
        <Joiner>{earlier.joiner.desktop}</Joiner>
        <span>{secondItem}</span>
      </Items>
    </Layout>
  </Block>
);
