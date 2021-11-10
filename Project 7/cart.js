//คลิกที่ปุ่่มเพิ่มของในตะกล้า แล้วไปทำงานต่อ
const addToCartButtons = document.getElementsByClassName("shop-game-button");
for (let i = 0; i < addToCartButtons.length; i++) {
  let button = addToCartButtons[i];
  button.addEventListener("click", addToCartClicked);
}

let cart = document.getElementById("cart");
cart.innerHTML = `<a href="#table" class="btn btn-dark position-relative"><i class="fas fa-shopping-cart"></i> Cart<span class="cart-header position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span></a>`;
//โครงหน้า
let table = document.getElementById("table");
table.setAttribute("class", "container-xxl table table-hover cart-game");
table.innerHTML = `
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Game</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
        <th scope="col" class="cart-total-price"></th>
    </tr>
</thead>`;

let tbody = document.createElement("tbody");
tbody.setAttribute("class", "tbody-cart");
table.appendChild(tbody);

function quantityinput() {
  const quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("input", quantityChanged);
  }
}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCart();
}

function addToCartClicked(event) {
  const button = event.target;
  const shopItem = button.parentElement.parentElement; // ถอยมา 2 ขั้น จะได้ให้ ไอคำสั่งข้างล่างบรรทัดนี้ อ่าน div class จากปุ่มนี้
  const id = shopItem.getElementsByClassName("game-id")[0].innerText;
  const name = shopItem.getElementsByClassName("game-name")[0].innerText;
  const pricewithstring =
    shopItem.getElementsByClassName("game-price")[0].innerText;
  const status = shopItem.getElementsByClassName("game-status")[0].innerText;
  const imagesrc = shopItem.getElementsByClassName("game-image")[0].src;

  let price = pricewithstring.match(/\d/g);
  price = price.join("");

  if (checkAdd(id)) {
    addItemToCart(id, name, price, status, imagesrc);
  }
}

function checkAdd(id) {
  let i = 0;
  let cartItemId = document.getElementsByClassName("cart-id");
  for (i = 0; i < cartItemId.length; i++) {
    if (cartItemId[i].innerText == id) {
      addQuantity();
    //   alert("This item is already added to the cart");
      return false;
    }
  }
  return true;

  function addQuantity(){
    let input = document.getElementsByClassName("cart-quantity-input")
        input[i].value++;
    updateCart();
  }
}

function addItemToCart(id, name, price, status, imagesrc) {
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  tbody.appendChild(tr);
  tr.appendChild(th);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  th.setAttribute("class", "count-item");

  td1.innerHTML = `
  <span>
    <img src ="${imagesrc}" height = "150" class="float-start mx-2">
    <p>
        <span class ="cart-id">${id}</span>
    <br><span class ="cart-name">${name}</span>
    <br><span class ="cart-status">${status}</span>
  </span>`;
  td2.innerHTML = `<span><input style="width: 70px;" class="cart-quantity-input form-control" type="number" value="1"></span>`;
  td3.innerHTML = `<span class ="cart-price">${price}</span>`;
  td4.innerHTML = `<button class="btn btn-danger" type="button">REMOVE</button>`;
  alert(
    `Was successfully added \n\n ${id} \n ${name} \n Price: ${price} \n ${status}`
  );
  quantityinput();
  removeCart();
  updateCart();
}

function updateCart() {
  let cartGame = document.getElementsByClassName("tbody-cart")[0];
  let cartTr = cartGame.getElementsByTagName("tr");
  let total = 0;

  for (let i = 0; i < cartTr.length; i++) {
    let cartprice = cartTr[i];
    let priceElement = cartprice.getElementsByClassName("cart-price")[0];
    let quantityElement = cartprice.getElementsByClassName(
      "cart-quantity-input"
    )[0];

    let price = parseFloat(priceElement.innerText);
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName(
    "cart-total-price"
  )[0].innerHTML = `<div style="">Total cost is $${total}</div>`;
  countItem();
}

function removeCart() {
  let removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCart();
}

function countItem() {
  let tbodycart = document.getElementsByClassName("tbody-cart")[0];
  let countth = tbodycart.getElementsByClassName("count-item");

  let carthead = document.getElementsByClassName("cart-header");
  for (let i = 0; i < countth.length; i++) {
    countth[i].innerText = i + 1;
    carthead[0].innerText = ` ${i + 1}`;
  }
}
