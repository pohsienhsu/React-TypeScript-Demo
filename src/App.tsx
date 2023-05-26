import React, { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./components/models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const todo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(todo);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
