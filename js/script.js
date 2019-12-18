/*Menu*/
const MenuButton = document.querySelector('.header-nav__toggle');
const MobileMenu = document.querySelector('.nav-list');
const MobileMenuOverlay = document.querySelector('header');

const PrizeBtnDesktop = document.querySelector('.footer-nav__item-link--prizes');
const PrizeBtnMobile = document.querySelector('.nav-item__link--prizes');
const PrizePopup = document.querySelector('.popup-prize');
const PrizePopupClose = document.querySelector('.popup-prize__close');

const HelpBtnDesktop = document.querySelector('.footer-nav__item-link--faq');
const HelpBtnMobile = document.querySelector('.nav-item__link--faq');
const HelpPopup = document.querySelector('.popup-help');
const HelpPopupClose = document.querySelector('.popup-help__close');

const SocialBtn = document.querySelector('.footer-contacts__btn');
const SocialList = document.querySelector('.social-list');
/*Variables for callback popup*/

document.querySelector('.header-nav__toggle').onclick = function(e){
	MenuButton.classList.toggle('open');
	MobileMenu.classList.toggle('active');
	MobileMenuOverlay.classList.toggle('active');
}

document.querySelector('.nav-item__link--prizes').onclick = function(e){
	PrizePopup.classList.add('active');
}

document.querySelector('.footer-nav__item-link--prizes').onclick = function(e){
	PrizePopup.classList.add('active');
}

document.querySelector('.popup-prize__close').onclick = function(e){
  PrizePopup.classList.remove('active');
}
//
document.querySelector('.nav-item__link--faq').onclick = function(e){
	HelpPopup.classList.add('active');
}

document.querySelector('.footer-nav__item-link--faq').onclick = function(e){
	HelpPopup.classList.add('active');
}

document.querySelector('.popup-help__close').onclick = function(e){
  HelpPopup.classList.remove('active');
}

document.querySelector('.footer-contacts__btn').onclick = function(e){
  SocialList.classList.toggle('active');
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
$(document).ready(function(){
  $(".popup-prize__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    dots: false,
    prevArrow: '<div class="prize-prev"></div>',
    nextArrow: '<div class="prize-next"></div>'
  });
});
