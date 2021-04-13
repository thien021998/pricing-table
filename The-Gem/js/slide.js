var slideIndex = 0;
show();
function show(){
showSlides(slideIndex);
setTimeout(show, 2000);
};
function plusSlides(n) {
  showSlides(slideIndex += n);
};
function currentSlide(n) {
  showSlides(slideIndex = n);
};
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex = 1}
  if (n > slides1.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  if (n < 1) {slideIndex = slides1.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
  }
  for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    if (slideIndex > slides1.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}
  if (slideIndex < 1) {slideIndex = slides1.length}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  slides1[slideIndex-1].style.display = "block";
  dots1[slideIndex-1].className += " active";
};

// var mynav = document.getElementById("fixnav");
// window.scroll = function(){navcolor()};
// function navcolor(){
//   console.log(document.getElementById("fixnav"))
//   if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//     mynav.style.background = "white";
//     mynav.style.color = "black";
//     console.log(mynav.style.color)
//   } else {
//     mynav.style.background = "#2c2e3d";
//     mynav.style.color = "white"
//   }
// };

var mynav = document.getElementById("fixnav");
var mylogo = document.getElementsByClassName("logo-text")
var mylink = document.getElementById("item-header")
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  console.log(mylogo)
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
console.log(document.documentElement.scrollTop,document.body.scrollTop)
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

