import { cart } from "./cart.js";
import { sampleData } from "./product.js";

let cartClicked = document.getElementById("cart");
cartClicked.addEventListener("click", () => {
  showCart();
});

let removeCart = document.getElementById("cart-remove");
removeCart.addEventListener("click", () => {
  cart.remove();
});

function showCart() {
  const tbody = document.getElementsByClassName("tbody-cart")[0];
  // let length = tbody.getElementsByTagName("tr").length;
  // for(let i=0; i < length; i++){
  //     tbody.getElementsByTagName("tr")[0].remove();
  // }
  tbody.innerHTML = ``;

  let a = [];
  a = cart.list();
  let count = 0;

  a.forEach((value) => {
    count++;
    
    let i = sampleData.find((element) => element.Id == value.id)
    const tr = document.createElement("tr");

    const th = document.createElement("th");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    th.innerText = `${count}`;
    td1.innerText = `${i.Id}`;

    td3.innerText = `${i.Name}`;
    td4.innerText = `${value.quantity}`;
    td5.innerText = `${i.Price}`;

    let img = document.createElement("img");
    img.src = `${i.img}`;
    img.height = "250";
    img.setAttribute("class", "game-image card-img-top img-fluid");
    td2.appendChild(img);

    const tbody = document.getElementsByClassName("tbody-cart")[0];
    tbody.appendChild(tr);

    td6.innerText = `${value.quantity * i.Price}`;

  });
}
