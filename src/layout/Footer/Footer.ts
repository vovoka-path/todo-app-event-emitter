import './Footer.css';

class Footer {
  element: HTMLElement;
  constructor() {
    this.element = this.render();
  }
  render() {
    const header = document.createElement('footer');
    header.classList.add('footer');

    const title = document.createElement('h4');
    title.textContent = '@2025';
    header.appendChild(title);

    return header;
  }
}

export default new Footer();