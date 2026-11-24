import { images, site } from '@/content/site';
import {
  Caption,
  Copy,
  Figure,
  Kicker,
  Paragraph,
  Portrait,
  Rule,
  Section,
  Title,
} from './About.styles';

const { about } = site;
const portrait = images.portrait;

export const About = () => (
  <Section id={about.id}>
    <Kicker>{about.kicker}</Kicker>
    <Figure>
      <Portrait
        src={portrait.src}
        alt={portrait.alt}
        width={portrait.width}
        height={portrait.height}
      />
      <Caption>{about.caption}</Caption>
    </Figure>
    <Copy>
      <Title>{about.title}</Title>
      {about.paragraphs.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
    </Copy>
    <Rule />
  </Section>
);

export default About;
