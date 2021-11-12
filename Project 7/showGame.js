import { sampleData } from "./product.js";

// search แบบเก่ายาวเกินเลยทำสั้น ๆ innerhtml เอา
// let searchdiv1 = document.createElement("div");
// searchdiv1.setAttribute("class", "input-group");
// let searchdiv = document.createElement("div");
// searchdiv.setAttribute("class", "form-outline");

// let searchbar = document.createElement("input");
// searchbar.setAttribute("class", "form-control");
// searchbar.setAttribute("type", "text");
// searchbar.setAttribute("id", "search");
// searchbar.setAttribute("type", "text");
// searchbar.setAttribute("placeholder", "Search");
// searchbar.setAttribute("style", "max-width: 500px;");
// searchbar.setAttribute("style", "min-width: 100px;");

// let searchbtn = document.createElement("button");
// // searchbtn.appendChild(document.createTextNode("Search "));
// searchbtn.setAttribute("class", "btn btn-primary");
// searchbtn.setAttribute("type", "button");
// searchbtn.setAttribute("style", "width: 40px;");
// searchbtn.setAttribute("id", "searchbtn");

// let inbtn = document.createElement("i");
// inbtn.setAttribute("class", "fas fa-search");

// searchbtn.appendChild(inbtn);

// searchdiv.appendChild(searchbar);
// searchdiv1.appendChild(searchdiv);
// searchdiv1.appendChild(searchbtn);
// document.body.appendChild(header)


let contentProd = document.createElement("div")
contentProd.setAttribute("class", "container-xxl")


let listProd = document.createElement("div"); //create <div></div>
listProd.setAttribute("class", "row row-cols-lg-5 my-md-4");

sampleData.forEach((value) => {
  //create img
  let img = document.createElement("img");
  img.src = `${value.img}`;
  //img.className = "img-fluid"
  //img.width = "150"
  img.height = "250";
  img.setAttribute("class", "game-image card-img-top img-fluid");

  const contentDiv = document.createElement("div");
  contentDiv.appendChild(img); //ใส่รูปอิอิ
  contentDiv.setAttribute("class", "card-boxx card col-md-6 mx-auto mh-100 px-md-4 py-md-4 mx-md-4 my-md-4 bg-light");
  contentDiv.setAttribute("Name", value.Name);
  contentDiv.id = "Game";

  const content2divv = document.createElement("div");
  content2divv.setAttribute("class", "d-flex flex-column card-body ")
  content2divv.innerHTML = `
  <p class="card-text"><br>
  <span class = "game-id">ID : ${value.Id}</span>
  <br>
  <span class = "game-name">Name: ${value.Name}</span>
  <br>
  <span class = "game-price">Price: ${value.Price}</span>
  <br>
  <span class = "game-status">Status: ${value.Status}</span>
  `;

  // content2div.appendChild(document.createElement("br"));
  // content2div.appendChild(document.createTextNode(`ID: ${value.Id}`)); //ใส่ข้อมูลใน div ย่อย
  // content2div.appendChild(document.createElement("br"));
  // content2div.appendChild(document.createTextNode(`Name: ${value.Name}`)); //ใส่ข้อมูลใน div ย่อย
  // content2div.appendChild(document.createElement("br"));
  // content2div.appendChild(document.createTextNode(`Price: ${value.Price}`));
  // content2div.appendChild(document.createElement("br"));
  // content2div.appendChild(document.createTextNode(`Status: ${value.Status}`));
  // content2div.appendChild(document.createElement("br"));

  // class btn btn-primary
  // create button
  // class btn btn-danger
  // cursor: not-allowed
  let btn = document.createElement("a");
  if (value.Status == "Out of stock") {
    btn.setAttribute("class", "btn btn-danger cursor-not-allowed mt-auto");
    btn.setAttribute("style", "cursor: not-allowed");
    btn.appendChild(document.createTextNode("Out of stock"));
  } else {
    btn.setAttribute("class", "btn btn-primary shop-game-button mt-auto");
    btn.appendChild(document.createTextNode("Add to cart"));
  }
  content2divv.appendChild(btn);
  contentDiv.appendChild(content2divv);
  listProd.appendChild(contentDiv);
  contentProd.appendChild(listProd); //เอา div ใส่ product
});
  document.getElementById("Index").appendChild(contentProd)



