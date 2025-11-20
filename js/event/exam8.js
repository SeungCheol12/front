// tab-button 클릭시 짝꿍 tab-content 보여주기

// tab-button 찾기 + click 이벤트 리스너 부착
// tab-content 찾기 + show 클래스명 이동
// const contents = document.querySelectorAll(".tab-content");
// const btns = document.querySelectorAll(".tab-button");
// btns.forEach((btn, idx) => {
//   btn.addEventListener("click", (e) => {
// const evn = e.target;
//     btns.forEach((element) => {
//       element.classList.remove("orange");
//     });
//     evn.classList.add("orange");

//     contents.forEach((content) => {
//       content.classList.remove("show");
//     });
//     contents[idx].classList.add("show");
//   });
// });

// 이벤트 버블링
const parent = document.querySelector(".container");
const contents = document.querySelectorAll(".tab-content");
const btns = document.querySelectorAll(".tab-button");

parent.addEventListener("click", (e) => {
  const evn = e.target;
  btns.forEach((element) => {
    element.classList.remove("orange");
  });
  evn.classList.add("orange");
  contents.forEach((content) => {
    content.classList.remove("show");
  });
  contents[evn.dataset.idx].classList.add("show");
});
