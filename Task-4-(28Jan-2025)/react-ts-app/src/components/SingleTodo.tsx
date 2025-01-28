import { Todo } from "../model";
import { MdDelete, MdEdit, MdOutlineDownloadDone } from "react-icons/md";
import { useState } from "react";

// Create the type of props.
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  // Keep  track the edit feature, if user clicks on it then it will be true or vice-versa..
  const [edit, setEdit] = useState<boolean>(false);

  // According to the above state, edit the todo item.
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  // Implement the the todo, if done!
  const doneHanlder = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  // Implement the delete feature!
  const deleteHandler = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const submitHandler = (e: React.FormEvent<EventTarget>, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );

    setEdit(false);
  };

  return (
    <form className="single__todo" onSubmit={(e) => submitHandler(e, todo.id)}>
      {/* If the edit is true, then add an input element! */}
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="edit__text"
        />
      ) : // If the isDone is true, then strike throug the text.
      todo.isDone ? (
        <span className="strike">{todo.todo}</span>
      ) : (
        // Else keep display normal text.
        <span className="text">{todo.todo}</span>
      )}

      <div className="icons">
        <span
          title="Edit todo"
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <MdEdit />
        </span>

        <span
          title="Delete todo"
          className="icon"
          onClick={() => deleteHandler(todo.id)}
        >
          <MdDelete />
        </span>

        <span
          title="Marked as done"
          className="icon"
          onClick={() => doneHanlder(todo.id)}
        >
          <MdOutlineDownloadDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
