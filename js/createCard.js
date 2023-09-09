import {arr, render} from './main.js';

let card1 = null;
let card2 = null;
export const createCard = (index) => {
  const cardContainer = document.createElement('li');
  const card = document.createElement('article');
  const cardFront = document.createElement('div');
  const cardFrontSpan = document.createElement('span');
  const cardBack = document.createElement('div');
  const cardBackSpan = document.createElement('span');


  cardContainer.classList.add('card-container');
  card.classList.add('card');
  cardFront.classList.add('card-front');
  cardFrontSpan.classList.add('card__span');
  cardBack.classList.add('card-back');
  cardBackSpan.classList.add('card__span');
  cardBackSpan.textContent = index;

  cardFront.append(cardFrontSpan);
  cardBack.append(cardBackSpan);
  card.append(cardFront, cardBack);
  cardContainer.append(card);


  cardContainer.addEventListener('click', () => {
    if (cardContainer.classList.contains('active') || cardContainer.classList.contains('def')) {
      return;
    }
    cardContainer.classList.add('active');
    if (card1 !== null && card2 !== null) {
      card1.classList.remove('active');
      card2.classList.remove('active');
      card1 = null;
      card2 = null;
    }


    if (card1 === null) {
      card1 = cardContainer;
    } else {
      card2 = cardContainer;
    }


    if (card1 !== null && card2 !== null) {
      const num1 = card1.textContent;
      const num2 = card2.textContent;


      if (num1 === num2) {
        card1.classList.add('def');
        card2.classList.add('def');
      }
    }

    if (arr.length === document.querySelectorAll('.def').length) {
      setTimeout(() => {
        alert('конец игре');

        const app = document.getElementById('app');
        app.innerHTML = '';
        alert('еще ?');
        render();
      }, 500);
    }
  });

  return cardContainer;
};


