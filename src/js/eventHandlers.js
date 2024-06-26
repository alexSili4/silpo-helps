import refs from './refs';

const isHiddenClassName = 'is-hidden';

refs.projectsLists.forEach((list) => {
  list.addEventListener('click', onProjectBtnClick);
});
refs.closeBtn.forEach((btn) => {
  btn.addEventListener('click', onCloseBtnClick);
});
refs.backdrop.forEach((item) => {
  item.addEventListener('click', onBackdropClick);
});

function onBackdropClick(e) {
  if (e.currentTarget !== e.target) {
    return;
  }

  e.currentTarget.parentNode.classList.add(isHiddenClassName);
  window.removeEventListener('keydown', hideProjectModalWin);
}

function onCloseBtnClick(e) {
  const targetModalWin = e.target.closest('.js-project-modal-win');
  targetModalWin.classList.add(isHiddenClassName);
}

function onProjectBtnClick(e) {
  const targetBtn = e.target.closest('.js-project-btn');

  if (!targetBtn) {
    return;
  }
  targetBtn.blur();
  const { project } = targetBtn.dataset;
  const targetProjectModalWin = document.querySelector(
    `.js-project-modal-win.${project}`
  );

  targetProjectModalWin.classList.remove(isHiddenClassName);

  const isHidden = targetProjectModalWin.classList.contains(isHiddenClassName);

  if (isHidden) {
    window.removeEventListener('keydown', hideProjectModalWin);
  } else {
    window.addEventListener('keydown', hideProjectModalWin);
  }
}

function hideProjectModalWin(e) {
  if (e.code === 'Escape') {
    const targetProjectModalWin = document.querySelector(
      `.js-project-modal-win:not(.${isHiddenClassName})`
    );

    targetProjectModalWin.classList.add(isHiddenClassName);
    window.removeEventListener('keydown', hideProjectModalWin);
  }
}
