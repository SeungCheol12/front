// 정규표현식
// 자바, 자바스크립트, 파이썬에서 공통으로 사용
// 문자열에서 특정 문자 조합을 찾기 위한 패턴

// 정규표현식 생성

const regex = /Ajax/;
const origin = "JavaScript Ajax Java Python";

// 자바스크립트에서 정규식 사용
// 1. exec() : 일치정보를 나타내는 배열 리턴 / 못찾으면 null 리턴
console.log(regex.exec(origin)); // index 11
console.log(regex.exec("JavaScript")); // null

// 2. test() : 일치하면 true / false
console.log(regex.test(origin)); // true
console.log(regex.test("JavaScript")); // false

// 3. match() : string 메서드
//              RegEXP 객체의 exec() 메서드와 같은 결과
console.log(origin.match(regex));
console.log("JavaScript".match(regex)); // null

// search() : 찾으면 시작위치 리턴 / 못찾으면 -1 리턴
console.log(origin.search(regex)); // 11
console.log("JavaScript".search(regex)); // -1

// replace()
console.log(origin.replace(regex, "아작스"));
