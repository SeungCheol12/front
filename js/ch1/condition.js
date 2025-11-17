// 조건문, 반복문
// true : 0 제외 숫자, '문자', [], {}
// false : 0, '', null, undefined, NaN(Not a Number)

const date = new Date();
let hour = date.getHours();

if (hour < 12) {
  console.log("오전");
} else {
  console.log("오후");
}

const num1 = Number("12");
console.log(typeof num1); // number
console.log(Number("abc")); // NaN

console.log(isNaN(num1)); // false
console.log(isNaN(Number("abc"))); // true
