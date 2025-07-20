const prrt = document.querySelector(".heroes")

const maincraftHero = [
  {
    img: "https://fastly.picsum.photos/id/502/200/300.jpg?hmac=aHrprSZ5m8KmqTIrgi4dr8YmRjrN_BppdP5jCNrXB0E",
    title: "Стів",
    description:
      "Класичний герой Minecraft. Уміє копати, будувати та битися з мобами.",
    price: 500,
  },
  {
    img: "https://fastly.picsum.photos/id/502/200/300.jpg?hmac=aHrprSZ5m8KmqTIrgi4dr8YmRjrN_BppdP5jCNrXB0E",
    title: "Алекс",
    description:
      "Гнучка та витривала героїня. Спеціалізується на виживанні та дослідженні.",
    price: 550,
  },
  {
    img: "https://fastly.picsum.photos/id/502/200/300.jpg?hmac=aHrprSZ5m8KmqTIrgi4dr8YmRjrN_BppdP5jCNrXB0E",
    title: "Залізний голем",
    description: "Могутній захисник селищ. Має велику силу та багато здоров'я.",
    price: 1200,
  },
  {
    img: "https://fastly.picsum.photos/id/502/200/300.jpg?hmac=aHrprSZ5m8KmqTIrgi4dr8YmRjrN_BppdP5jCNrXB0E",
    title: "Ендермен",
    description:
      "Таємничий істота з іншого виміру. Телепортується та атакує без попередження.",
    price: 900,
  },
  {
    img: "https://fastly.picsum.photos/id/502/200/300.jpg?hmac=aHrprSZ5m8KmqTIrgi4dr8YmRjrN_BppdP5jCNrXB0E",
    title: "Кріпер",
    description: "Безшумно підкрадається та вибухає. Класичний ворог гравців.",
    price: 750,
  },
];

maincraftHero.forEach((item) => {
  const template = `
          <li class="product-item">
            <img
              src="${item.img}"
              alt="img"
              class="product-img"
            />
            <h3 class="product-title">${item.title}</h3>
            <p class="product-description">
              ${item.description}
            </p>
            <p class="product-price">$ ${item.price}</p>
            <button class="product-buy">Купити</button>
         </li>
  `;
prrt.innerHTML += template;

// console.log(template)

});

 