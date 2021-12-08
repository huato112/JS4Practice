import { cart } from "./cart.js";
let countPending = document.getElementById("countPendingItems");
let countdone = document.getElementById("countDoneItems");
let list = document.getElementById("buying-list");


let btnSubmit = document.getElementById("btn-submit")
btnSubmit.addEventListener("click", () => {
    let item = document.getElementById("item").value;
    let qty = document.getElementById("qty").value;
    cart.add(item, qty);
    reloadItems();
})
reloadItems();
function reloadItems(){
    list.textContent = "";
    countdone.textContent = 0;
    countPending.textContent = 0;
    let cartlist = cart.list();

    cartlist.forEach(element => {
        let li = document.createElement("li");
        list.appendChild(li);
        let unit = "";
        if(element.quantity == 1){
            unit = "unit";
        }else{
            unit = "units"
        }

        if(element.status == "done"){
            li.style = "text-decoration: line-through; color:grey"
            li.textContent = `${element.id}, ${element.quantity} ${unit}`;
            let img = document.createElement("img");
            li.appendChild(img)
            img.src = "images/done.svg";
            countdone.textContent++;
            
        } else {
            li.textContent = `${element.id}, ${element.quantity} ${unit}`;
            let img = document.createElement("img");
            li.appendChild(img)
            img.src = "images/pending.svg";
            img.addEventListener("click", () => {
                cart.status(element.id);
                reloadItems();
            })
            countPending.textContent++;
        }
    });
}

let btnClear = document.getElementById("btn-clear");
btnClear.addEventListener("click", () => {
    cart.remove();
    let item = document.getElementById("item").value = "";
    let qty = document.getElementById("qty").value = 1;
    countdone.textContent = 0;
    countPending.textContent = 0;
    list.textContent = ""
})