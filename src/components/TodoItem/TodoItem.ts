import { todoStore } from '../../store';
import { ITodo } from '../../store';
import Button from '../../ui/Button';
import CheckBox from '../../ui/CheckBox';
import Title from '../../ui/Title';

class Todo {
  element: HTMLLIElement;
  todo: ITodo;
  checkbox: HTMLInputElement;
  title: HTMLElement;
  deleteButton: HTMLButtonElement;
  private handleDeleteBound: (event: MouseEvent) => void;
  constructor(todo: ITodo) {
    this.todo = todo;
    this.checkbox = new CheckBox(this.todo).element;
    this.title = new Title('span', this.todo.title).element;
    this.deleteButton = new Button('Delete').element;
    // save listener for remove listener later
    this.handleDeleteBound = this.handleDelete.bind(this);
    this.element = this.render();
  }
  render() {
    const element = document.createElement('li');
    element.setAttribute('id', this.todo.id.toString());

    element.appendChild(this.checkbox);
    element.appendChild(this.title);

    this.deleteButton.addEventListener('click', this.handleDeleteBound);
    element.appendChild(this.deleteButton);

    return element;
  }
  handleDelete() {
    todoStore.remove(this.todo);
    this.destroy();
  }
  destroy() {
    // remove listener to avoid memory leaks
    this.deleteButton.removeEventListener('click', this.handleDeleteBound);
    this.element.remove();
  }
}

export default Todo;
