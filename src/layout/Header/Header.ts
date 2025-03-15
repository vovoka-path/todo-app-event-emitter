import './Header.css';
import NavMenu from '../../components/NavMenu';

class Header {
  element: HTMLElement;
  constructor() {
    this.element = this.render();
  }
  render() {
    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('h3');
    title.textContent = 'Todo App';
    header.appendChild(title);
    header.appendChild(NavMenu.element);

    return header;
  }
}

export default new Header();