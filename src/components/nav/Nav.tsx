import { site } from '@/content/site';
import {
  BrandCluster,
  DesktopBrand,
  LinkList,
  MobileCta,
  Name,
  NavCta,
  NavLink,
  NavRoot,
} from './Nav.styles';

const { nav } = site;

const TOP_ID = 'top';

const Nav = () => (
  <NavRoot id={TOP_ID}>
    <BrandCluster>
      <Name>{nav.mobile.name}</Name>
      <DesktopBrand>{nav.desktop.brand}</DesktopBrand>
    </BrandCluster>
    <LinkList>
      {nav.desktop.links.map((link) =>
        link.href === nav.mobile.cv.href ? (
          <NavCta key={link.href} href={link.href}>
            {link.label}
          </NavCta>
        ) : (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ),
      )}
    </LinkList>
    <MobileCta href={nav.mobile.cv.href}>{nav.mobile.cv.label}</MobileCta>
  </NavRoot>
);

export default Nav;
