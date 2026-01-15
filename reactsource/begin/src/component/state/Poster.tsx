import { useState } from 'react';
import oppen1 from '../../assets/img/oppen1.jpg';
import oppen2 from '../../assets/img/oppen2.jpg';
import oppen3 from '../../assets/img/oppen3.jpg';
const Poster = () => {
  // useState() : 첫번째 인자 => default값, 두번째 인자 => 함수
  const [src, setSrc] = useState<string>(oppen1);

  // 버튼 상태 변화 저장
  const [btn, setBtn] = useState<boolean>(true);
  const onToggleHandled = () => {
    // setSrc(oppen1)
    // setSrc(oppen2)
    if (btn) {
      setSrc(oppen1);
      setBtn(false);
    } else {
      setSrc(oppen2);
      setBtn(true);
    }
  };
  return (
    <>
      <div className="m-3">
        <div className="mt-8">
          <img src={src} alt="" width={300} height={500} />
          <button
            className="text-1xl m-2 w-32 rounded bg-blue-500 p-4 text-white"
            onClick={onToggleHandled}
          >
            이미지 변경
          </button>
        </div>
      </div>
    </>
  );
};

export default Poster;
