import { todoStore, ITodo } from '../../store';

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

    return input;
  }
  destroy() {
    this.element.remove();
  }
}

export default CheckBox;
