const array = [10, 11, 12];

// 배열 분해
let arr1 = array[0];
let arr2 = array[1];
let arr3 = array[2];

console.log(arr1, arr2, arr3);

const [arr4, arr5] = array;
console.log(arr4, arr5);

console.log("... 연산자");
const [arr6, ...arr7] = array;
// console.log(arr6);
console.log(arr7);

// 복제
// 얕은 복제(같은 주소 공유) vs 깊은 복제
const array2 = array;
console.log("복사된 array2", array2);

array2[0] = 99;
console.log("값 변경 후 array2", array2);
console.log("값 변경 후 array1", array);

// 깊은 복제(값 복사)
const array3 = [...array];
array3[0] = 15;
console.log("값 변경 후 array3", array3);
console.log("값 변경 후 array2", array2);
console.log("값 변경 후 array1", array);

const person = {
  name: "John",
  age: 30,
  job: "Developer",
  address: {
    city: "Seoul",
    zip: "12345",
  },
};

console.log(person);

const person2 = { ...person };
person2.name = "Bob";
person2.age = 40;
person2.address.city = "Busan";

console.log(person2);
console.log(person);
