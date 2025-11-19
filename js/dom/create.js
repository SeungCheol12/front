// 생성 클릭 시 동적으로 element(node) 생성
// <p>HELLO</p>

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const pTag = "<p>HELLO</p>";

  // insertAdjacentHTML("위치", 삽입요소)
  document.querySelector("#test").insertAdjacentHTML("afterend", pTag);

  //   document.body.append(pTag);
  const img = document.createElement("img");
  img.src = "1.jpg";
  img.alt = "시계";
  document.body.appendChild(img);
});
