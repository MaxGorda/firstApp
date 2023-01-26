'use strict';

let num = 80;

while (num <= 88) {
    console.log(num);
    num++;
}
////////////////////////////////////////
let numDo = 80;

do {
    console.log(numDo);
    numDo++;
}
while (numDo < 88);
////////////////////////////////////////
let numFor = 88

for (let i = 1; i < 10; i++) {
    if ( i === 6) {
        // break;
        continue;
    }
    console.log(i);
}
//Первое
for (let i = 1; i <= 10; i++) {
    
    console.log(i);
}
//Второе
for (let i = 20; i >= 10; i--) {
    if (i === 13) {
        break;
    }
  console.log(i);
}
//Третье
for (let i = 2; i <= 10; i++) {
    if (i === 3) {
        continue;
    } if (i === 5) {
        continue;
    } if (i === 7) {
        continue;
    } if (i === 9) {
        continue;
    } 
 console.log(i);
}
//Другой более правильный способ решения 3 задания
for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//Четвертое
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}