// 수학
// 자바 : Math.random() == 자바스크립트

console.log(Math.PI);
console.log(Math.floor(3.14159)); // 버림
console.log(Math.ceil(3.14159)); // 올림
console.log(Math.abs(-3)); // 절대값
console.log(Math.max(5, 6, 8, 12, 1, 3));
console.log(Math.min(5, 6, 8, 12, 1, 3));
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 11));
console.log(Math.floor(Math.random() * 31));

// 120 ~ 150 사이의 난수
console.log(Math.floor(Math.random() * 31) + 120);

// 주사위 2개를 굴려서 눈의 합이 5가 나올때까지
// 함수 작성후 출력
console.log();
const dice = () => {
  while (true) {
    let input1 = Math.floor(Math.random() * 6 + 1);
    let input2 = Math.floor(Math.random() * 6 + 1);
    console.log(`${input1}, ${input2}`);
    if (input1 + input2 == 5) {
      break;
    }
  }
};
dice();
console.log();

// 로또번호 6개 추출 후 배열에 중복 없이 담은 후 출력
// 1 ~ 46

const lotto = [];
while (true) {
  let num = Math.floor(Math.random() * 46 + 1);
  if (!lotto.includes(num)) {
    lotto.push(num);
  }
  if (lotto.length > 5) {
    break;
  }
}

console.log(lotto);
