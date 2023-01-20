'use strict';

// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//    console.log('Я сыт!');
// }

////////////////////////////////////////////////////

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'test');

// if (hamburger === 3 && cola === 1 && fries) {
//    console.log('Все сыты!');
// } else {
//    console.log('Мы уходим!');
// }

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
   console.log('Все довольны!');
} else {
   console.log('Мы уходим!');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

let maxReport, timReport, sashaReport, nickReport = 'done';

console.log(maxReport || timReport || sashaReport || nickReport);

//Задачки 
