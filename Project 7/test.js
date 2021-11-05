import { sampleData } from "./product.js";

let searchdiv1 = document.createElement("div");
searchdiv1.setAttribute("class", "input-group");
let searchdiv = document.createElement("div");
searchdiv.setAttribute("class", "form-outline");

let searchbar = document.createElement("input");
searchbar.setAttribute("class", "form-control");
searchbar.setAttribute("type", "text");
searchbar.setAttribute("id", "search");
searchbar.setAttribute("type", "text");
searchbar.setAttribute("placeholder", "Search");
searchbar.setAttribute("style", "max-width: 500px;");
searchbar.setAttribute("style", "min-width: 100px;");

let searchbtn = document.createElement("button");
// searchbtn.appendChild(document.createTextNode("Search "));
searchbtn.setAttribute("class", "btn btn-primary");
searchbtn.setAttribute("type", "button");
searchbtn.setAttribute("style", "width: 40px;");
searchbtn.setAttribute("id", "searchbtn");

let inbtn = document.createElement("i");
inbtn.setAttribute("class", "fas fa-search");

searchbtn.appendChild(inbtn);

searchdiv.appendChild(searchbar);
searchdiv1.appendChild(searchdiv);
searchdiv1.appendChild(searchbtn);
document.getElementById("Product").appendChild(searchdiv1);
// // addEventListener version
// const input = document.querySelector('input[type="search"]');

// input.addEventListener('search', () => {
// console.log("The term searched for was " + input.value);
// })

let newDiv = document.createElement("div"); //create <div></div>
newDiv.setAttribute("class", "row row-cols-2 row-cols-lg-5 g-2 g-lg-3");

sampleData.forEach((value) => {
  //create img
  let img = document.createElement("img");
  img.src = `${value.img}`;
  //img.className = "img-fluid"
  //img.width = "150"
  img.height = "250";

  const contentDiv = document.createElement("div");
  contentDiv.setAttribute(
    "class",
    "col shadow bg-body rounded p-2 bd-highlight mh-100 px-md-4 py-md-4 mx-md-4 my-md-4"
  );
  contentDiv.appendChild(img); //ใส่รูปอิอิ
  contentDiv.setAttribute("Name", value.Name);
  contentDiv.id = "Game";

  const content2div = document.createElement("div");

  content2div.appendChild(document.createElement("br"));
  content2div.appendChild(document.createTextNode(`ID: ${value.Id}`)); //ใส่ข้อมูลใน div ย่อย
  content2div.appendChild(document.createElement("br"));
  content2div.appendChild(document.createTextNode(`Name: ${value.Name}`)); //ใส่ข้อมูลใน div ย่อย
  content2div.appendChild(document.createElement("br"));
  content2div.appendChild(document.createTextNode(`Price: ${value.Price}`));
  content2div.appendChild(document.createElement("br"));
  content2div.appendChild(document.createTextNode(`Status: ${value.Status}`));
  content2div.appendChild(document.createElement("br"));
  // class btn btn-primary
  // create button
  // class btn btn-danger
  // cursor: not-allowed
  let btn = document.createElement("a");
  if (value.Status == "Out of stock") {
    btn.setAttribute("class", "btn btn-danger mw-100 cursor-not-allowed");
    btn.setAttribute("style", "cursor: not-allowed");
    btn.appendChild(document.createTextNode("Out of stock"));
  } else {
    btn.setAttribute("class", "btn btn-primary mw-100");
    btn.setAttribute("href", "https://www.google.com");
    btn.setAttribute("target", "_blank");
    btn.appendChild(document.createTextNode("Add to cart"));
  }
  content2div.appendChild(btn);
  contentDiv.appendChild(content2div);
  newDiv.appendChild(contentDiv);
  document.getElementById("Product").appendChild(newDiv); //เอา div ใส่ product
});


const gameStore = document.querySelectorAll("#Game");
const searchclick = document.getElementById("searchbtn");
searchclick.addEventListener("click", () => {
  searchGame(document.getElementById("search").value)
}, false);

function searchGame(e) {
  const text = e.toLowerCase();
  for (let i = 0; i < gameStore.length; i++) {
    let gameName = gameStore[i].getAttribute("Name");
    if (gameName.toLowerCase().indexOf(text) > -1) {
      gameStore[i].style.display = "";
    } else {
      gameStore[i].style.display = "none";
    }
  }
}
