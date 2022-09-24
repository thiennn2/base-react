let scrollPosition = 0;
const DISABLE_SCROLLING_CLASS = 'scroll-disabled';

export default {
  enable() {
    scrollPosition = window.pageYOffset;

    const body = document.querySelector('body');
    if (!body) return;
    body.classList.add(DISABLE_SCROLLING_CLASS);
    body.style.top = `-${scrollPosition}px`;
  },
  disable() {
    const body = document.querySelector('body');
    if (!body) return;
    body.classList.remove(DISABLE_SCROLLING_CLASS);
    body.style.removeProperty('top');

    window.scrollTo(0, scrollPosition);
  },
};