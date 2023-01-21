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