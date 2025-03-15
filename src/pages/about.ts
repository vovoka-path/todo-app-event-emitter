import Layout from '../layout/Layout';

class AboutPage {
  rootElement: HTMLElement;
  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
  }
  render() {
    const fragment = document.createDocumentFragment();

    const title = this.createTitle();
    fragment.appendChild(title);

    this.rootElement.appendChild(Layout([fragment]));
  }
  createTitle() {
    const title = document.createElement('h1');
    title.textContent = 'About page';

    return title;
  }
}

export default AboutPage;
