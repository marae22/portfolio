
document.querySelectorAll(".sketch-container").forEach(function(slide){
  slide.onscroll = function(){
    // console.log(slide.width)
  }
})
var containers = Array.from(document.getElementsByClassName('slideshow-container'));
var slideIndex = 0;
containers.forEach(function(container){
  showSlides(slideIndex, container.id)
});

function plusSlides(n, id) {
  showSlides(slideIndex += n, id);
}

function currentSlide(n, id) {
  showSlides(slideIndex = n, id);
}

function showSlides(n,id) {
  var i;
  var container = document.getElementById(id);
  var slides = container.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
