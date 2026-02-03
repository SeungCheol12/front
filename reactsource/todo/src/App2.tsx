import { useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TodoTeamplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { initialTodos, type Todo, type TodoCreate } from './types/todo';
import TodoInsert2 from './components/TodoInsert2';
import TodoList2 from './components/TodoList2';
import TodoTeamplate2 from './components/TodoTemplate2';

function App() {
  const [todos, setTodos] = useState<TodoCreate[]>(initialTodos);
  const nextId = useRef(4); // 초기값 4
  // 일정추가
  const handleAddTodo = (title: string) => {
    // 기존 todos에 추가
    setTodos([
      ...todos,
      {
        id: nextId.current++,
        title: title,
        completed: false,
        important: false,
      },
    ]);
  };

  // 일정완료
  const handleChangeTodo = (todo: TodoCreate) => {
    // completed 값 반전
    // 전체 todos 에서 인자로 넘어온 todo.id 와 일치하는 todo 의 completed 값 변경
    setTodos(todos.map((t) => (t.id === todo.id ? { ...t, ...todo } : t)));
  };

  // 일정삭제
  const handleDeleteTodo = (id: number) => {
    // 전체 todos 에서 id 와 일치하지 않는 todos 추출 후 setTodos()
    // filter 가 새 배열을 받아 기존 배열을 삭제한다
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoTeamplate2>
        <div className="flex p-3">
          <span className="flex-1 text-left text-orange-700">
            중요일정은 체크 클릭
          </span>
          <div className="shrink-0">
            <span>완료</span>
            <select
              name="completed"
              className="mx-2 rounded border border-gray-400"
            >
              {[
                { label: '전체', value: '' },
                { label: '미완료', value: 'false' },
                { label: '완료', value: 'true' },
              ].map((option, idx) => (
                <option key={idx} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <TodoInsert2 onAddTodo={handleAddTodo} />
        <TodoList2
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onChangeTodo={handleChangeTodo}
        />
      </TodoTeamplate2>
    </>
  );
}

export default App;
