import type { ITodo } from '../store/interfaces';
import { IDatabase } from '../databases/interfaces';
import localDatabase from '../databases';
import LOCAL_STORAGE_KEYS from '../constants/localStorageKeys';

// Here we can make requests to the API
// Now we are just using local storage as a database
class TodoApi {
  database: IDatabase;
  constructor(database: IDatabase) {
    this.database = database;
  }
  getTodos(): ITodo[] {
    const todoList = this.database.get(LOCAL_STORAGE_KEYS.TODO_LIST);
    return todoList ? JSON.parse(todoList) : [];
  }
  setTodos(todos: ITodo[]): void {
    this.database.set(
      LOCAL_STORAGE_KEYS.TODO_LIST,
      JSON.stringify(todos)
    );
  }
  addTodo(todo: ITodo): void {
    const todos = this.getTodos();
    const updatedTodos = [...todos, todo];

    this.setTodos(updatedTodos);
  }
  removeTodo(id: string): void {
    const todos = this.getTodos();
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    this.setTodos(updatedTodos);
  }
}

export default new TodoApi(localDatabase);
