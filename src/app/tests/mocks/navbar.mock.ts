import { Sidebar, SidebarSecondary } from '../../components/sidebar/interface/sidebar.interface';

export const mockNavbar: Sidebar[] = [
  {
    text: 'Instalação',
    href: 'test2Href',
    iconCss: 'test2CssIcon',
    target: '_blank',
    selected: false,
  },
  {
    text: 'test1Text',
    href: 'test1Href',
    iconCss: 'test1CssIcon',
    target: '_blank',
    selected: false,
  },
  {
    text: 'test2Text',
    href: 'test2Href',
    iconCss: 'test2CssIcon',
    target: '_blank',
    selected: false,
  },
];

export const mockNavBarSecondary: SidebarSecondary[] = [
  {
    title: 'testSecondary1',
    items: mockNavbar,
  },
  {
    title: 'testSecondary2',
    items: mockNavbar,
  },
];
