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

// Función modificar texto pistas

function insertClue(text) {
  textClue.innerHTML = text
}

// Función comparar nº aleatorio y nº usuaria

function compareNumbers() {
  const inputValue = parseInt(inputElement.value)
  console.log(number)
  if (inputValue === number) {
    insertClue('Has ganado campeona!! 🎉')
  } else if (inputValue > 100 || inputValue < 1) {
    insertClue('El número debe estar entre 1 y 100')
  } else if (inputValue > number) {
    insertClue('Demasiado alto ⬇️')
  } else if (inputValue < number) {
    insertClue('Demasiado bajo ⬆️')
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
