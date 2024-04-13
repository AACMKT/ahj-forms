import './css/popover.css';

export default class Popover {
  constructor(title, text, button) {
    this.title = title;
    this.text = text;
    this.button = button;
    document.addEventListener('DOMContentLoaded', this.createPopover());
  }

  createPopover() {
    const popover = document.createElement('div');
    popover.classList.add('popover');
    const title = document.createElement('div');
    title.classList.add('popover__title');
    const p = document.createElement('h3');
    p.style.fontSize = 'inherit';
    p.style.margin = '2px';
    p.innerText = this.title;
    const content = document.createElement('div');
    content.classList.add('popover__text');
    content.innerText = this.text;
    title.appendChild(p);
    popover.appendChild(title);
    popover.appendChild(content);
    popover.popover = 'manual';
    document.body.appendChild(popover);
  }

  attachPopover() {
    const popover = document.querySelector('.popover');
    this.button.popoverTargetElement = popover;
    popover.togglePopover();
    const { left, top } = this.button.getBoundingClientRect();
    setTimeout(() => {
      popover.style.left = `${left + this.button.offsetWidth / 2 - popover.offsetWidth / 2}px`;
      popover.style.top = `${top - popover.offsetHeight - 15}px`;
    }, 0);
  }
}
