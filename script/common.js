//** ----Slider---- */
const slider = () => {
  // Variabls
  const next = document.querySelector('.icon-right'),
        prev = document.querySelector('.icon-left'),
        sliderWrapper = document.querySelector('.slider__wrapper'),
        slidesField = document.querySelector('.slider__item'),
        sliedrList = document.querySelectorAll('.slider__item_list'),
        total = document.querySelector("#total"),
        current = document.querySelector("#current");
  let offset = 0;
  let slideIndex = 1;
  let timer = setInterval(timerGo, 4000);

  function timerGo(params) {
    offset++;
    changeContent();
    changeNextIndex();
    changeTotal();
  }

  function stopInterval(params) {
    clearInterval(timer);
    timer = setInterval(timerGo, 4000);
  } // change styles


  sliderWrapper.style.overflow = 'hidden';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.6s all'; // functions

  function changeTotal() {
    if (sliedrList.length < 10) {
      total.textContent = `0${sliedrList.length - 3}`;
    } else {
      total.textContent = sliedrList.length - 3;
    }
  }

  function changeContent() {
    if (offset > sliedrList.length - 4) {
      offset = 0;
    } else if (offset < 0) {
      offset = sliedrList.length - 4;
    }

    slidesField.style.transform = `translateX(${-offset * 640}px)`;
  }

  function changeNextIndex() {
    if (slideIndex == sliedrList.length - 3) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (sliedrList.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

  function changePrevIndex() {
    if (slideIndex == 1) {
      slideIndex = sliedrList.length - 3;
    } else {
      slideIndex--;
    }

    if (sliedrList.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

  function plusSlide(n) {
    changeContent(offset += n);
  } // Events


  next.addEventListener('click', () => {
    plusSlide(1);
    changeNextIndex();
    stopInterval();
  });
  prev.addEventListener('click', () => {
    plusSlide(-1);
    changePrevIndex();
    stopInterval();
  });
  changeTotal();
};

slider(); // ================= Подключения ==========================
// DON'T TOUCH 
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
const modal = document.querySelector('.modal'),
      modalOpen = document.querySelector('.history__desBottom_btn');

function showModal() {
  modal.classList.remove('hide');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function hideModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

modalOpen.addEventListener('click', showModal);
modal.addEventListener('click', e => {
  if (e.target === modal || e.target.classList.contains('modal__close') || e.target.classList.contains('modal__dialog')) {
    hideModal();
  }
});
document.addEventListener('keydown', e => {
  if (e.code === 'Escape' && modal.classList.contains('show')) {
    hideModal();
  }
});
const regModal = document.querySelector('[data-modal'),
      modalBnt = document.querySelector('.h-content__href');

function showReg() {
  regModal.classList.remove('v-hide');
  regModal.classList.add('v-show');
  document.body.style.overflow = 'hidden';
}

function hideReg() {
  regModal.classList.add('v-hide');
  regModal.classList.remove('v-show');
  document.body.style.overflow = '';
}

modalBnt.addEventListener('click', e => {
  e.preventDefault();
  showReg();
});
regModal.addEventListener('click', e => {
  if (e.target === regModal || e.target.hasAttribute(['reg-close'])) {
    hideReg();
  }
}); // =============================================================================