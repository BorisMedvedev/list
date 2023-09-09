import {createCard} from './createCard.js';
import {shuffleArray} from './shuffleArray.js';
const app = document.getElementById('app');
export const arr = [];

const btn = document.createElement('button');
btn.classList.add('site-btn');
btn.textContent = 'Начать игру';
app.append(btn);
export const render = () => {
  const count = prompt('сколько пар карт создать ?', 2);

  arr.length = 0;
  for (let i = 1; i <= count; i++) {
    const createCards1 = createCard(i);
    const createCards2 = createCard(i);
    arr.push(createCards1, createCards2);
  }
  for (const iterator of shuffleArray(arr)) {
    app.append(iterator);
  }
};

btn.addEventListener('click', () => {
  btn.remove();
  render();
});


