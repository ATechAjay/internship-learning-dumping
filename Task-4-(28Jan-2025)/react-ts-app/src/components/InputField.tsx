
// Blueprint for the props in this component.
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todoHandler: (e: React.FormEvent<EventTarget>) => void;
}

// The type of this component is React.FC
const InputField: React.FC<Props> = ({ todo, setTodo, todoHandler }) => {
  return (
    <form className="form__container" onSubmit={e=>todoHandler(e)}>
      <input
        type="text"
        placeholder="Enter Task..."
        className="input__element"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button type="submit" className="submit_btn">
        Go
      </button>
    </form>
  );
};

export default InputField;
