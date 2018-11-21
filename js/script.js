function Selected(a) {
  var label = a.value;
    if (label=="enter") {
      (document.getElementById("form-enter").style.display="block") &&
      (document.getElementById("agreement").style.display="none") &&
      (document.getElementById("enter-btn").style.display="block") &&
      (document.getElementById("register-btn").style.display="none");
    } else {
      (document.getElementById("form-enter").style.display="none") &&
      (document.getElementById("agreement").style.display="block") &&
      (document.getElementById("register-btn").style.display="block") &&
      (document.getElementById("enter-btn").style.display="none");
  } if (label=="register") {
      document.getElementById("form-register").style.display="block";
  } else {
      document.getElementById("form-register").style.display="none";
  }
}

$('.next-1').on('click', function() {
  $('.choose-slider').slick('slickNext');
});

$('.prev-1').on('click', function() {
  $('.choose-slider').slick('slickPrev');
});

$(document).ready(function(){
  $('.choose-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: true,
    arrows: false,
    asNavFor: '.title-slider',
  });
});

/*Измененный скрипт перелистывания слайдов*/

$(document).ready(function() {
  $(".title-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    touchMove: false,
    swipe: false,
    fade: true,
    arrows: false,
  });
});
