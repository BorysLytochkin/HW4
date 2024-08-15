"use strict"

const currentMaxValue = 4589;
let reverseMaxValue;

reverseMaxValue = currentMaxValue.toString().split('').reverse().join('') - 0;

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'