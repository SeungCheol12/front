import { useEffect, useReducer, useState } from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';
import { taskReducer } from './TaskReducer';
export type TaskProps = {
  id: number;
  text: string;
  done: boolean;
};

const initialTask = [
  { id: 0, text: 'Visit kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];
let nextId = 3;
function TaskApp() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTask);
  // 여행 계획 추가
  const handleAddTask = (text: string) => {
    // tasks 추가
    dispatch({ type: 'ADD', id: nextId++, text, done: false });
  };
  // 여행 계획 수정
  const handleChangeTask = (task: TaskProps) => {
    // 수정할 task 찾기
    dispatch({ type: 'CHANGE', task });
  };
  // 여행 계획 삭제
  const handleDeleteTask = (taskId: number) => {
    // tasks 에서 id 에 해당하는 task 제거
    // tasks 에서 id 와 일치하지 않는 task 추출해서 새로운 배열 생성 : map(), filter()
    // 기존 배열이 필요가 없다
    dispatch({ type: 'DELETE', id: taskId });
  };

  // useState 확인용
  useEffect(() => {
    console.log('업데이트 된 tasks', tasks);
  }, [tasks]);

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-2xl space-y-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-center text-2xl font-semibold">여행지 계획</h2>
          {/* 데이터 입력 */}
          <AddTask onAddTask={handleAddTask} />
          {/* 리스트 */}
          <ListTask
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
            onChangeTask={handleChangeTask}
          />
        </div>
      </div>
    </>
  );
}

export default TaskApp;
