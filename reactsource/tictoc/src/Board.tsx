import { useState } from "react";
import Square from "./Square";
import type { BoardProps, Squares } from "./types/type";
import calcWinner from "./utils/Utils";

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  // const initialSquares: Squares = Array(9).fill(null);
  // const [squares, setSquares] = useState<Squares>(initialSquares);

  // 승자관리
  const winner = calcWinner(squares);
  let status: string;
  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next player : " + (xIsNext ? "X" : "O");
  }
  const handleClick = (idx: number) => {
    // 이미 선택된 자리라면 클릭해도 바뀌지 않아야 함
    // null 이면 false 이므로 이런 구조이면 빈칸만 바꾼다
    if (squares[idx]) return;

    // const copySquares = [...squares];
    // 일차원 배열 복사
    const copySquares = squares.slice();
    if (xIsNext) {
      copySquares[idx] = "X";
    } else {
      copySquares[idx] = "O";
    }
    onPlay(copySquares);
    // setSquares(copySquares);
    // setXIsNext(!xIsNext);
  };
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} handleClick={() => handleClick(0)}></Square>
        <Square value={squares[1]} handleClick={() => handleClick(1)}></Square>
        <Square value={squares[2]} handleClick={() => handleClick(2)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleClick={() => handleClick(3)}></Square>
        <Square value={squares[4]} handleClick={() => handleClick(4)}></Square>
        <Square value={squares[5]} handleClick={() => handleClick(5)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleClick={() => handleClick(6)}></Square>
        <Square value={squares[7]} handleClick={() => handleClick(7)}></Square>
        <Square value={squares[8]} handleClick={() => handleClick(8)}></Square>
      </div>
    </>
  );
}

export default Board;
