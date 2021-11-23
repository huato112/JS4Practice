import * as cookieutil from "./cookieutil.js";

let theme = document.getElementsByClassName("theme-set")[0];
theme.addEventListener("click", select);

let count = `light`;;
loadTheme(cookieutil.getCookie(`theme`)); //dark

function loadTheme(fn){
  if(fn == `dark`){
    count = `dark`;
    return dark();
  }else{
    return light();
  }
  function light(){
    document.body.className = "bg-white text-dark";
    cookieutil.setCookie('theme', `light`, 1000)
}
  function dark(){
      document.body.className = "bg-secondary";
      cookieutil.setCookie('theme', `dark`, 1000)
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
