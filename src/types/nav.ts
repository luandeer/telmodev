export interface NavItem {
    title: string,
    href: string,
    icon?: React.ComponentType<any>,
    disabled?: boolean,
    external?: boolean,
  }