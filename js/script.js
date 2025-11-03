var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  // Add this CSS module parameter
  on: {
    init: function() {
      // Change pagination color via JS
      const bullets = document.querySelectorAll('.swiper-pagination-bullet');
      bullets.forEach(bullet => {
        bullet.style.background = '#181c14';
      });
    }
  }
});