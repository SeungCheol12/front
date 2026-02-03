import type { TodoListProps } from '../types/todo';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onDeleteTodo, onChangeTodo }: TodoListProps) => {
  return (
    <div>
      {todos.dtoList.map((todo) => (
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

export default TodoList;
