let cart = document.getElementById("cart");
cart.innerHTML = `<a href="#table" class="btn btn-dark position-relative"><i class="fas fa-shopping-cart"></i> Cart<span class="cart-header position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span></a>`;

//โครงหน้า ตารางแสดง cart
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