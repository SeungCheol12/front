// add(a, b) : 더한 결과 리턴(함수 선언방식)

// add => add2 함수표현식으로 변경
function add(a, b) {
  return a + b;
}

console.log(add(4, 6));

const add2 = function (a, b) {
  return a + b;
};
let result2 = add2(14, 16);
console.log(result2);

// 1~10 까지 더한 결과를 리턴하는 함수 작성(함수표현식)

const sum = function () {
  let num = 0;
  for (let input = 0; input < 11; input++) {
    num += input;
  }
  return num;
};
let result3 = sum();
console.log(result3);

// 3의 배수 찾기
// multiple(num) : num 3의 배수라면 "박수" 출력/ 아닌경우 "통과"
function multiple(num) {
  if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}
multiple(5);

// multiple2(num)
// 3의 배수인 경우 박수, 9의 배수인 경우 박수x2 / 아닌경우 통과

function multiple2(num) {
  if (num % 3 == 0) {
    if (num % 9 != 0) {
      console.log("박수");
    } else {
      console.log("박수 박수");
    }
  } else {
    console.log("통과");
  }
}

multiple2(18);
multiple2(3);

// 두 과목의 점수를 입력하면 합격 여부를 알려주는 함수
// pass(outline, law)
// 두 과목 합해서 120점 이상이면 합격 출력 / 한 과목이 40점미만 불합격 출력

function pass(outline, law) {
  const jumsu = outline + law;

  if (outline >= 40 && law >= 40 && jumsu >= 120) {
    console.log("합격");
  } else {
    console.log("불합격");
  }
}
pass(50, 70);
