import * as cookieutil from "./cookieutil.js";

let theme = document.getElementsByClassName("theme-set")[0];
theme.addEventListener("click", select);

let color = `light`; //กำหนดค่า default สีเป็นสีขาว
loadTheme(cookieutil.getCookie(`theme`)); //dark

function loadTheme(fn){
  if(fn == `dark`){
    color = `dark`;
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
    if(color == `dark`){
      color = `light`;
        return loadTheme(`light`);
    }
    if (color == `light`){
        color = `dark`;
        return loadTheme(`dark`);
    }
}
