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
});