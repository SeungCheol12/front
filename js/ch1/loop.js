// const element = object[key];

// 1~10 출력
// for (let index = 1; index < 11; index++) {
//   console.log(index);
// }

// let index = 1;
// while (index < 11) {
//   console.log(index);
//   index++;
// }

// 객체 출력
// key:value
const myCar = { make: "BMW", model: "X5", year: 2013 };
console.log(myCar);
console.log("제조연도 : ", myCar["year"]);
console.log("모델 : ", myCar.model);

for (const key in myCar) {
  //   console.log(myCar[key]);
  //   console.log(key, ":", myCar[key]);
  console.log(`${key} : ${myCar[key]}`);
}

// 0~100 출력 증가 +2
// 48이 되면 중지
for (let index = 0; index < 100; index += 2) {
  if (index == 50) break;
  console.log(index);
}
