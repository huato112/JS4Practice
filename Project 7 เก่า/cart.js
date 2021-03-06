import { sampleData } from "./product.js";

//คลิกที่ปุ่่มเพิ่มของในตะกล้า แล้วไปทำงานต่อ
const addToCartButtons = document.getElementsByClassName("shop-game-button");
for (let i = 0; i < addToCartButtons.length; i++) {
  let button = addToCartButtons[i];
  button.addEventListener("click", addToCartClicked); //พอโดนคลิกไปเรียก function addToCartClicked
}

loadLocalCart();
//ถ้ามีก็สั่งแอดลงตะกร้าให้แสดงสินค้า.

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


//พอคลิกแล้วก็ดึงข้อมูลว่าคลิกเกมไหนมา แล้วเอาข้อมูลมาส่งไป add ลงตะกร้า
function addToCartClicked(event) {
  const button = event.target; 
  const shopItem = button.parentElement.parentElement; // ถอยมา 2 ขั้น จะได้ให้ ไอคำสั่งข้างล่างบรรทัดนี้ อ่าน div class จากปุ่มนี้
  const id = shopItem.getElementsByClassName("game-id")[0].innerText;
  const name = shopItem.getElementsByClassName("game-name")[0].innerText; //หลังถอยก็สั่งให้มาหา game-name และก็ game-id 
  const price =
    shopItem.getElementsByClassName("game-price")[0].innerText;
  const status = shopItem.getElementsByClassName("game-status")[0].innerText;
  const img = shopItem.getElementsByClassName("game-image")[0].src;
  addItemToCart(id, name, price, status, img);
}

//เพิ่มสินค้าลงตะกร้าก็จะสร้างตารางมาใส่ข้อมูล
function addItemToCart(id, name, price, status, imagesrc) {
  if (checkAdd(id) == true) { //ถ้ามีสินค้าอยู่แล้วก็จะสร้างตารางออกมาด้านล่างของเว็บ
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
        <span>ID: </span><span class ="cart-id">${id}</span>
    <br><span>GAME: </span><span class ="cart-name">${name}</span>
    <br><span>STATUS: </span><span class ="cart-status">${status}</span>
  </span>`;
  td2.innerHTML = `<span><input style="width: 70px;" class="cart-quantity-input form-control" type="number" value="1"></span>`;
  td3.innerHTML = `<span class ="cart-price">${price}</span>`;
  td4.innerHTML = `<button class="btn btn-danger cart-remove" type="button">REMOVE</button>`;
  updateCart();
  }
}


//ถ้าเปลี่ยนตัวเลขในช่อง quantity อันนี้ดักจับ แล้วไปเรียก quantityChanged อีกที
function quantityinput() {
  const quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("input", quantityChanged);
  }
}

//พอโดนเรียก ก็จะมาดูว่าตัวที่โดนเรียก แล้วสั่ง updatecart ทำงาน
function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1; //ถ้าเป็น null หรือค่า <= 0 จะตั้งให้เป็น 1
  }
  updateCart();
}


//เช็คว่าซื้อของที่มีอยู่แล้ว จะได้ไม่ต้องไปสร้างตารางใหม่ ถ้ามีอยู่แล้วจะไปสั่งเพิ่ม quantity แทน
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


//เรียกใช้คำนวนราคารวมกับจะมีเก็บข้อมูลลง localstorage
function updateCart() {
  let cartGame = document.getElementsByClassName("tbody-cart")[0];
  let cartTr = cartGame.getElementsByTagName("tr");
  let total = 0;
  let cartForLocal = [];
  for (let i = 0; i < cartTr.length; i++) {
    let cartList = cartTr[i];
    let priceElement = cartList.getElementsByClassName("cart-price")[0];
    let quantityElement = cartList.getElementsByClassName("cart-quantity-input")[0]; //ดูแต่ละ tr ว่าราคาเท่าไหร่ รายละเอียด จำนวน

    let price = parseFloat(priceElement.innerText);
    let quantity = quantityElement.value;
    total = total + price * quantity;

    //เอาไว้นับ quantity แอด เข้า localstorage
    //ใส่เพิ่มไว้เก็บ quantity โดยเฉพาะ
    let idElement = cartList.getElementsByClassName("cart-id")[0];
    let id = idElement.innerText;
    cartForLocal.push({id, quantity}); //เก็บ array โดยใน array จะมี id กับ quantity
    localStorage.setItem("cartForLocal", JSON.stringify(cartForLocal)); //คำสั่งไว้เก็บ
  }
  if(cartTr.length == 0){
    localStorage.setItem("cartForLocal", JSON.stringify(cartForLocal));
  }
  document.getElementsByClassName("cart-total-price")[0].innerHTML = `<div style="">Total cost is $${total}</div>`;
  countItem(); //เรียกใช้ให้พวก event ต่าง ๆ ทำงาน
  removeCart() //เรียกใช้ให้พวก event ต่าง ๆ ทำงาน
  quantityinput(); //เรียกใช้ให้พวก event ต่าง ๆ ทำงาน
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
  buttonClicked.parentElement.parentElement.remove(); //ถอยมา 2 ขั้นแล้วก็ลบทั้ง tr แล้วก็จะ updatecart ต่อ
  updateCart(); //ต้อง update ตลอดเวลาเพราะว่าเดี๋ยวเรื่องเงินใน localstorage จะไม่อัพเดท 
}

//นับจำนวนสินค้าในตะกร้าตอนนี้
function countItem() { 
  let tbodycart = document.getElementsByClassName("tbody-cart")[0];
  let countItems = tbodycart.getElementsByClassName("count-item");
  let carthead = document.getElementsByClassName("cart-header");
  for (let i = 0; i < countItems.length; i++) {
    countItems[i].innerText = i + 1;
    carthead[0].innerText = ` ${i + 1}`;
  }
  if(countItems.length == 0){
    carthead[0].innerText = ``;
  }
}




