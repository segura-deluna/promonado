// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// Initialize Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,

  breakpoints: {
    // 1200: {
    //   slidesPerView: 'auto',
    // },
    431: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Выпадашка пункта меню
import showDropdown from './modules/dropdown.js';
showDropdown();

// Мобильное меню
import mobileNav from './modules/mobile-nav.js';
mobileNav();
