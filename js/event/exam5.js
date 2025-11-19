// form submit 발생 시
// 내용이 잘 입력되었는지 확인

document.querySelector("form").addEventListener("submit", (e) => {
  // submit 중지
  e.preventDefault();

  const form = e.target;
  // 검증
  // 내용이 잘 입력되어있는지 확인
  // 입력 안된 요소에 포커스 주고 메세지 alert 띄우기
  if (form.name.value === "") {
    alert("이름을 입력하세요");
    form.name.focus();
    return;
  } else if (form.password.value === "") {
    alert("번호를 입력하세요");
    form.password.focus();
    return;
  } else if (form.age.value === "") {
    alert("나이를 입력하세요");
    form.age.focus();
    return;
  }
  // 내용이 들어있다면 원래대로 submit 실행
  e.target.submit();
});
