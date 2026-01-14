import { useState } from 'react';
import '../../App.css';
function InputMultiSample2() {
  const [inputs, setInputs] = useState<{ name: string; nickname: string }>({
    name: '',
    nickname: '',
  });
  // 구조분해
  const { name, nickname } = inputs;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        onChange={handleChange}
        value={name}
        placeholder="이름"
        className="border-2 p-1.5"
      />
      <input
        type="text"
        name=""
        id=""
        onChange={handleChange}
        value={nickname}
        placeholder="닉네임"
        className="border-2 p-1.5"
      />
      <button
        className="bg-orange-500 p-2"
        onClick={() => {
          setInputs({ name: '', nickname: '' });
        }}
      >
        초기화
      </button>
      <div>
        <b>
          입력값 : {name} : ({nickname})
        </b>
      </div>
    </>
  );
}

export default InputMultiSample2;
