import TodoListItem from './TodoListItem';

const TodoList2 = ({ todos, onDeleteTodo, onChangeTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onChangeTodo={onChangeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList2;
