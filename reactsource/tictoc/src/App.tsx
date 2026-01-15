import { useState } from "react";
import "./App.css";
import Board from "./Board";
import type { Squares } from "./types/type";

function App() {
  // X or O 번갈아 처리하기 위한 변수
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  // history 관리
  const [history, setHistory] = useState<Squares[]>([Array(9).fill(null)]);

  // 이전 history 변수
  const currentSquares = history[history.length - 1];
  const handlePlay = (nextSquare: Squares) => {
    setHistory([...history, nextSquare]);
    setXIsNext(!xIsNext);
  };
  return (
    <>
      <div className="grid auto-cols-max grid-flow-col gap-4">
        <div>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <ul>
          <li>게임기록</li>
        </ul>
      </div>
    </>
  );
}

export default App;
