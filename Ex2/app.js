"use strict"

// 1. Через умовну конструкцію
// const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
// let filteredNames = [];

const letters = 'АЕЄИІЇОУЮЯ';

// for (let i = 0; i < userNames.length; i++) {
//     const firstLetter = userNames[i][0];
//     if (letters.includes(firstLetter)) {
//         filteredNames.push(userNames[i]);
//     }
// }

// console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']


// 2.Через вбудований метод масивів
const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

let filteredNames = userNames.filter(name => letters.includes(name[0]));

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

