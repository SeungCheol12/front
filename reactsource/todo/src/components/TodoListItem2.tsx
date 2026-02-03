import { useState } from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';

const TodoListItem2 = ({ todo, onDeleteTodo, onChangeTodo }) => {
  const { completed, id, title } = todo;
  const [isCompleted, setIsCompleted] = useState(completed);

  const checkClikced = () => {
    // completed 값 반전
    setIsCompleted(!isCompleted);
    onChangeTodo({
      ...todo,
      completed: !completed,
    });
  };
  return (
    <div className="flex items-center p-4 even:bg-gray-200">
      <div className="flex grow items-center">
        {completed ? (
          <MdCheckBox onClick={checkClikced} />
        ) : (
          <MdCheckBoxOutlineBlank onClick={checkClikced} />
        )}
        <div
          className={`ml-2 flex-1 ${isCompleted ? 'text-gray-400 line-through' : ''}`}
        >
          {title}
        </div>
      </div>
      <div className="flex cursor-pointer items-center text-2xl text-red-300 hover:text-red-600">
        <MdRemoveCircleOutline onClick={() => onDeleteTodo(id)} />
      </div>
    </div>
  );
};

export default TodoListItem2;
