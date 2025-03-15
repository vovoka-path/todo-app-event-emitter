import Layout from '../layout/Layout';

class NotFoundPage {
  rootElement: HTMLElement;
  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
  }
  render() {
    const fragment = document.createDocumentFragment();

    const title = this.createTitle();
    fragment.appendChild(title);

    const a = this.createLink();
    fragment.appendChild(a);

    this.rootElement.appendChild(Layout([fragment]));
  }
  createTitle() {
    const title = document.createElement('h1');
    title.textContent = 'Erorr 404';

    const subTitle = document.createElement('h2');
    subTitle.textContent = 'Sorry, but page not found. ';

    return title;
  }

  createLink(): HTMLAnchorElement {
    const a = document.createElement('a');
    a.textContent = 'Click here to go to Home page';
    a.href = '/';

    return a;
  }
}

export default NotFoundPage;
