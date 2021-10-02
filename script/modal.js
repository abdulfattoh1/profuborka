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