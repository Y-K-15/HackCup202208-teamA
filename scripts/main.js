'use strict'

window.addEventListener('load', function () {
  const button = document.querySelector('.p-header__inner__toggle-menu-button');
  const menu = document.querySelector('.p-header__inner__site-menu');
  button.addEventListener('click', function () {
      if (menu.classList.contains('is-show')) {
          menu.classList.remove('is-show');
      }
      else {
          menu.classList.add('is-show');
      }
  });
});