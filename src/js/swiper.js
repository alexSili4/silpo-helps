import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const projectsSlider = new Swiper('.projects-slider', {
  modules: [Navigation],
  direction: 'horizontal',
  spaceBetween: -23,
  speed: 800,
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.projects-slider-btn-next',
    prevEl: '.projects-slider-btn-prev',
  },
});
