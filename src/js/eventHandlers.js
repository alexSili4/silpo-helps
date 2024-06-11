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

function onProjectArmorBtnClick() {
  refs.projectArmorModalWin.classList.toggle(isHiddenClassName);
}

function onProjectArtemsilBtnClick() {
  refs.projectArtemsilModalWin.classList.toggle(isHiddenClassName);
}

function onProjectMoneyBtnClick() {
  refs.projectMoneyModalWin.classList.toggle(isHiddenClassName);
}

function onProjectMessageBtnClick() {
  refs.projectMessageModalWin.classList.toggle(isHiddenClassName);
}

function onBackdropClick(e) {
  if (e.currentTarget !== e.target) {
    return;
  }

  e.currentTarget.classList.add(isHiddenClassName);
}
