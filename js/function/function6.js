// 내장함수
// window(생략).confirm(), window(생략)alert(),
// isNaN(), parseInt(), parseFloat()

// encodeURI() : 영문, 숫자, 일부기호 제외하고 인코딩해준다
// encodeURIComponent() : 영문, 숫자 제외하고 인코딩해준다

// http://localhost:8080/basic/info.html?name=%ED%99%8D%EA%B8%B8%EB%8F%99&age15
console.log(encodeURI("http://localhost:8080/basic/info.html?name=홍길동&age15"));
console.log();
// http%3A%2F%2Flocalhost%3A8080%2Fbasic%2Finfo.html%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99%26age15
console.log(encodeURIComponent("http://localhost:8080/basic/info.html?name=홍길동&age15"));

// 디코딩
console.log(decodeURI("http://localhost:8080/basic/info.html?name=%ED%99%8D%EA%B8%B8%EB%8F%99&age15"));
console.log(
  decodeURIComponent("http%3A%2F%2Flocalhost%3A8080%2Fbasic%2Finfo.html%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99%26age15")
);

// 2초가 지난 뒤 안녕 글자 출력
console.log("종료");
setTimeout(() => {
  console.log("안녕");
}, 2000);
console.log("종료");

// 일정시간 간격으로 처리
console.log("시작");
setInterval(() => {
  console.log("3초가 지났습니다.");
}, 3000);

console.log("종료");
