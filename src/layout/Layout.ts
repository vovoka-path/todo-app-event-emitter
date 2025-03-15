import './Layout.css';
import Header from './Header';
import Footer from './Footer';

type ChildrenType = ChildNode | HTMLDivElement | DocumentFragment;

const Layout = (children: ChildrenType[]): HTMLDivElement => {
  const layout = document.createElement('div');
  layout.classList.add('layout');

  const main = document.createElement('main');
  main.classList.add('main');

  
  children.forEach((child: ChildrenType) => {
    main.appendChild(child);
  });

  layout.appendChild(Header.element);
  layout.appendChild(main);
  layout.appendChild(Footer.element);
  
  return layout;
};

export default Layout;
