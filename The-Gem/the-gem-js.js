var slideIndex = 0;
var slideIndex1 = 1;
showSlides1(slideIndex1);
showSlides();
showSlides2()
function currentSlide(n) {
  showSlides1(slideIndex1 = n);
}
function currentSlide1(n) {
  showSlides3(slideIndex1 = n);
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  console.log("sli1",slideIndex)
  console.log("length",slides.length)
  if (slideIndex > slides.length) {
    slideIndex = 1
    console.log("sli2",slideIndex)
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  console.log(slideIndex)
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  console.log("sli1",slideIndex)
  console.log("length",slides.length)
  if (slideIndex > slides.length) {
    slideIndex = 1
    console.log("sli2",slideIndex)
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  console.log(slideIndex)
  setTimeout(showSlides2, 2000); // Change image every 2 seconds
}
function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
}
function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
}
