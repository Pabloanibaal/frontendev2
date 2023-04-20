$(document).ready(function(){
    $('.slider').slick({
    dots: true, // agregar puntos de paginacion
    autoplay: true, // establecer reproduccion automatica
    autoplaySpeed: 2000 // establecer velocidad de reproduccion en milisegundos
    });
    });

    var currentSlide = 0;
var slides = document.querySelectorAll('.carousel-item');
var btns = document.querySelectorAll('.carousel-btn');

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  }
  if (index >= slides.length) {
    index = 0;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[index].classList.add('active');
  currentSlide = index;
}

showSlide(currentSlide);

btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var direction = btn.classList.contains('left') ? -1 : 1;
    showSlide(currentSlide + direction);
  });
});