// 사용자 객체
const person = {
  name: ["bob", "smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  greeting: function () {
    console.log(`Hi !!! I'm ${this.name[0]}.`);
  },
};

console.log(person);
console.log(person.name);
console.log(person.age);

person.greeting();

const tv = new Object();
tv.color = "red";
tv.power = true;
tv.volume = 13;
tv.info = function () {
  console.log("색상 " + this.color);
  console.log("전원 " + this.power);
  console.log("볼륨 " + this.volume);
};

console.log(tv);

// 객체 값 변경
person.age = 40;
console.log(person.age);

// 함수 추가
person.farewell = function () {
  console.log("bye");
};
person.farewell();

// 얕은 복사 / 깊은 복사
const person2 = person;

// 원본수정
person.name[0] = "tomato";
console.log("person name 변경 후", person.name);
console.log(person2.name);

const person3 = { ...person, name: [...person.name], interests: [...person.interests] };
person.name[0] = "bob";
person.interests[0] = "book";
console.log("person name 변경 후", person.name);
console.log("person interests 변경 후", person.interests);
console.log(person3.name);
console.log(person3.interests);
