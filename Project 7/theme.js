let theme = document.getElementsByClassName("theme-set")[0];
theme.addEventListener("click", select);

let countCookie = getCookie(`count`);
let count = 0;
if (countCookie != ``){
    count = parseInt(countCookie);
    if (count == 0){count = 1}
    else if (count == 1){count = 0}
    unsetCookie('count');
    select();
    
}

function select(){
    if(count == 0){
        count = 1;
        dark();
        return true;
    }
    if (count == 1){
        count = 0;
        light();
        return true;
    }
}

let card = document.getElementsByClassName("card col-md-6 mx-auto mh-100 px-md-4 py-md-4 mx-md-4 my-md-4");
let table = document.getElementsByClassName("container-xxl table table-hover cart-game")[0];

function light(){
    document.body.className = "bg-white text-dark";
    let a = document.getElementsByClassName("navbar navbar-expand-lg navbar-dark")[0];
    a.className = "navbar navbar-expand-lg navbar-light"
    for(let i=0; i< card.length; i++){
        card[i].className = "card col-md-6 mx-auto mh-100 px-md-4 py-md-4 mx-md-4 my-md-4 bg-light"
    }
    table.className = "container-xxl table table-hover cart-game"
    setCookie(`count`, count);
}

function dark(){
    document.body.className = "bg-dark text-white";
    let a = document.getElementsByClassName("navbar navbar-expand-lg navbar-light")[0];
    a.className = "navbar navbar-expand-lg navbar-dark"
    for(let i=0; i< card.length; i++){
        card[i].className = "card col-md-6 mx-auto mh-100 px-md-4 py-md-4 mx-md-4 my-md-4 bg-secondary"
    }
    table.className = "container-xxl table table-hover cart-game text-white"
    setCookie('count', count);
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function unsetCookie(cname) {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }