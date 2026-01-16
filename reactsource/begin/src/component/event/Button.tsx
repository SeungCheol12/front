function Button() {
  // 버튼이 클릭되면 alert('버튼클릭')
  const handleClick = () => alert('버튼클릭');
  return (
    <>
      {/* <button
        className="m-5 bg-orange-500 p-4"
        onClick={() => {
          alert('버튼클릭');
        }}
      >
        버튼
      </button> */}
      <button className="m-5 bg-orange-500 p-4" onClick={handleClick}>
        버튼
      </button>
    </>
  );
}

export default Button;
