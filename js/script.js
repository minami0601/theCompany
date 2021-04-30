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
