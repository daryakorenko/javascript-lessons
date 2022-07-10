'use-strict'

const title = document.getElementById('title');

const myAge = 1; // Number
const myName = 'Daruja'; // String
const isGirl = true; // Boolean
const avocadoCount = null;

const catNames = ['Murisa', 'Mijuki'];
const mainCat = {
  name: 'Murisa',
  age: 7,
};

// let dogName = 'Dmitry'; // declaration / объявление
// dogName = 'Bobik'; // statement / утверждение, инструкция
// console.log(dogName);
// console.log(`Привет, меня зовут ${dogName}`);

// Простой способ объявить функцию
function pogladitKota(catName, catBreed) {
  // console.log(`Мою кошку зовут ${catName}! И она - ${catBreed} 🐱`);
  return `Мою кошку зовут ${catName}! И она - ${catBreed} 🐱`;
  // const text = `Мою кошку зовут ${catName}! И она - ${catBreed} 🐱`;
  // document.getElementById('title').innerHTML = text;
}

const myCatInfo = pogladitKota('Мурыса', 'турецкая булка');

function showMyCatInfo() {
  document.getElementById('forms').innerHTML = myCatInfo;
}

// Еще один способ объявить функцию
const pogladitSobaku = function () {
  console.log('Кто хороший пёс!');
};

// Вызываем функцию
// pogladitSobaku();
// pogladitKota('Мурыса', 'турецкая ангора');
// pogladitKota('Бука', 'монстр с изнанки');
