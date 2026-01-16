import { useState } from "react";
import "./App.css";
import Board from "./Board";
import type { Squares } from "./types/type";

function App() {
  // X or O 번갈아 처리하기 위한 변수
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  // history 관리
  const [history, setHistory] = useState<Squares[]>([Array(9).fill(null)]);

  // 이동 변수 관리
  const [currentMove, setCurrentMove] = useState<number>(0);

  // 이전 history 변수
  const currentSquares = history[currentMove];
  // const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquare: Squares) => {
    const nexHistory: Squares[] = [...history.slice(0, currentMove + 1), nextSquare];
    setHistory(nexHistory);
    setCurrentMove(nexHistory.length - 1);
    setXIsNext(!xIsNext);
  };

  // 지난 플레이 확인
  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 == 0);
  };

  // 오른쪽에 기록 보여주기
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to Game start";
    }
    return (
      <li key={move} className="mt-0.5">
        <button onClick={() => jumpTo(move)} className=" rounded-xs bg-gray-300 p-1 text-black">
          {description}
        </button>
      </li>
    );
  });
  return (
    <>
      <div className="grid auto-cols-max grid-flow-col gap-4">
        <div>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <ul>
          <ol>{moves}</ol>
        </ul>
      </div>
    </>
  );
}

export default App;
