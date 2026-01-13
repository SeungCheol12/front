export {};
// javascript 파일 : number, string, boolean, [], undefined, null
// let car = "BMW"; // string 유추
let car: String = "BMW"; // 명시적으로 string으로 지정

let age: number = 30;
// age = "45"; 오류

let isAdult: boolean;
isAdult = true;

let n: null = null;
// n = undefined;

let fruits: string[] = ["apple", "banana", "cherry"];
let fruits2: Array<string> = ["apple", "banana", "cherry"];

// fruits.push(1); 오류

let score1: number[] = [98, 85, 88];
let score2: Array<number> = [98, 85, 88];

// string + number
let mixed: (string | number)[] = ["apple", 45, "banana", 46, 78];

// 읽기 전용 배열
const vegetables: readonly string[] = ["carrot", "broccoli", "spinach"];
// vegetables.push(); 오류

const newArray = [...vegetables, "potato"];
console.log(newArray);

// 타입스크립트 제공 : 튜플, any, unknown, void, never, enum
// 튜플 : 순서, 길이 고정
let person: [string, number];
// person = [25, "Alice"]; 오류
person = ["Alice", 25];
console.log(person[0].toLowerCase);

function getUserInfo() {
  // 이름, 나이, 성인여부 리턴
  return ["Bob", 30, true];
}
// console.log(getUserInfo());

const [name1, age1, audlt] = getUserInfo();
console.log(`name : ${name1}, age : ${age1}, isAdult : ${audlt}`);

console.log("배열과 투플의 비교");
const inferredArray = [1, "two"];
const inferredTuple = [1, "two"] as const; //readonly

inferredArray.push("three");
inferredArray.push("four");
inferredArray.push(4);
console.log(inferredArray);

const explictTuple: [number, string] = [1, "two"]; // 명시적으로 튜플 지정
explictTuple[0] = 2;
explictTuple[1] = "three";
console.log(explictTuple);

// any == 기존 자바스크립트 변수 선언 개념과 동일
let num; // 타입을 추론할 수 없음
num = 95;
num = "Five";
console.log(num);

let randomValue: any = 10; // 명시적으로 any 할당
randomValue = "Hello";
randomValue = true;

// unknowm : 모르는 것에 대해서 일단 금지 / typecheck 후 안전하게 사용
let unknownValue: unknown = 10;
unknownValue = "Hello";
if (typeof unknownValue === "string") {
  let strLength: number = unknownValue.length;
  console.log("문자길이 ", strLength);
}
if (typeof unknownValue === "string") {
  console.log(unknownValue.toLowerCase());
}
unknownValue = false;

// as : 타입단언 or <타입>변수명
let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;
strLength = (<string>someValue).length;
// void : 변환값에 사용
function logMsg(message: string): void {
  console.log(`${message}`);
}
logMsg("log messages");

// 전달인자가 string or null, 반환값 없음
function printLength(text: string | null): void {
  // text? : text  는 null 일 수 있음
  //   console.log(`text length ${text?.length}`);

  if (text === null) {
    console.log("No text");
    return;
  }
  console.log(`text length ${text.length}`);
}

printLength("Hello! TypeScript");
printLength(null);

// never : 절대 실행될 수 없음 => 에러를 반환하거나 절대 종료되지 않는 함수의 타입으로 사용
function error(message: string): never {
  throw new Error(message);
}
// error("에러 발생");
let doc: string = "문서"; // Unreachable code detected.
let i = 0;
function infiniteLoop(): never {
  while (true) {
    i++;
  }
}
// infiniteLoop();

function handleValue(x: string | number | boolean | object) {
  if (typeof x === "string") {
    console.log("String value : " + x);
  } else if (typeof x === "number") {
    console.log("Number value : " + x);
  } else if (typeof x === "boolean") {
    console.log("Boolean value : " + x);
  } else if (typeof x === "object") {
  } else {
    const Unreachable: never = x;
    throw new Error("Unhandled type : " + Unreachable);
  }
}
handleValue("hello");
handleValue(25);
handleValue(true);
// enum = 상수 모임

enum Color {
  Red,
  Blue,
  Green,
}
console.log(Color.Blue); // 1
console.log(Color["Blue"]); // 1

let myColor: Color;
myColor = Color.Green;

// type
type Addr = string | number;
let userAddr: Addr;
userAddr = "서울시 34-5";

// type === enum
type status = "idle" | "loading" | "success" | "error";
let currentStatus: status;
currentStatus = "loading";

type pointTuple = [number, number];
let point: pointTuple = [10, 25];

type Name = {
  firstName: string;
  lastName: string;
};
// & : 교차타입
type Employee = Name & {
  employeeId: number;
};
let employee: Employee;
employee = {
  firstName: "John",
  lastName: "Doe",
  employeeId: 1234,
};

// Member 의 property 가 정해지지 않은 경우
type Member = {
  [key: string]: string;
};

let member: Member = {
  id: "user01",
};
member = {
  id: "user02",
  name: "홍길동",
};
