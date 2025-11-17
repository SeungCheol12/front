// 화살표 함수

const mult = (a, b) => x * y; // return 생략됨
const mult2 = (a, b) => {
  return x * y;
};

const showMsg = () => {
  console.log("안녕하세요");
};

showMsg();

const showDialog = (greeting, name) => {
  console.log(`${greeting} !! ${name}`);
};
showDialog("hello", "kim");

const fruits = ["사과", "망고", "바나나", "수박", "자두", "포도"];
const elements = [];

fruits.forEach((item) => elements.push(item));
console.log(elements);

// map(), filter()
const arr1 = [1, 4, 9, 16];
// 각 요소에 * 2 를 한 결과를 저장한 새로운 배열 생성
const arr2 = [];
arr1.forEach((item) => arr2.push(item * 2));
console.log(arr2);

const arr3 = arr1.map((item) => item * 2);
console.log(arr3);

// filter()
const arr4 = arr1.filter((i) => i > 5);
console.log(arr4);
