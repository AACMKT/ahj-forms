export default function createButton(element) {
  const btn = document.createElement('button');
  btn.classList.add('button');
  btn.innerHTML = 'Toggle popover';
  element.appendChild(btn);
  return btn;
}
