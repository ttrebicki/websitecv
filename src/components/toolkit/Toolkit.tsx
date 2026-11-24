import { site } from '@/content/site';
import {
  DesktopCopy,
  DesktopList,
  Group,
  Groups,
  Heading,
  Item,
  Kicker,
  List,
  MobileCopy,
  MobileList,
  Section,
  Title,
} from './Toolkit.styles';

const { toolkit } = site;

export const Toolkit = () => (
  <Section>
    <Kicker>{toolkit.kicker}</Kicker>
    <Title>{toolkit.title}</Title>
    <Groups>
      {toolkit.groups.map((group) => (
        <Group key={group.heading}>
          <Heading>{group.heading}</Heading>
          {group.heading === 'QUALITY & DELIVERY' ? (
            <List>
              {group.items.shared.map((item) => (
                <Item key={item}>{item}</Item>
              ))}
              <Item>
                <DesktopCopy>{group.items.last.desktop}</DesktopCopy>
                <MobileCopy>{group.items.last.mobile}</MobileCopy>
              </Item>
            </List>
          ) : group.heading === 'AI DEVELOPMENT' ? (
            <>
              <DesktopList>
                {group.items.desktop.map((item) => (
                  <Item key={item}>{item}</Item>
                ))}
              </DesktopList>
              <MobileList>
                {group.items.mobile.map((item) => (
                  <Item key={item}>{item}</Item>
                ))}
              </MobileList>
            </>
          ) : (
            <List>
              {group.items.map((item) => (
                <Item key={item}>{item}</Item>
              ))}
            </List>
          )}
        </Group>
      ))}
    </Groups>
  </Section>
);

export default Toolkit;
