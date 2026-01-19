import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from 'react-icons/md';

import { useState } from 'react';

function TaskItem({ task, onDeleteTask, onChangeTask }) {
  const [isDone, setIsDone] = useState(task.done);
  const [isEdit, setIsEdit] = useState(false);
  // tasks.done true => MdOutlineCheckBox
  const CheckboxIcon = isDone
    ? MdOutlineCheckBox
    : MdOutlineCheckBoxOutlineBlank;

  const taskDoneChange = () => {
    setIsDone(!isDone);
    onChangeTask({
      // 기존 done 변경
      ...task,
      done: !isDone,
    });
  };
  return (
    <>
      <div className="flex items-center justify-between px-3 py-2">
        <div className="mr-2 flex w-full items-center gap-3">
          <CheckboxIcon onClick={taskDoneChange} />
          {isEdit ? (
            <input
              type="text"
              name=""
              id=""
              className="w-full border p-3"
              placeholder="할 일을 입력하세요"
            />
          ) : (
            <span className="flex items-center gap-2">{task.text}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="py-w rounded border px-4 text-xl text-green-600"
          >
            Edit
          </button>
          <button
            type="button"
            className="py-w rounded border px-4 text-xl text-red-600"
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

function ListTask({ tasks, onDeleteTask, onChangeTask }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          task={task}
          onDeleteTask={onDeleteTask}
          onChangeTask={onChangeTask}
        />
      ))}
    </>
  );
}

export default ListTask;
