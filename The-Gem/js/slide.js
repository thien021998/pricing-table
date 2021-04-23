var slideIndex = 0;

show();

function show() {
  showSlides(slideIndex, `mySlides`, `dot`);
  showSlides(slideIndex, `mySlides-Bottom`, `dot-bottom`);
  setTimeout(show, 3000);
  slideIndex++;
};

function plusSlides(number, slide, dot) {
  showSlides(slideIndex += number, slide, dot);
};

function currentSlide(number, slide, dot) {
  showSlides(slideIndex = number, slide, dot);
};

function showSlides(number, slide, dot) {
  var i;
  var slides = document.getElementsByClassName(slide);
  var dots = document.getElementsByClassName(dot);
  if (number > slides.length) { slideIndex = 1 }
  if (number < 1) { slideIndex = slides.length }
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
