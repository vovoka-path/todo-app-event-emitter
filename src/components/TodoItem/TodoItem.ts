import { todoStore, ITodo } from '../../store';
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
  handleToggleBound: () => void;
  constructor(todo: ITodo) {
    this.todo = todo;
    this.checkbox = new CheckBox(this.todo).element;
    this.title = new Title('span', this.todo.title).element;
    this.deleteButton = new Button('Delete').element;
    // save listeners for remove listeners later
    this.handleDeleteBound = this.handleDelete.bind(this);
    this.handleToggleBound = this.toggle.bind(this);
    this.element = this.render();
  }
  render() {
    const element = document.createElement('li');
    element.setAttribute('id', this.todo.id.toString());

    this.checkbox.addEventListener('change', this.toggle.bind(this));
    element.appendChild(this.checkbox);

    element.appendChild(this.title);

    this.deleteButton.addEventListener('click', this.handleDeleteBound);
    element.appendChild(this.deleteButton);

    return element;
  }
  toggle() {
    this.todo.isCompleted = !this.todo.isCompleted;
    this.checkbox.checked = this.todo.isCompleted;

    todoStore.update(this.todo);
  }
  handleDelete() {
    todoStore.remove(this.todo);
    this.destroy();
  }
  destroy() {
    // remove listeners to avoid memory leaks
    this.checkbox.removeEventListener('change', this.handleToggleBound);
    this.deleteButton.removeEventListener('click', this.handleDeleteBound);
    this.element.remove();
  }
}

export default Todo;
