// ==============VALUES AND VARIABLES==============
/* let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "SysAdmin";
let myCurrentJob = "none";

console.log(myFirstJob); */

// ==============DATA TYPES==============
/* true;
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);
// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof "Stefan");

javascriptIsFun = "YES!"; // reassigning a variable
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); */

// ==============LET, CONST and VAR==============
// let age = 30;
// age = 31;

// const birthYear = 1989;
// // birthYear = 1990; const cannot be redeclared

// var job = "Programmer";
// job = "Teacher";

// lastName = "Trajkovski"; // variables don't HAVE to be declared
// console.log(lastName);

// ==============MATH Operators==============
// const now = 2023;
// const ageStefan = now - 1989;
// const ageSarah = now - 1993;
// console.log(ageStefan, ageSarah);

// console.log(ageStefan * 2, ageStefan / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Stefan";
// const lastName = "Trajkovski";
// console.log(firstName + " " + lastName);

// // ==============ASSIGNMENT Operators==============
// let x = 10 + 5; // 15
// x += 10; // This is: x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

// // ==============COMPARISON Operators==============
// console.log(ageStefan > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 35); // These results would usually be stored in variables

// const isFullAge = ageSarah >= 35;

// console.log(now - 1989 > now - 1993); // Comparison is done at the end

// const now = 2023;
// const ageStefan = now - 1989;
// const ageSarah = now - 1993;
// console.log(now - 1989 > now - 1993); // - has higher precedence than >

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // In this example - has higher precedence than =
// console.log(x, y);

// const averageAgeStefanSarah = (ageStefan + ageSarah) / 2;
// console.log(ageSarah, ageStefan, averageAgeStefanSarah);

const firstName = "Stefan";
const job = "Dude";
const birthYear = 1989;
const year = 2023;

const stefan = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "."

const newStefan = `I'm ${firstName}, a ${year - birthYear} year old ${job}.` // Template literal

console.log(stefan);
console.log(newStefan);

console.log(`String with
multiple
lines.`)