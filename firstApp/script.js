'use strict';

 if (4 == 9) {
    console.log('Bingo!');
 } else {
    console.log('Error!');
 }

///////////////////////////////////////////

 const num = 100;

 if (num < 49){
    console.log('Nope!');
 } else if (num > 100) {
    console.log('Its too much bro!')
 } else {
    console.log ('You are right!')
 }

///////////////////////////////////////////

 const num2 = 51;

 (num2 === 50) ? console.log ('You are right!') : console.log('Nope!');

 ///////////////////////////////////////////

 const num3 = 51

 switch (num3) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Получилось');
        break;
    default:
        console.log('Попробуй еще разок');
        break;
 }
 
 