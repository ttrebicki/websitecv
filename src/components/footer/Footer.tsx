import { site } from '@/content/site';
import {
  Copyright,
  DesktopEndLink,
  DownloadLink,
  FooterRoot,
  MobileEndLink,
} from './Footer.styles';

const { footer } = site;

const TOP_HREF = '#top';

const Footer = () => (
  <FooterRoot>
    <Copyright>{footer.copyright}</Copyright>
    <DownloadLink href={footer.download.href}>{footer.download.label}</DownloadLink>
    <DesktopEndLink href={TOP_HREF}>{footer.end.desktop}</DesktopEndLink>
    <MobileEndLink href={TOP_HREF}>{footer.end.mobile}</MobileEndLink>
  </FooterRoot>
);

export default Footer;
