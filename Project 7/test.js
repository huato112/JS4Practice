import {sampleData} from "./product.js";

// const div = document.getElementById("Product");
let newDiv;
let num = 0;

sampleData.forEach((value) => {
  // if (num == 5) {
  //   num = 0;
  // }

  if (num == 0) {
    newDiv = document.createElement("div"); //create <div></div>
    newDiv.setAttribute("class", "row row-cols-2 row-cols-lg-5 g-2 g-lg-3");
    num = num + 1;
  }

  // num = num + 1;
  //create img
  let img = document.createElement("img");
  img.src = `${value.img}`;
  //img.className = "img-fluid"
  //img.width = "150"
  img.height = "250"


  const contentDiv = document.createElement("div");
  contentDiv.setAttribute("class", "col shadow bg-body rounded p-2 bd-highlight mh-100 px-md-4 py-md-4 mx-md-4 my-md-4");
  contentDiv.appendChild(img); //ใส่รูปอิอิ

  const content2div = document.createElement("div");
 
  content2div.appendChild(document.createElement("br"));
  content2div.appendChild(document.createTextNode(`ID: ${value.Id}`)); //ใส่ข้อมูลใน div ย่อย
  content2div.appendChild(document.createElement("br"));
  content2div.appendChild(document.createTextNode(`Name: ${value.Name}`)); //ใส่ข้อมูลใน div ย่อย
  content2div.appendChild(document.createElement("br"));
  content2div.appendChild(document.createTextNode(`Price: ${value.Price}`));
  content2div.appendChild(document.createElement("br"));
  content2div.appendChild(document.createTextNode(`Status: ${value.Status}`))
  content2div.appendChild(document.createElement("br"));
  // class btn btn-primary
  // create button
  // class btn btn-danger
  // cursor: not-allowed
  let btn = document.createElement("a");
  if (value.Status == "Out of stock"){
    
    btn.setAttribute("class", "btn btn-danger mw-100 cursor-not-allowed");
    btn.setAttribute("style", "cursor: not-allowed");
    btn.appendChild(document.createTextNode("Out of stock"))
  } else{
  btn.setAttribute("class", "btn btn-primary mw-100");
  btn.setAttribute("href", "https://www.google.com");
  btn.setAttribute("target", "_blank");
  btn.appendChild(document.createTextNode("Add to cart"))
}
  content2div.appendChild(btn);
  contentDiv.appendChild(content2div);
  newDiv.appendChild(contentDiv);

  document.getElementById("Product").appendChild(newDiv); //เอา div ใส่ product
});
