import React from 'react';

type ChildProps = {
  name: string;
  color: string;
  age?: number;
};
// 구조분해할당
function Child({ active, onClick }: { active: boolean; onClick: () => void }) {
  console.log('child rendered');
  // function Child(props: ChildProps) {
  // props.name += 'from Parent';

  // name += 'from Parent';
  return (
    <>
      <h1 className="text-3xl">Child : {active ? 'Active' : 'NOT Active'}</h1>
      <button className="border bg-amber-600 p-3" onClick={onClick}>
        증가
      </button>
    </>
  );
}

export default React.memo(Child);
