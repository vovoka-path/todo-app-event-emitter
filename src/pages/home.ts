import Layout from '../layout/Layout';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

class HomePage {
  rootElement: HTMLElement;
  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
  }
  render() {
    const fragment = document.createDocumentFragment();

    AddTodo && fragment.appendChild(AddTodo.element);
    TodoList && fragment.appendChild(TodoList.element);

    this.rootElement.appendChild(Layout([fragment]));
  }
}

export default HomePage;
