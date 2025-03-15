import { ITodo } from '../../store';
import todoStore from '../../store/TodoStore';

class CheckBox {
  element: HTMLInputElement;
  todo: ITodo;
  constructor(todo: ITodo) {
    this.todo = todo;
    this.element = this.render();
  }
  render() {
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', this.todo.id);
    input.checked = this.todo.isCompleted;

    input.addEventListener('change', this.toggle.bind(this));
    return input;
  }

  toggle() {
    this.todo.isCompleted = !this.todo.isCompleted;
    this.element.checked = this.todo.isCompleted;

    todoStore.update(this.todo);
  }
  destroy() {
    this.element.remove();
  }
}

export default CheckBox;
