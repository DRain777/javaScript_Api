const productData = [
  {
    id: 1,
    name: "Ноутбук",
    category: "Электроника",
  },
  {
    id: 2,
    name: "Смартфон",
    category: "Электроника",
  },
  {
    id: 3,
    name: "Кофемашина",
    category: "Бытовая техника",
  },
  {
    id: 4,
    name: "Фотокамера",
    category: "Электроника",
  },
  {
    id: 5,
    name: "Микроволновка",
    category: "Бытовая техника",
  },
  {
    id: 6,
    name: "Наушники",
    category: "Электроника",
  },
];

const selectEl = document.querySelector("#category-select");

selectEl.addEventListener("change", () => {
  const value = selectEl.value;
  displayProducts(value);
});

function displayProducts(category) {
  const productsList = document.getElementById("productList");
  productsList.innerHTML = "";

  productData.forEach((product) => {
    if (category === "" || product.category === category) {
      const listItem = document.createElement("li");
      listItem.textContent = product.name;
      productsList.appendChild(listItem);
    }
  });
}
