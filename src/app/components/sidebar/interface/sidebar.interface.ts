export interface Sidebar {
  href?: string;
  iconCss?: string;
  text: string;
  textAuxiliary?: string;
  textAuxiliaryCollor?: string;
  target: '_blank' | '_self' | '_parent' | '_top';
  selected: boolean;
}

export interface SidebarSecondary {
  title: string;
  items: Sidebar[];
  textAuxiliary?: string;
  textAuxiliaryCollor?: string;
}
