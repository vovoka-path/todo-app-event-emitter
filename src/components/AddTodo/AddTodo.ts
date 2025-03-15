import './AddTodo.css';
import { ITodo } from '../../store';
import { todoStore } from '../../store';
import Button from '../../ui/Button';
import TextInput from '../../ui/TextInput';

class AddTodo {
  input: HTMLInputElement;
  addButton: HTMLButtonElement;
  element: HTMLDivElement;
  constructor() {
    this.input = new TextInput().element;
    this.addButton = new Button('Add').element;
    this.element = this.render();
  }
  render() {
    const element = document.createElement('div');
    element.classList.add('add-todo');

    element.appendChild(this.input);

    this.addButton.addEventListener('click', this.handleAdd.bind(this));
    element.appendChild(this.addButton);
    
    return element;
  }
  handleAdd() {
    const todo: ITodo = {
      id: Date.now().toString(),
      title: this.input.value,
      isCompleted: false,
    };

    todoStore.add(todo);

    this.input.value = '';
  }
}

export default new AddTodo();
