var mynav = document.getElementById("fixnav");
var mylogo = document.getElementsByClassName("logo-text")
var mylink = document.getElementById("item-header")
var mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mynav.style.background = "white";
    mylink.style.border = "3px ridge black"
    mylogo[0].style.color = "black";
    mylogo[0].style.color = "black";
  } else {
    mybutton.style.display = "none";
    mynav.style.background = "#2c2e3d";
    mylink.style.border = "3px ridge white"
    mylogo[0].style.color = "white";
  }
};
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

