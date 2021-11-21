let theme = document.getElementsByClassName("theme-set")[0];
theme.addEventListener("click", select);

let count = `light`;;
loadTheme(getCookie(`theme`)); //dark

function loadTheme(fn){
  if(fn == `dark`){
    count = `dark`;
    return dark();
  }else{
    return light();
  }
  function light(){
    document.body.className = "bg-white text-dark";
    setCookie('theme', `light`, 1000)
}
  function dark(){
      document.body.className = "bg-secondary";
      setCookie('theme', `dark`, 1000)
  }
  
}

function select(){
    if(count == `dark`){
        count = `light`;
        return loadTheme(`light`);
    }
    if (count == `light`){
        count = `dark`;
        return loadTheme(`dark`);
    }
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