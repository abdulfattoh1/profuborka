const sliderImg = document.querySelectorAll('.performance__content_field img'),
      sliderField = document.querySelector('.performance__content_field'),
      next = document.querySelector('.right'),
      prev = document.querySelector('.left'),
      dotParent = document.querySelector('.performance__ul'),
      dots = document.querySelectorAll('.performance__ul_li');
let move = 0;
let timer;

for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
    changeSlide();
  });
}

timer = setInterval(timerGo, 4000);

function timerGo(params) {
  move++;
  changeSlide();
}

function stopInterval(params) {
  clearInterval(timer);
  timer = setInterval(timerGo, 4000);
}

function changeSlide() {
  if (move > sliderImg.length - 4) {
    move = 0;
  } else if (move < 0) {
    move = sliderImg.length - 4;
  }

  sliderField.style.transform = `translateX(${-move * 1295}px)`;
}

next.addEventListener('click', () => {
  move++;
  changeSlide();
  stopInterval();
});
prev.addEventListener('click', () => {
  move--;
  changeSlide();
  stopInterval();
});