import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

// Blueprint of the props for this component.
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todo">
      {/* Iterate all the todo from the todos array and pass the  required value to todo item. */}
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
