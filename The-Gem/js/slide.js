var slideIndex = 0;
show()

function show(){
showSlides(slideIndex);
setTimeout(show, 2000);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

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
  console.log(slideIndex)
  if (slideIndex < 1) {slideIndex = slides1.length}
  console.log(slideIndex)
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  slides1[slideIndex-1].style.display = "block";
  dots1[slideIndex-1].className += " active";
}

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
console.log(document.documentElement.scrollTop,document.body.scrollTop)
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
