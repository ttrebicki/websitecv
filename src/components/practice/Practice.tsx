import { site } from '@/content/site';
import {
  Asides,
  Body,
  DesktopCopy,
  Intro,
  Kicker,
  MobileCopy,
  Section,
  Step,
  StepBody,
  StepNumber,
  Steps,
  StepTitle,
  Title,
} from './Practice.styles';

const { practice } = site;

export const Practice = () => (
  <Section>
    <Kicker>{practice.kicker}</Kicker>
    <Intro>
      <Title>
        {practice.title}
        <br />
        {practice.titleEnd}
      </Title>
      <Asides>
        {practice.asides.desktop.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </Asides>
    </Intro>
    <Body>{practice.body}</Body>
    <Steps>
      {practice.steps.map((step) => (
        <Step key={step.number}>
          <StepNumber>{step.number}</StepNumber>
          <StepTitle>{step.title}</StepTitle>
          <StepBody>
            {typeof step.body === 'string' ? (
              step.body
            ) : (
              <>
                <DesktopCopy>{step.body.desktop}</DesktopCopy>
                <MobileCopy>{step.body.mobile}</MobileCopy>
              </>
            )}
          </StepBody>
        </Step>
      ))}
    </Steps>
  </Section>
);

export default Practice;
