// about Slider
// Variables
const leftBtn = document.querySelector('.about_left'),
      rightBtn = document.querySelector('.about_right'),
      aboutField = document.querySelector('.about_content__field'),
      aboutFieldCard = document.querySelectorAll('.about_content__card');
let time,
    slide = 0; // functions

time = setInterval(slideTo, 4000);

function slideTo() {
  slide++;
  aboutSlide();
}

;

function killInterval(params) {
  clearInterval(time);
  time = setInterval(slideTo, 4000);
}

const aboutSlide = function () {
  if (slide > aboutFieldCard.length - 3) {
    slide = 0;
  } else if (slide < 0) {
    slide = aboutFieldCard.length - 3;
  }

  aboutField.style.transform = `translateX(${-slide * 432}px)`;
};

rightBtn.addEventListener('click', () => {
  slide++;
  aboutSlide();
  killInterval(); // console.log(rightBtn);
});
leftBtn.addEventListener('click', () => {
  slide--;
  aboutSlide();
  killInterval();
});