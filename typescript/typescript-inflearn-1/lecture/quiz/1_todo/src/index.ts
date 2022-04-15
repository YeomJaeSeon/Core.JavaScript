interface Todo {
  id: number;
  title: string;
  done: boolean;
}
//type으로 타입정의할수도있고 인터페이스를 이용할수도있다.
//중복되는 타입정의를 인터페이스로깔끔하게~

let todoItems: Todo[];

// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): Todo[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): Todo {
  return todoItems[0];
}

function showCompleted(): Todo[] {
  return todoItems.filter(item => item.done);
}

function addTwoTodoItems(todos: [Todo, Todo]): void {
  const [todo1, todo2] = todos;
  addTodo(todo1);
  addTodo(todo2);
}

function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems([todoItems[0], todoItems[1]]);
log();
