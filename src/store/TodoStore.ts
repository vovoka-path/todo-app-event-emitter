import { todoApi } from '../api';
import { EVENT } from '../constants/events';
import { EventEmitter } from '../utils/EventEmitter';
import { ITodo } from './interfaces';

class TodoStore extends EventEmitter<ITodo> {
  private todos: ITodo[];
  constructor() {
    super();
    this.todos = this.fetch();
  }
  private fetch(): ITodo[] {
    return todoApi.getTodos();
  }
  get todoList() {
    return this.todos;
  }
  add(todo: ITodo) {
    this.todos.push(todo);
    this.emit(EVENT.ADD_TODO, todo);
    todoApi.addTodo(todo);
  }
  remove(removedTodo: ITodo) {
    this.todos = this.todos.filter((todo) => todo.id !== removedTodo.id);
    todoApi.removeTodo(removedTodo.id);
  }
  update(updatedTodo: ITodo) {
    const { id, ...data } = updatedTodo;

    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...data };
      }
      return todo;
    });

    todoApi.setTodos(this.todos);
  }
}

export default new TodoStore();
