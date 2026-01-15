import { useState } from 'react';

type BtnProps = {
  style: React.CSSProperties;
  count: number;
  onClick: () => void;
};
function MyButton({ style, count, onClick }: BtnProps) {
  return (
    <>
      <button style={style} onClick={onClick}>
        Clicked {count} times
      </button>
    </>
  );
}

export default MyButton;
