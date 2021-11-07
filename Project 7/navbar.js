let header = document.createElement("div");
  header.innerHTML = `
  <header class= "navbar navbar-expand-lg navbar-light bg-light">
  <nav class="container-xxl">
    <a class="navbar-brand" href="#"><img src= "https://cdn.iconscout.com/icon/premium/png-256-thumb/game-shop-3765597-3140495.png" height="30" class="d-inline-block align-top" alt=""> GameShop</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item active">
          <div class="input-group my-2 my-lg-0">
            <div class="form-outline">
              <input class="form-control mr-sm-2" type="search" id="search" placeholder="Search">
            </div>
            <button class="btn btn-outline-success my-2 my-sm-0" type="button" id="searchbtn">
              <i class="fas fa-search" aria-hidden="true"></i> Search
            </button>
          </div>
        </li>
      </ul>
      <div id = "cart"></div>
    </div>
  </nav></header>
  `

  document.getElementById("navbar").appendChild(header);