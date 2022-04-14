'use strict';

// 1
const hello = 'hello',
    own = 'own',
    com = 'com',
    ua = 'ua',
    a = 1,
    b = 10,
    c = -999,
    d = 123,
    e = 3.14,
    f = 2.7,
    g = 16,
    h = true,
    i = false;

// 2
console.log(hello);
console.log(own);
console.log(com);
console.log(ua);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);

// 3
// alert(hello);
// alert(own);
// alert(com);
// alert(ua);
// alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);
// alert(h);
// alert(i);

// 4
document.write(hello);
document.write(own);
document.write(com);
document.write(ua);
document.write(a);
document.write(b);
document.write(c);
document.write(d);
document.write(e);
document.write(f);
document.write(g);
document.write(h);
document.write(i);

// 5
const firstBook = {
    name: 'Will',
    amount: 300,
    genre: 'biography'
};

const secondBook = {
    name: 'Ekaterina',
    amount: 173,
    genre: 'novel',
    authors: {
        name: 'Jack',
        surname: 'Cope'
    }
};

// 6
const firstName = 'Zakharchuk',
    middleName = 'Mykolayovych',
    lastName = 'Roman';

const person = `${firstName} ${lastName} ${middleName}`;

console.log(person);

// const firstN = prompt('Your first name?', ''),
//     lastN = prompt('Your last name?', ''),
//     middleN = prompt('Your middle name?', '');
//
// console.log(`${firstN} ${lastN} ${middleN}`);

// 7
let aa = 100;
let bb = '100';
let cc = true;

console.log(typeof aa);
console.log(typeof bb);
console.log(typeof cc);

// 8
const books = [
    {
        name: 'Will',
        amount: 300,
        genre: 'biography',
        authors: {
            name: 'Will',
            surname: 'Smith'
        }
    },
    {
        name: 'Ekaterina',
        amount: 173,
        genre: 'novel',
        authors: {
            name: 'Jack',
            surname: 'Cope'
        }
    }
];

console.log(books[0]);
console.log(books[1]);

// 9
const height = 23;
const width = 10;

const s = height * width;

console.log(s);

// 10
const heightC = 10,
    widthC = 4;

const v = 3.14 * (widthC * widthC) * heightC;

console.log(v);

// 11

const n = 3,
    m = 4;

const k = Math.pow(n, 2) + Math.pow(m, 2);

console.log(k);

// 12

console.log(5 < 6);
console.log(5 > 6);
console.log(5 === 6);
console.log(5 >= 6);
console.log(10 == 10);
console.log(10 === 10);
console.log(10 < 10);
console.log(10 > 10);
console.log(10 !== 10);
console.log(123 !== 123);
console.log(123 === 123);