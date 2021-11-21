import { sampleData } from "./product.js";

//คลิกที่ปุ่่มเพิ่มของในตะกล้า แล้วไปทำงานต่อ
const addToCartButtons = document.getElementsByClassName("shop-game-button");
for (let i = 0; i < addToCartButtons.length; i++) {
  let button = addToCartButtons[i];
  button.addEventListener("click", addToCartClicked); //พอโดนคลิกไปเรียก function addToCartClicked
}

loadLocalCart();
//ถ้ามีก็สั่งแอดลงตะกร้าให้แสดงสินค้า

//ถ้าเปลี่ยนตัวเลขในช่อง quantity อันนี้ดักจับ แล้วไปเรียก quantityChanged อีกที
function quantityinput() {
  const quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("input", quantityChanged);
  }
}

//พอโดนเรียก ก็จะมาดูว่าตัวที่โดนเรียก แล้วสั่ง updatecartทำงาน
function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1; //ถ้าเป็น null หรือค่า <= 0 จะตั้งให้เป็น 1
  }
  updateCart();
}

//พอคลิกแล้วก็ดึงข้อมูลว่าคลิกเกมไหนมา แล้วเอาข้อมูลมาส่งไป add ลงตะกร้า
function addToCartClicked(event) {
  const button = event.target;
  const shopItem = button.parentElement.parentElement; // ถอยมา 2 ขั้น จะได้ให้ ไอคำสั่งข้างล่างบรรทัดนี้ อ่าน div class จากปุ่มนี้
  const id = shopItem.getElementsByClassName("game-id")[0].innerText;
  const name = shopItem.getElementsByClassName("game-name")[0].innerText;
  const pricewithstring =
    shopItem.getElementsByClassName("game-price")[0].innerText;
  const status = shopItem.getElementsByClassName("game-status")[0].innerText;
  const img = shopItem.getElementsByClassName("game-image")[0].src;
  let price = pricewithstring.match(/\d/g);
  price = price.join("") ;
  addItemToCart(id, name, price, status, img);
}

//ดึงข้อมูลจาก Local ถ้ามีข้อมูล ก็เอาข้อมูลเพิ่มลงตะกร้า
function loadLocalCart() {
  var storedcart = JSON.parse(localStorage.getItem("cartForLocal")); //เรียกให้ไปเอา localstorage ที่เก็บไว้
  if (storedcart == null || storedcart == undefined) return []; //เช็คว่า undefined ไหม
  storedcart.forEach((element) => {
    sampleData.forEach((allGame) => {
      if (element.id === allGame.Id){
        for(let i=0; i< element.quantity; i++){
          addItemToCart(allGame.Id, allGame.Name, allGame.Price, allGame.Status, allGame.img);
        }
      }
    })
  });
  return true;
}


//ซื้อของที่มีอยู่แล้ว ถ้ามีอยู่แล้วจะไปสั่งเพิ่ม quantity
function checkAdd(id) {
  let i = 0;
  let cartItemId = document.getElementsByClassName("cart-id");
  for (i = 0; i < cartItemId.length; i++) {
    if (cartItemId[i].innerText == id) {
      addQuantity()
      return true
    }
  }
  return false;

  function addQuantity(){
    let input = document.getElementsByClassName("cart-quantity-input")
        input[i].value++;
    updateCart();
  }
}

//เพิ่มสินค้าลงตะกร้าก็จะสร้างตารางมาใส่ข้อมูล
function addItemToCart(id, name, price, status, imagesrc) {
  if (checkAdd(id) == true) {
  } else{
  let tbody = document.getElementsByClassName("tbody-cart")[0];
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
    <img src ="${imagesrc}" height = "150" class="cart-image float-start mx-2">
    <p>
        <span class ="cart-id">${id}</span>
    <br><span class ="cart-name">${name}</span>
    <br><span class ="cart-status">${status}</span>
  </span>`;
  td2.innerHTML = `<span><input style="width: 70px;" class="cart-quantity-input form-control" type="number" value="1"></span>`;
  td3.innerHTML = `<span class ="cart-price">${price}</span>`;
  td4.innerHTML = `<button class="btn btn-danger cart-remove" type="button">REMOVE</button>`;
  quantityinput();
  removeCart();
  updateCart();
  }
}

//เรียกใช้คำนวนราคารวมกับจะมีเก็บข้อมูลลง localstorage
function updateCart() {
  let cartGame = document.getElementsByClassName("tbody-cart")[0];
  let cartTr = cartGame.getElementsByTagName("tr");
  let total = 0;
  let cartForLocal = [];
  for (let i = 0; i < cartTr.length; i++) {
    let cartList = cartTr[i];
    let priceElement = cartList.getElementsByClassName("cart-price")[0];
    let quantityElement = cartList.getElementsByClassName("cart-quantity-input")[0];

    let price = parseFloat(priceElement.innerText);
    let quantity = quantityElement.value;
    total = total + price * quantity;

    //เอาไว้นับ quantity แอด เข้า localstorage
    //ใส่เพิ่มไว้เก็บ quantity โดยเฉพาะ
    let idElement = cartList.getElementsByClassName("cart-id")[0];
    let id = idElement.innerText;
    cartForLocal.push({id, quantity});
    localStorage.setItem("cartForLocal", JSON.stringify(cartForLocal));
  }
  if(cartTr.length == 0){
    localStorage.setItem("cartForLocal", JSON.stringify(cartForLocal));
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName(
    "cart-total-price"
  )[0].innerHTML = `<div style="">Total cost is $${total}</div>`;
  countItem();
}

//ดักว่ากดปุ่มลบสินค้าในตะกร้า
function removeCart() {
  let removeCartItemButtons = document.getElementsByClassName("cart-remove");
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }
}

//ลบสินค้าในตะกร้า
function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCart();
}

//นับจำนวนสินค้าในตะกร้าตอนนี้
function countItem() { 
  let tbodycart = document.getElementsByClassName("tbody-cart")[0];
  let countth = tbodycart.getElementsByClassName("count-item");
  let carthead = document.getElementsByClassName("cart-header");
  for (let i = 0; i < countth.length; i++) {
    countth[i].innerText = i + 1;
    carthead[0].innerText = ` ${i + 1}`;
  }
  if(countth.length == 0){
    carthead[0].innerText = ``;
  }
}




