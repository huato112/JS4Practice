import { sampleData } from "./product.js";

let contentContainer = document.createElement("div")
contentContainer.setAttribute("class", "container-xxl")
let productPosition = document.createElement("div");
productPosition.setAttribute("class", "row row-cols-lg-5 my-md-4");

sampleData.forEach((value) => {
  let img = document.createElement("img");
  img.src = `${value.img}`;
  img.height = "250";
  img.setAttribute("class", "game-image card-img-top img-fluid");

  const card = document.createElement("div");
  card.appendChild(img);
  card.setAttribute("class", "card-boxx card col-md-6 mx-auto mh-100 px-md-4 py-md-4 mx-md-4 my-md-4 bg-light");
  card.setAttribute("Name", value.Name);
  card.id = "Game";

  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "d-flex flex-column card-body ");
  cardBody.innerHTML = `
  <p class="card-text"><br>
  <span>ID: </span><span class = "game-id">${value.Id}</span>
  <br>
  <span>GAME: </span><span class = "game-name">${value.Name}</span>
  <br>
  <span>PRICE: </span><span class = "game-price">${value.Price}</span>
  <br>
  <span>STATUS: </span><span class = "game-status">${value.Status}</span>
  `;

  //สร้างปุ่ม
  const btn = document.createElement("a");
  if (value.Status == "Out of stock") {
    btn.setAttribute("class", "btn btn-danger cursor-not-allowed mt-auto");
    btn.setAttribute("style", "cursor: not-allowed");
    btn.appendChild(document.createTextNode("Out of stock"));
  } else {
    btn.setAttribute("class", "btn btn-primary shop-game-button mt-auto");
    btn.appendChild(document.createTextNode("Add to cart"));
  }
  cardBody.appendChild(btn);
  card.appendChild(cardBody);
  productPosition.appendChild(card);
  contentContainer.appendChild(productPosition);
});
  document.getElementById("Index").appendChild(contentContainer)