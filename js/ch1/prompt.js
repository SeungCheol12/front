// 함수
// alert("사용자에게 메세지 전달");

// 입력
// let input = prompt("숫자 입력", 100);

// console.log("사용자 입력 값", input);

// let isBoss = confirm("당신이 주인입니까?");
// console.log(isBoss ? "주인" : "주인 아님");

// 게임 의사 물어보기

// if (confirm("게임 한판 하실래요?")) {
//   prompt.writenln("좋습니다");
// } else {
//   prompt.writenln("나중에 하시죠");
// }

// 사용자에게 숫자를 입력받아 양수, 음수, 0인지 판별
// prompt()
// let input = Number(prompt("숫자를 입력하세요."));

// if (input > 0) {
//   document.writeln("양수입니다");
// } else if (input < 0) {
//   document.writeln("음수입니다");
// } else if (input == 0) {
//   document.writeln("0 입니다");
// } else {
//   document.writeln("숫자가 아닙니다");
// }

// 숫자를 입력받아 홀, 짝 구분
// let input = Number(prompt("숫자를 입력하세요."));

// if (input % 2 == 0) {
//   document.writeln("짝수");
// } else if (input % 2 == 1) {
//   document.writeln("홀수");
// } else {
//   document.writeln("숫자를 확인해주세요");
// }

// 숫자 3개를 입력받아 평균이 >= 90 A, >= 80 B, 70>= C, >= 60 D, f

let input1 = Number(prompt("숫자를 입력하세요."));
let input2 = Number(prompt("숫자를 입력하세요."));
let input3 = Number(prompt("숫자를 입력하세요."));

let avg = (input1 + input2 + input3) / 3;
switch (parseInt(avg / 10)) {
  case 10:
  case 9:
    document.writeln("A");
    break;
  case 8:
    document.writeln("B");
    break;
  case 7:
    document.writeln("C");
    break;
  case 6:
    document.writeln("D");
    break;
  default:
    document.writeln("F");
    break;
}
