import { todoStore, ITodo } from '../../store';
import TodoItem from '../TodoItem';
import { EVENT } from '../../constants/events';

class TodoList {
  element: HTMLUListElement;
  constructor() {
    this.element = this.render();
  }
  render() {
    const todoList = document.createElement('ul');
    const todos = todoStore.todoList;

    todos.forEach((todo: ITodo) => {
      const todoElement = new TodoItem(todo).element;
      todoList.appendChild(todoElement);
    });

    this.setEventListeners();

    return todoList;
  }
  private setEventListeners(): void {
    todoStore.on(EVENT.ADD_TODO, (todo: ITodo) => {
      this.addTodo(todo);
    });
  }
  private addTodo(todo: ITodo): void {
    const todoElement = new TodoItem(todo).element;
    this.element.appendChild(todoElement);
  }
}

export default new TodoList();
