import { site } from '@/content/site';
import {
  Company,
  Dates,
  Dek,
  DesktopCopy,
  Header,
  Kicker,
  MobileCopy,
  Role,
  Row,
  Rows,
  Section,
  Title,
  Where,
} from './Experience.styles';

const { experience } = site;

export const Experience = () => (
  <Section>
    <Header>
      <Kicker>{experience.kicker}</Kicker>
      <Title>{experience.title}</Title>
      <Dek>{experience.dek.desktop}</Dek>
    </Header>
    <Rows>
      {experience.rows.map((row) => (
        <Row key={`${row.dates}-${row.company}`}>
          <Dates>{row.dates}</Dates>
          <Company>{row.company}</Company>
          <Role>
            {typeof row.role === 'string' ? (
              row.role
            ) : (
              <>
                <DesktopCopy>{row.role.desktop}</DesktopCopy>
                <MobileCopy>{row.role.mobile}</MobileCopy>
              </>
            )}
          </Role>
          {row.where.desktop ? <Where>{row.where.desktop}</Where> : null}
        </Row>
      ))}
    </Rows>
  </Section>
);

export default Experience;
