let sampleData = [
  {
    Name: "Sarin",
    Price: 1500.0,
    img: "img/Sarin.jpg",
  },
  {
    Name: "Darun",
    Price: 1499.5,
    img: "img/Darun.jpg",
  },
  {
    Name: "Athiti",
    Price: 2400.0,
    img: "img/Athiti.jpg",
  },
  {
    Name: "Udomchai",
    Price: 2000.5,
    img: "img/Udomchai.jpg",
  },
  //ซ้ำอีกชุุด
  {
    Name: "Sarin",
    Price: 1500.0,
    img: "img/Sarin.jpg",
  },
  {
    Name: "Darun",
    Price: 1499.5,
    img: "img/Darun.jpg",
  },
  {
    Name: "Athiti",
    Price: 2400.0,
    img: "img/Athiti.jpg",
  },
  {
    Name: "Udomchai",
    Price: 2000.5,
    img: "img/Udomchai.jpg",
  },
];

// const div = document.getElementById("Product");
    let newDiv;
    let num = 0;

sampleData.forEach((value) => {
    if (num == 4){
        num = 0;
    }

    if (num == 0){
        newDiv = document.createElement("div"); //create <div></div>
        newDiv.setAttribute("class", "d-flex justify-content-evenly");
    }

    num = num + 1 ;
    //create img
    let img = document.createElement("img");
    img.src = `${value.img}`;
    img.width = 100;
    img.height = 101; 

    const contentDiv = document.createElement("div");
    contentDiv.setAttribute("class", "p-2 bd-highlight");
    contentDiv.appendChild(img) //ใส่รูปอิอิ
    contentDiv.appendChild(document.createElement("br"));
    contentDiv.appendChild(document.createTextNode(`Name: ${value.Name}`)); //ใส่ข้อมูลใน div ย่อย
    contentDiv.appendChild(document.createElement("br"));
    contentDiv.appendChild(document.createTextNode(`Price: ${value.Price}`));
    newDiv.appendChild(contentDiv);


    document.getElementById("Product").appendChild(newDiv); //เอา div ใส่ product
});
