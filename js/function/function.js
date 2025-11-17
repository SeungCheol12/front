// 함수(단독) == 메소드(객체 내에 포함)
// function name(params) {}
// const func = function () {};
// const func1 = () => {};

// 1. 파라메터 없는 경우
function showMsg() {
  console.log("안녕하세요");
}
showMsg();

// 2. 파라메터 / return 있는 경우
function multiply(a, b) {
  return a * b;
}

const result = multiply(5, 3);
console.log(result);

function showDialog(greeting, name) {
  console.log(`${greeting} !! ${name}`);
}
showDialog("hello", "kim");

// 3. 매개변수 기본값
function multiply(a, b = 5) {
  console.log(a, b);
  return a * b;
}
console.log(multiply(3));
console.log(multiply(5, 6));

console.log();

function multiply(a, b) {
  console.log(a, b);
  b = b || 5;
  return a * b;
}
console.log(multiply(3));
console.log(multiply(5, 6));

// 4. 함수안에 함수 작성
function a() {
  function b(params) {
    console.log("b function");
  }
  if (true) {
    function c() {}
  }
  b();
  c();
}
a();
