const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const bgColor = document.querySelector('.color');

btn.addEventListener('click', onClick);

function onClick(event) {
  let randColor = getRandomHexColor();
  body.style.backgroundColor = randColor;
  bgColor.textContent = randColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
