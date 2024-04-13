import Popover from '../popover/popover';
import createButton from './button';
import { title, text } from './popover-content';

const element = document.querySelector('.container');
const btn = createButton(element);
const popover = new Popover(title, text, btn);

btn.addEventListener('click', (e) => {
  e.preventDefault();
  popover.attachPopover();
});
