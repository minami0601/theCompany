const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new WOW().init();

jQuery('.drawer__icon').on('click', function(e){
  e.preventDefault();

  jQuery(this).toggleClass('open');
  jQuery('.drawer__content').toggleClass('open');
  jQuery('.drawer__bg').toggleClass('open');

})
jQuery('a[href^="#"]').on('click', function(){
  let header = jQuery('.header').innerHeight();
  let id = jQuery(this).attr('href');
  let position = 0;
  if (id != '#') {
    position = jQuery(id).offset().top - header;
  }
  jQuery('html,body').animate({
    scrollTop: position
  },
500);
})

$(window).on('scroll', function(){
  let top = $(this).scrollTop();
  if (100 < top) {
    $('.to-top').addClass('is-show')
  } else {
    $('.to-top').removeClass('is-show')
  }
});

$('.header ul li a').on('click', function(){
  $('.header ul li a').removeClass( 'active' );
  $(this).addClass( 'active' );
  return false;
});

$('.accordion__head').click(function() {
  $(this).next().slideToggle();
  $(this).children('.accordion__icon').toggleClass( 'is-open' );
});
