import { useState } from 'react';

const Say = () => {
  // useState() : 첫번째 인자 => default값, 두번째 인자 => 함수
  const [message, setMessage] = useState<string>('');

  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히가세요');

  const [color, setColor] = useState('black');
  const onClickRed = () => setColor('red');
  const onClickGreen = () => setColor('green');
  const onClickBlue = () => setColor('blue');
  return (
    <>
      <div className="m-3">
        <div className="mt-8">
          <button
            className="text-1xl m-2 w-32 rounded bg-blue-500 p-4 text-white"
            onClick={onClickEnter}
          >
            입장
          </button>
          <button
            className="text-1xl m-2 w-32 rounded bg-orange-500 p-4 text-white"
            onClick={onClickLeave}
          >
            퇴장
          </button>
          <h1 className="p-2 text-3xl" style={{ color }}>
            {message}
          </h1>
          <button
            className="text-1xl m-2 w-32 rounded bg-gray-200 p-4 text-red-600"
            onClick={onClickRed}
          >
            빨강
          </button>
          <button
            className="text-1xl m-2 w-32 rounded bg-gray-200 p-4 text-green-600"
            onClick={() => setColor('green')} // 같은 결과
          >
            초록
          </button>
          <button
            className="text-1xl m-2 w-32 rounded bg-gray-200 p-4 text-blue-600"
            onClick={onClickBlue}
          >
            파랑
          </button>
        </div>
      </div>
    </>
  );
};

export default Say;
