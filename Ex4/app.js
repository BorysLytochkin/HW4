"use strict"

const resultsArray = [1, 2, [3, [4]]];

let productOfArray = resultsArray.flat(Infinity).reduce((product, num) => product * num);

console.log(productOfArray); // 24