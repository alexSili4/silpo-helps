import refs from './refs';

refs.projectArmorBtn.forEach((btn) => {
  btn.addEventListener('click', onProjectArmorBtnClick);
});
refs.projectArtemsilBtn.forEach((btn) => {
  btn.addEventListener('click', onProjectArtemsilBtnClick);
});
refs.projectMoneyBtn.forEach((btn) => {
  btn.addEventListener('click', onProjectMoneyBtnClick);
});
refs.projectMessageBtn.forEach((btn) => {
  btn.addEventListener('click', onProjectMessageBtnClick);
});
refs.armorModalWinCloseBtn.addEventListener('click', onProjectArmorBtnClick);
refs.artemsilModalWinCloseBtn.addEventListener(
  'click',
  onProjectArtemsilBtnClick
);
refs.moneyModalWinCloseBtn.addEventListener('click', onProjectMoneyBtnClick);
refs.messageModalWinCloseBtn.addEventListener(
  'click',
  onProjectMessageBtnClick
);
refs.backdrop.forEach((item) => {
  item.addEventListener('click', onBackdropClick);
});

const isHiddenClassName = 'is-hidden';

function onProjectArmorBtnClick(e) {
  e.currentTarget.blur();
  toggleShowArmorModalWin();

  const isHidden =
    refs.projectArmorModalWin.classList.contains(isHiddenClassName);

  if (isHidden) {
    window.removeEventListener('keydown', hideProjectArmorModalWin);
  } else {
    window.addEventListener('keydown', hideProjectArmorModalWin);
  }
}

function hideProjectArmorModalWin(e) {
  if (e.code === 'Escape') {
    toggleShowArmorModalWin();
    window.removeEventListener('keydown', hideProjectArmorModalWin);
  }
}

function toggleShowArmorModalWin() {
  refs.projectArmorModalWin.classList.toggle(isHiddenClassName);
}

function onProjectArtemsilBtnClick(e) {
  e.currentTarget.blur();
  toggleShowArtemsilModalWin();

  const isHidden =
    refs.projectArtemsilModalWin.classList.contains(isHiddenClassName);

  if (isHidden) {
    window.removeEventListener('keydown', hideProjectArtemsilModalWin);
  } else {
    window.addEventListener('keydown', hideProjectArtemsilModalWin);
  }
}

function hideProjectArtemsilModalWin(e) {
  if (e.code === 'Escape') {
    toggleShowArtemsilModalWin();
    window.removeEventListener('keydown', hideProjectArtemsilModalWin);
  }
}

function toggleShowArtemsilModalWin() {
  refs.projectArtemsilModalWin.classList.toggle(isHiddenClassName);
}

function onProjectMoneyBtnClick(e) {
  e.currentTarget.blur();
  toggleShowMoneyModalWin();

  const isHidden =
    refs.projectMoneyModalWin.classList.contains(isHiddenClassName);

  if (isHidden) {
    window.removeEventListener('keydown', hideProjectMoneyModalWin);
  } else {
    window.addEventListener('keydown', hideProjectMoneyModalWin);
  }
}

function hideProjectMoneyModalWin(e) {
  if (e.code === 'Escape') {
    toggleShowMoneyModalWin();
    window.removeEventListener('keydown', hideProjectMoneyModalWin);
  }
}

function toggleShowMoneyModalWin() {
  refs.projectMoneyModalWin.classList.toggle(isHiddenClassName);
}

function onProjectMessageBtnClick(e) {
  e.currentTarget.blur();
  toggleShowMessageModalWin();

  const isHidden =
    refs.projectMessageModalWin.classList.contains(isHiddenClassName);

  if (isHidden) {
    window.removeEventListener('keydown', hideProjectMessageModalWin);
  } else {
    window.addEventListener('keydown', hideProjectMessageModalWin);
  }
}

function hideProjectMessageModalWin(e) {
  if (e.code === 'Escape') {
    toggleShowMessageModalWin();
    window.removeEventListener('keydown', hideProjectMessageModalWin);
  }
}

function toggleShowMessageModalWin() {
  refs.projectMessageModalWin.classList.toggle(isHiddenClassName);
}

function onBackdropClick(e) {
  if (e.currentTarget !== e.target) {
    return;
  }

  e.currentTarget.parentNode.classList.add(isHiddenClassName);
  window.removeEventListener('keydown', hideProjectArmorModalWin);
  window.removeEventListener('keydown', hideProjectArtemsilModalWin);
  window.removeEventListener('keydown', hideProjectMoneyModalWin);
  window.removeEventListener('keydown', hideProjectMessageModalWin);
}
