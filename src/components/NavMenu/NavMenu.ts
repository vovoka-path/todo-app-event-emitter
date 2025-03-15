import './NavMenu.css';
import { RoutesData } from '../../router/interfaces';
import { ROUTES_DATA } from '../../constants/routes';

class NavMenu {
  element: HTMLDivElement;
  constructor() {
    this.element = this.render();
  }
  render() {
    const element = document.createElement('div');
    element.classList.add('nav-menu');

    ROUTES_DATA.forEach((route) => {
      if (route.title === '404') return;
      
      const linkElement = this.createLink(route);
      element.appendChild(linkElement);
    });

    return element;
  }

  createLink(route: RoutesData): HTMLAnchorElement {
    const a = document.createElement('a');
    a.textContent = route.title;
    a.href = route.path;

    return a;
  }
}

export default new NavMenu();
