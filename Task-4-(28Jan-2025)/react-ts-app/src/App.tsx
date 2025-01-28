import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  // State for one todo
  const [todo, setTodo] = useState<string>("");

  // State for list of todos.
  const [todos, setTodos] = useState<Todo[]>([]);

  // Input handler function on click.
  const todoHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    // If there is input value, then add new todo with the existing todos.
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      
      // Remove the filled input value from the input field.
      setTodo("");
    }
  };

  return (
    <div className="app">
      <h1>TodoX</h1>
      {/* Input field and button */}
      <InputField todo={todo} setTodo={setTodo} todoHandler={todoHandler} />

      {/* Todo item */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
