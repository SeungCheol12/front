import CounterContainer from '../container/CounterContainer';
import TodosContainer from '../container/TodosContainer';

function MyTodo() {
  return (
    <>
      <div className="flex flex-col items-center">
        <CounterContainer />
        <hr />
        <TodosContainer />
      </div>
    </>
  );
}

export default MyTodo;
