// 배열에 객체를 담은 객체 배열
const products = [
  { id: 0, price: 77000, title: "Blossom Dress" },
  { id: 1, price: 55000, title: "SpringField Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

products.forEach((item) => {
  console.log(`${item.id}, ${item.price}, ${item.title}`);
});
// card-title : 제품 title

// card-text : 가격

// card 영역 찾기
const cards = document.querySelectorAll(".card");
cards.forEach((card, idx) => {
  // .card-title 요소 찾기
  const title = card.querySelector(".card-title");
  // .card-text 요소 찾기
  //
  const price = title.nextElementSibling;

  title.textContent = products[idx].title;
  price.textContent = products[idx].price;
});
