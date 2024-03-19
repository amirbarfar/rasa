// menu

let iconOpen = document.querySelector(".open")
let iconClose = document.querySelector(".close")
let menuMobile = document.querySelector(".container-mobile")

iconOpen.addEventListener("click", open)
iconClose.addEventListener("click", close)

function open() {
  menuMobile.style.right = "0"
  menuMobile.style.transition = "all 0.2s linear";
}
function close() {
  menuMobile.style.right = "-250px"
}



const swiperEl = document.querySelector('swiper-container');

// swiper parameters
const swiperParams = {
  slidesPerView: 4,
  autoplay: {
    delay: 3000,
  },
  keyboard: {
    enable: true
  },
  crossFade: true,
  loop: true,
  navigation: {
    enable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,

    },
    1024: {
      slidesPerView: 5,

    },
  },
};

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl, swiperParams);

// and now initialize it
swiperEl.initialize();

document.querySelectorAll("img").forEach(img => {
  img.setAttribute("draggable", "false");
})