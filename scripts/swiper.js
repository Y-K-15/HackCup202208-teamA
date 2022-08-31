'use strict'

const mainSwiper = new Swiper('.main-swiper', {
  // Optional parameters
  direction: 'horizontal', 
  loop: true,
  speed: 1000,
  effect: 'slide',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
  
});