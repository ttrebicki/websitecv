import { site } from '@/content/site';
import { EarlierExplorations } from './EarlierExplorations';
import { GoingCard } from './GoingCard';
import { MimeeqCard } from './MimeeqCard';
import { StoreCard } from './StoreCard';
import { Dek, Header, Heading, Kicker, Projects, Section } from './WorkSection.styles';

const work = site.work;

export const WorkSection = () => (
  <Section id={work.id}>
    <Header>
      <Kicker>{work.kicker}</Kicker>
      <Heading>{work.title}</Heading>
      <Dek>{work.dek.desktop}</Dek>
    </Header>
    <MimeeqCard />
    <Projects>
      <GoingCard />
      <StoreCard />
    </Projects>
    <EarlierExplorations />
  </Section>
);
