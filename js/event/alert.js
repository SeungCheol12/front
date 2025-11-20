// 알림창 보여주기 클릭 시 알림창 보여주기
const div = document.querySelector(".alert-box");
const btn = document.querySelector("button");
const close = document.querySelector(".close");

const notification = (state) => {
  div.style.display = state;
};

btn.addEventListener("click", () => {
  notification("block");
});
close.addEventListener("click", () => {
  notification("none");
});
