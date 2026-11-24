import { site } from '@/content/site';
import {
  ActiveTab,
  Article,
  Body,
  Copy,
  DateStamp,
  DesktopCapabilities,
  DesktopCaption,
  DesktopFigure,
  DesktopKicker,
  Caps,
  Diagrams,
  Grid,
  Language,
  MobileCapabilities,
  MobileCaption,
  MobileFigure,
  MobileKicker,
  MobilePanel,
  MobileRole,
  Pair,
  PairList,
  Panel,
  ProjectLink,
  RoleBlock,
  RoleLabel,
  RoleValue,
  Tab,
  TabRow,
  Title,
  Top,
  TranslationHead,
  TranslationTitle,
  WorkspaceTitle,
  Status,
} from './MimeeqCard.styles';

const mimeeq = site.work.mimeeq;
const desktopDiagram = mimeeq.diagram.desktop;
const mobileDiagram = mimeeq.diagram.mobile;
const [activeTab, ...idleTabs] = desktopDiagram.tabs;
const EXTERNAL_REL = 'noreferrer';

export const MimeeqCard = () => (
  <Article>
    <Copy>
      <Top>
        <DesktopKicker>{mimeeq.kicker.desktop}</DesktopKicker>
        <MobileKicker>{mimeeq.kicker.mobile}</MobileKicker>
        <DateStamp>{mimeeq.date.desktop}</DateStamp>
      </Top>
      <Title>{mimeeq.title}</Title>
      <Body>{mimeeq.body}</Body>
      <Caps>
        <DesktopCapabilities>
          {mimeeq.capabilities.desktop.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </DesktopCapabilities>
        <MobileCapabilities>
          {mimeeq.capabilities.mobile.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </MobileCapabilities>
      </Caps>
      <RoleBlock>
        <RoleLabel>{mimeeq.role.desktop.label}</RoleLabel>
        <RoleValue>{mimeeq.role.desktop.value}</RoleValue>
        <MobileRole>{mimeeq.role.mobile}</MobileRole>
      </RoleBlock>
      <ProjectLink href={mimeeq.link.href} rel={EXTERNAL_REL} target="_blank">
        {mimeeq.link.label}
      </ProjectLink>
    </Copy>
    <Diagrams>
      <DesktopFigure>
        <Panel>
          <WorkspaceTitle>{desktopDiagram.title}</WorkspaceTitle>
          <TabRow>
            <ActiveTab>{activeTab}</ActiveTab>
            {idleTabs.map((tab) => (
              <Tab key={tab}>{tab}</Tab>
            ))}
            <Language>{desktopDiagram.language}</Language>
          </TabRow>
          <Grid>
            <thead>
              <tr>
                {desktopDiagram.columns.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {desktopDiagram.rows.map((row) => (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </Grid>
          <Status>{desktopDiagram.status}</Status>
        </Panel>
        <DesktopCaption>{mimeeq.diagramCaption.desktop}</DesktopCaption>
      </DesktopFigure>
      <MobileFigure>
        <MobilePanel>
          <TranslationHead>
            <TranslationTitle>{mobileDiagram.title}</TranslationTitle>
            <Language>{mobileDiagram.language}</Language>
          </TranslationHead>
          <PairList>
            {mobileDiagram.rows.map((row) => (
              <Pair key={row[0]}>
                <span>{row[0]}</span>
                <span>{row[1]}</span>
              </Pair>
            ))}
          </PairList>
          <Status>{mobileDiagram.status}</Status>
        </MobilePanel>
        <MobileCaption>{mimeeq.diagramCaption.mobile}</MobileCaption>
      </MobileFigure>
    </Diagrams>
  </Article>
);
