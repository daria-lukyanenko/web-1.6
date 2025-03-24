const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  loop: true,
  speed: 600,
  effect: 'slide',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
