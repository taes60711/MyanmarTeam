const menuBar = document.getElementById("menu-bar");
const navBar = document.querySelector(".navbar");

menuBar.addEventListener("click", (e) =>{
  e.stopPropagation();
  navBar.classList.toggle("active");
})

window.addEventListener("click", (e) =>{
  if(!e.target.closest("#menu-bar") && !e.target.closest(".navbar")){
    navBar.classList.remove("active");
  }
})
window.addEventListener("scroll", ()=>{
  navBar.classList.remove("active");
})

const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navBar.classList.remove("active");
      });
    });

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