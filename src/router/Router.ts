import {
  ReturnImport,
  RoutesData,
  Routes,
  PageComponent,
} from './interfaces';

export class Router {
  private routes: Routes;
  private rootElement: HTMLElement;
  constructor(rootElement: HTMLElement, routesData: RoutesData[] = []) {
    this.rootElement = rootElement;
    this.routes = {};
    this.init(routesData);
  }
  private init(routesData: RoutesData[]): void {
    routesData.forEach((route) => this.addRoute(route.path, route.component));

    window.addEventListener('popstate', this.handleRouteChange.bind(this));

    document.addEventListener('click', (event) => {
      if (!(event.target instanceof HTMLAnchorElement)) return;

      const isInnerRoute =
        this.getAnchorDomain(event.target) === this.getMyDomain();

      if (isInnerRoute) {
        event.preventDefault();
        this.navigate(event.target.pathname);
      }
    });

    this.handleRouteChange();
  }
  public addRoute(path: string, component: () => Promise<ReturnImport>): void {
    this.routes[path] = component;
  }
  public navigate(path: string): void {
    history.pushState(null, '', path);
    this.handleRouteChange();
  }
  private async handleRouteChange(): Promise<void> {
    const path = window.location.pathname;

    const route = this.routes[path] || this.routes['/404'];

    try {
      const pageModule = await route();
      const Page: PageComponent = pageModule.default;

      this.clearPreviuosPage();
      this.renderNextPage(Page);
    } catch (error) {
      console.error('Failed to load component', error);
    }
  }
  private clearPreviuosPage(): void {
    this.rootElement.innerHTML = '';
  }
  private renderNextPage(Page: PageComponent): void {
    new Page(this.rootElement).render();
  }
  private getMyDomain(): string {
    return window.location.hostname;
  }
  private getAnchorDomain(target: HTMLAnchorElement): string {
    const url = new URL(target.href);
    const domain = url.hostname;
    return domain;
  }
}
