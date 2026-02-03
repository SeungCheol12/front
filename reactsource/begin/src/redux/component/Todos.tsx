import type { TodoItemProps, TodoProps } from '../types/type';

const TodoItem = ({ todo, toggle, remove }: TodoItemProps) => {
  return (
    <div>
      <input
        type="checkbox"
        name=""
        id=""
        onClick={() => toggle(todo.id)}
        checked={todo.done}
      />
      <span className={todo.done ? 'line-through' : ''}>{todo.text}</span>
      <button className="bg-red-500 p-4" onClick={() => remove(todo.id)}>
        삭제
      </button>
    </div>
  );
};
function Todos({
  todos,
  toggle,
  remove,
  insert,
  changeInput,
  input,
}: TodoProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    insert(input);
    changeInput('');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    changeInput(e.target.value);
  return (
    <>
      <form action="" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          className="border p-3"
          onChange={handleChange}
          value={input}
        />
        <button type="submit" className="bg-orange-500 p-4">
          등록
        </button>
      </form>
      {todos.map((todo, idx) => (
        <TodoItem key={idx} todo={todo} toggle={toggle} remove={remove} />
      ))}
    </>
  );
}

export default Todos;
