// Элементы интерфейса
const searchButton = document.querySelector(".icon");
const popupSearch = document.getElementById("popup_search");
const searchInput = document.getElementById("query");
const searchForm = popupSearch.querySelector("form");
const goodsContainer = document.querySelector(".goods");
const resultContainer = document.querySelector(".result");

// Массив товаров
const goods = [
  {
    name: "CyberForge Alpha",
    price: 299000,
    image:
      "https://sun9-3.userapi.com/impg/0F62qMW9tAHbLBEkqGfCyJgn8z57aK7URZQy2g/qft4NYyDBGU.jpg?size=2560x1672&quality=96&sign=17c4d2137f8ee9172ea8903e519d6526&type=album",
  },
  {
    name: "ShadowCore X1",
    price: 249000,
    image:
      "https://sun9-17.userapi.com/impg/EjLUSMFINIj2cDtloaP96Uel1hgkldUdign5Rw/2BO8Jckaqtc.jpg?size=2560x1811&quality=96&sign=48172990a332dcb92fe7546f1921080a&type=album",
  },
  {
    name: "Quantum Beast 5000",
    price: 349000,
    image:
      "https://sun9-19.userapi.com/impg/3L8L2HwZdBkMt8ud8pRcGfCI9wkvgJwzjoGziw/6h1CCtNqJnY.jpg?size=2560x1779&quality=96&sign=4f6ea1a4945cd8e3db9b4dcfc393c60d&type=album",
  },
  {
    name: "HyperNova GX",
    price: 279000,
    image:
      "https://sun9-41.userapi.com/impg/wi4DaXpDX-xmmP4GT6zNCgbY5utV-OCnF6HzAA/nOPcl3eZYkA.jpg?size=2560x1835&quality=96&sign=81e9a1faaf8e9a2e5f577ebd15561ceb&type=album",
  },
  {
    name: "PixelRift Pro",
    price: 489000,
    image:
      "https://sun9-13.userapi.com/impg/PMbte-NJi1DY5S22wwi35zPEmum9k5adsrJizQ/gfRRpUnB1Fo.jpg?size=2560x1911&quality=96&sign=85188aac2757b724b43cf923d570c838&type=album",
  },
  {
    name: "IronClad Predator",
    price: 599000,
    image:
      "https://sun9-69.userapi.com/impg/XU9gXuiUq_1R0DOVE8P1MlN9UhiGHBSw4YsJCg/cxY4yVEecLs.jpg?size=2560x1775&quality=96&sign=7b3c77b1908fa00cab99e94ec8d6414e&type=album",
  },
  {
    name: "NeonPulse X",
    price: 649000,
    image:
      "https://sun9-31.userapi.com/impg/WL_N2vXeoomwqOwvwNmCxQBflnJqgeoDZggVlA/q6jLYVvWBl4.jpg?size=2560x1799&quality=96&sign=ad6d0d3e331b2a427204debe0f9dade7&type=album",
  },
  {
    name: "ZeroByte Titan",
    price: 279000,
    image:
      "https://sun9-29.userapi.com/impg/f0w611CYhZOuoiZKFDF2MQ9bBjrXXpRvBXoyDg/rSAsmP4DSVI.jpg?size=2560x1440&quality=96&sign=fe706e27b0a25b32ae788eef5a7a061f&type=album",
  },
  {
    name: "StormHacker Z",
    price: 999000,
    image:
      "https://sun9-29.userapi.com/impg/f0w611CYhZOuoiZKFDF2MQ9bBjrXXpRvBXoyDg/rSAsmP4DSVI.jpg?size=2560x1440&quality=96&sign=fe706e27b0a25b32ae788eef5a7a061f&type=album",
  },
  {
    name: "InfernoGear MK II",
    price: 229000,
    image:
      "https://sun9-32.userapi.com/impg/G4PsPvOJ9qtUamrIP45gtgPDAwj1ZbgLHU4XuQ/fsyokDSXGCI.jpg?size=2560x1662&quality=96&sign=12e3cac9b7b3d503d908ae6216cdc699&type=album",
  },
];

// Открытие окна поиска
searchButton.addEventListener("click", () => {
  popupSearch.style.display = "block";
});

// Закрытие окна при клике за его пределами
window.addEventListener("click", (event) => {
  if (event.target === popupSearch) {
    popupSearch.style.display = "none";
  }
});

// Закрытие окна по клавише ESC
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    popupSearch.style.display = "none";
  }
});

// Функция для обновления результатов поиска
function updateSearchResults() {
  const query = searchInput.value.toLowerCase();

  // Фильтрация и сортировка товаров
  const filteredGoods = goods
    .filter((item) => item.name.toLowerCase().includes(query))
    .sort((a, b) => a.price - b.price);

  // Очистка контейнера с результатами
  resultContainer.innerHTML = "";

  // Добавление отфильтрованных товаров в результат
  filteredGoods.forEach((item) => {
    const goodElement = document.createElement("a");
    goodElement.classList.add("popup_good");
    goodElement.href = "good.html";

    goodElement.innerHTML = `
      <div class="image">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="text">
        <p class="name">${item.name}</p>
      </div>
      <div class="price">
        <p>${item.price.toLocaleString()} ₸</p>
      </div>
    `;

    resultContainer.appendChild(goodElement);
  });
}

searchInput.addEventListener("input", updateSearchResults);
