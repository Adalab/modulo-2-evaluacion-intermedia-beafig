'use strict'

// Declarar variables con los elementos del HTML

const inputElement = document.querySelector('.js-input');
const btn = document.querySelector('.js-btn');
const textClue = document.querySelector('.js-clue');
const textCount = document.querySelector('.js-count');

//Función número aleatorio

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const number = getRandomNumber(100);

// Función comparar nº aleatorio y nº usuaria

function compareNumbers() {
  const inputValue = parseInt(inputElement.value)
  console.log(number)
  if (inputValue === number) {
    textClue.innerHTML = 'Has ganado campeona!! 🎉'
  } else if (inputValue > 100 || inputValue < 1) {
    textClue.innerHTML = 'El número debe estar entre 1 y 100'
  } else if (inputValue > number) {
    textClue.innerHTML = 'Demasiado alto ⬇️'
  } else if (inputValue < number) {
    textClue.innerHTML = 'Demasiado bajo ⬆️'
  }
}
// Función contador

let count = 1;
function counter() {
  return textCount.innerHTML = `Número de intentos: ${count++}`
}

// Función manejadora del evento

function handleRandomNumber(event) {
  event.preventDefault()
  compareNumbers()
  counter()
}

// Evento: click en botón

btn.addEventListener('click', handleRandomNumber)
