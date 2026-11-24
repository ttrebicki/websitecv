import { site } from '@/content/site';
import {
  Body,
  Email,
  Heading,
  HeadingRest,
  Kicker,
  Row,
  Section,
  Social,
  SocialLink,
} from './Contact.styles';

const contact = site.contact;

const socialLinks = [contact.github, contact.linkedin] as const;

// Both frames break the heading after the second word. The second line is a
// block so the DOM text stays the full sentence with a space.
const titleWords = contact.title.split(' ');
const titleLead = titleWords.slice(0, 2).join(' ');
const titleRest = titleWords.slice(2).join(' ');

export const Contact = () => (
  <Section id={contact.id}>
    <Kicker>{contact.kicker}</Kicker>
    <Heading>
      {titleLead} <HeadingRest>{titleRest}</HeadingRest>
    </Heading>
    <Body>{contact.body}</Body>
    <Row>
      <Email href={contact.email.href}>{contact.email.label}</Email>
      <Social>
        {socialLinks.map((link) => (
          <SocialLink key={link.href} href={link.href}>
            {link.label}
          </SocialLink>
        ))}
      </Social>
    </Row>
  </Section>
);

export default Contact;
