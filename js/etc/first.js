// 일급 함수 : 함수를 일반적인 값(정수, 문자열 ...) 과 동일하게 취급하는 개념
// 변수에 할당
// 다른 함수의 인자로 전달
// 다른 함수의 리턴값으로 사용

const func1 = () => {
  console.log("변수 할당");
};
func1();

function logText(msg) {
  msg();
}

// logText() 호출하면서 함수를 전달인자로 사용
logText(() => console.log("hi"));

//

// 리턴값
function add(x) {
  return function (y) {
    return x + y;
  };
}
const sum = add(5);
console.log(sum(6)); // sum(6) = x(5) + y(6) = 11
