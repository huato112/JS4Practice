let theme = document.getElementsByClassName("theme-set")[0];
theme.addEventListener("click", select);

let countFromCookie = getCookie(`count`);
let count = 0;
 if (countFromCookie != ``){
    count = parseInt(countFromCookie);
    if(count == 1){
        dark();
    }
    else{
        light();
    }
    
    
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

let card = document.getElementsByClassName("card-boxx");
let table = document.getElementById("table")[0];

function light(){
    document.body.className = "bg-white text-dark";
    setCookie('count', count, 1000)
}

function dark(){
    document.body.className = "bg-secondary";
    setCookie('count', count, 1000)
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