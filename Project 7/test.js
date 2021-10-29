import {sampleData} from "./product.js";

// const div = document.getElementById("Product");
let newDiv;
let num = 0;

sampleData.forEach((value) => {
  if (num == 5) {
    num = 0;
  }

  if (num == 0) {
    newDiv = document.createElement("div"); //create <div></div>
    newDiv.setAttribute("class", "d-flex justify-content-center mw-100");
  }

  num = num + 1;
  //create img
  let img = document.createElement("img");
  img.src = `${value.img}`;
  //img.className = "img-fluid"
  img.width = "150"
  img.height = "150"


  const contentDiv = document.createElement("div");
  contentDiv.setAttribute("class", "shadow p-3 mb-5 bg-body rounded p-2 bd-highlight card mh-100 px-md-4 py-md-4 mx-md-4 my-md-4");
  contentDiv.appendChild(img); //ใส่รูปอิอิ
  contentDiv.appendChild(document.createElement("br"));
  contentDiv.appendChild(document.createTextNode(`ID: ${value.Id}`)); //ใส่ข้อมูลใน div ย่อย
  contentDiv.appendChild(document.createElement("br"));
  contentDiv.appendChild(document.createTextNode(`Name: ${value.Name}`)); //ใส่ข้อมูลใน div ย่อย
  contentDiv.appendChild(document.createElement("br"));
  contentDiv.appendChild(document.createTextNode(`Price: ${value.Price}`));

  if (typeof value.info !== "undefined"){
    contentDiv.appendChild(document.createElement("br"));
    contentDiv.appendChild(document.createTextNode(`Info: ${value.info}`))
  }else{
    contentDiv.appendChild(document.createElement("br"));
    contentDiv.appendChild(document.createTextNode(`Info: -`))
  }
  contentDiv.appendChild(document.createElement("br"));
  contentDiv.appendChild(document.createTextNode(`Status: ${value.Status}`))
  // class btn btn-primary
  // create button

  let btn = document.createElement("a");
  btn.setAttribute("class", "btn btn-primary mw-100");
  btn.setAttribute("href", "https://www.google.com");
  btn.setAttribute("target", "_blank");
  btn.appendChild(document.createTextNode("1 Night"))
  contentDiv.appendChild(btn);

  newDiv.appendChild(contentDiv);

  document.getElementById("Product").appendChild(newDiv); //เอา div ใส่ product
});
