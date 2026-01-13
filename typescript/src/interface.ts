export {};
// object

let user1: object;
user1 = { name: "Alice", age: 25 };

console.log(user1);
// console.log(user1.name); // Property 'name' does not exist on type 'object'

interface User {
  name: string;
  age: number;
  gender?: string;
}

let user2: User = {
  name: "Alice",
  age: 25,
};

let user3: User = {
  name: "Teddy",
  age: 40,
  gender: "male",
};

console.log(user2.age);
console.log(user3.gender);
user3.gender = "female";
console.log(user3.gender);

interface Car {
  readonly model: string;
  year: number;
}

let myCar: Car = {
  model: "Toyota",
  year: 2020,
};

// myCar.model = "Honda"; // Cannot assign to 'model' because it is a read-only property.

interface Student {
  name: string;
  id: number;
  [key: number]: string;
}

// A~D 점수 부여를 해야 한다면
let student: Student = {
  name: "John",
  id: 12345,
  1: "A",
  2: "B",
  3: "A",
  4: "C",
};

type Score = "A+" | "A" | "B" | "C" | "D";
interface Student2 {
  name: string;
  id: number;
  [key: number]: Score;
}

let student2: Student2 = {
  name: "John",
  id: 12345,
  1: "A",
  2: "B",
  3: "A",
  4: "C",
};

interface Car2 {
  color: string;
  wheels: number;
  start(): void;
}

class Truck implements Car2 {
  color: string;
  wheels: number;
  // 생성자
  constructor(color: string, wheels: number) {
    this.color = color;
    this.wheels = wheels;
  }
  start(): void {
    console.log("Truck start");
  }
}
const myCar2 = new Truck("White", 4);
console.log(myCar2);

interface Person {
  name: string;
  age: number;
}
// Employee
interface Employee extends Person {
  employeeTd: number;
  department: string;
}
let employee: Employee = {
  name: "Jane",
  age: 30,
  employeeTd: 1001,
  department: "HR",
};
console.log(employee);
console.log(employee.age, employee.department, employee.employeeTd, employee.name);

// 인라인 방식
let user4: { name: string; age: number } = {
  name: "bob",
  age: 30,
};
