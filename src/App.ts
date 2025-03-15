import './style.css';
import { Router } from './router';
import { ROUTES_DATA } from './constants/routes';

export const App = () => {
  const rootElement = document.querySelector<HTMLDivElement>('#app');

  if (rootElement) {
    new Router(rootElement, ROUTES_DATA);
  }
};
