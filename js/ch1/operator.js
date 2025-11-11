// 연산자
let a = 4,
  b = 5;
// 산술 연산자
console.log("\n산술연산");
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b); // 0.8
console.log("a % b = ", a % b);

// 비교
console.log("\n비교연산");
console.log("a == b ", a == b);
console.log("a === b ", a === b);
console.log("a != b ", a != b);
console.log("a !== b ", a !== b);

let c = "4";

console.log("a == c ", a == c); // true 4 == "4"
console.log("a === c ", a === c); // false
console.log("a != c ", a != c);
console.log("a !== c ", a !== c);

// dusruf
console.log("\n연결연산");
console.log("a + c = ", a + c); // 44 (4 + "4")
let d = "5";
console.log("d + c = ", d + c); // "5" + "4" = 54

// 단항
console.log("\n단항연산");
let i = 0;
while (i < 10) {
  i++;
  if (i == 5) continue;
  console.log(i);
}
