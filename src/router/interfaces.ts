export type Routes = Record<string, () => Promise<ReturnImport>>;

export interface RoutesData {
  title: string;
  path: string;
  component: () => Promise<ReturnImport>;
}

export type ReturnImport = {
  default: PageComponent;
};

export interface PageComponent {
  new (rootElement: HTMLElement): Page;
}

interface Page {
  render: () => void;
}
