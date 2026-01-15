import type { SquareProps } from "./types/type";

function Square({ value, handleClick }: SquareProps) {
  // const [input, setInput] = useState("");
  // alret() 띄우기 : 숫자

  return (
    <>
      <div>
        <button className="square" onClick={() => handleClick()}>
          {value}
        </button>
      </div>
    </>
  );
}

export default Square;
