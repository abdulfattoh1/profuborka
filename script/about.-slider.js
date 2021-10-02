// about Slider
// Variables
const leftBtn = document.querySelector('.about_left'),
      rightBtn = document.querySelector('.about_right'),
      aboutField = document.querySelector('.about_content__field'),
      aboutFieldCard = document.querySelectorAll('.about_content__card');
let timer,
    slide = 0; // functions

const aboutSlide = function () {
  if (slide > aboutFieldCard.length - 1) {
    slide = 0;
  } else if (slide < 0) {
    slide = aboutFieldCard.length - 1;
  }

  aboutField.style.transform = `translateX(${-slide * 432}px)`;
};

rightBtn.addEventListener('click', () => {
  slide++;
  aboutSlide();
});