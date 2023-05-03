const menu = document.querySelector(".menu")
const navbar = document.querySelector(".navbar")

menu.addEventListener('click', () =>{
    navbar.classList.toggle("change")
});

var swiper = new swiper(".newarrivals", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });