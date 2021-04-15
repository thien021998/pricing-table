var slideIndex = 0;

show();

function show() {
  showSlides(slideIndex,`mySlides`,`dot`);
  showSlides(slideIndex,`mySlides1`,`dot1`);
  setTimeout(show, 3000);
  slideIndex++;
};

function plusSlides(n,y,j) {
  showSlides(slideIndex +=n,y,j);
};

function currentSlide(n,y,j) {
  showSlides(slideIndex = n,y,j);
};

function showSlides(n,m,l) {
  var i;
  var slides = document.getElementsByClassName(m);
  var dots = document.getElementsByClassName(l);
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slideIndex > slides.length) { slideIndex = 1 }
  if (slideIndex < 1) { slideIndex = slides.length }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};
