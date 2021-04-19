var mynav = document.getElementById("fixnav");
var mylogo = document.getElementsByClassName("logo-text")
var mylink = document.getElementById("item-header")
var mybutton = document.getElementById("myBtn");
var Menu = document.getElementById("menu");
var Close = document.getElementById("close");
var Cart = document.getElementById("cart");
var list = document.getElementById("list-menu")
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mynav.style.background = "white";
    mylink.style.border = "3px ridge black"
    mylogo[0].style.color = "black";
    mylogo[1].style.color = "black";
    Menu.style.background = "white"
    Close.style.background = "white"
    Cart.style.background = "white"
    Menu.style.color = "black"
    Close.style.color = "black"
    Cart.style.color = "black"
  } else {
    mybutton.style.display = "none";
    mynav.style.background = "#2c2e3d";
    mylink.style.border = "3px ridge white"
    mylogo[0].style.color = "white";
    mylogo[1].style.color = "white";
    Menu.style.background = "#2c2e3d";
    Close.style.background = "#2c2e3d";
    Cart.style.background = "#2c2e3d";
    Menu.style.color = "white"
    Close.style.color = "white"
    Cart.style.color = "white"
  }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

function OpenClick(){
  Menu.style.display = "none";
  Close.style.display = "block";
  list.style.display = "block";
};

function CloseClick(){
  Close.style.display = "none";
  Menu.style.display = "block";
  list.style.display = "none";
}
