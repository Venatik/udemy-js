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

// const firstName = "Stefan";
// const job = "Dude";
// const birthYear = 1989;
// const year = 2023;

// const stefan = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "."

// const newStefan = `I'm ${firstName}, a ${year - birthYear} year old ${job}.` // Template literal

// console.log(stefan);
// console.log(newStefan);

// console.log(`String with
// multiple
// lines.`)

// let age = 16;

// if (age >= 18) {
//     console.log("Stefan can start driving. 🏎️")
// } else {
//     let yearsLeft = 18 - age;
//     console.log(`Stefan is too young to drive. Wait another ${yearsLeft} years. :-)`)
// }

// let birthYear = 1989;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// // ==========type conversion==========
// const inputYear = "1989";
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18); // 1989 is a string, this is concatenation
// console.log(Number(inputYear) + 18);

// console.log(Number("Stefan"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // ==========type coercion==========
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2"); // both are converted to numbers so the * operator can work.

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// ==========5 falsy values: 0, "", undefined, null, NaN==========
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Stefan"));
// console.log(Boolean({}));

// const money = 0;
// if (money) { // here money is converted to a boolean, so we get the else result
//     console.log("Don't spend it all.")
// } else {
//     console.log("You should get a job.")
// }

// let height;
// if (height) {
//     console.log("Yay! Height is defined!");
// } else {
//     console.log("Height is UNDEFINED!");
// }

// const age = 18; // if we use "18" only the loose operator is true
// if (age === 18) {
//     console.log("You just became an adult! (strict)");
// }

// if (age == 18) {
//     console.log("You just became an adult! (loose)");
// }

// const favorite = Number(prompt("What is your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite == 4) { // "23" = 23
//     console.log("Cool!");
// }

// if (favorite === 4) { // Because we wrapped this in the Number function, now this also works
//     console.log("Cool!");
// } else if (favorite === 7) {
//     console.log("7 is also a decent number.");
// } else {
//     console.log("Number is not 4 or 7 :(");
// }

// if (favorite !== 4) {
//     console.log("Why not choose 4?");
// }

// ==========Logical operators==========

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND operator
console.log(hasDriversLicense || hasGoodVision); // OR operator
console.log(!hasDriversLicense); // NOT operator

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log(`Sarah is able to drive.`)
// } else {
//     console.log(`Sarah is not able to drive.`)
// }

// if (hasDriversLicense && hasGoodVision) { // Same as above. Comparison can be made directly in the function.
//     console.log(`Sarah is able to drive.`)
// } else {
//     console.log(`Sarah is not able to drive.`)
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive.`)
// } else {
//     console.log(`Sarah is not able to drive.`)
// }

// ==========The SWITCH statement==========
// const day = "saturday";

// switch (day) {
//     case "monday": // day === "monday"
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case "tuesday":
//         console.log("Prepare theory videos");
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("Write code examples");
//         break;
//     case "friday":
//         console.log("Record videos");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend :)");
//         break;
//     default:
//         console.log("Not a valid day.");
// }

// // Same example as above, but with IF/ELSE
// if (day === "monday") {
//     console.log("Plan course structure");
// } else if (day === "tuesday") {
//     console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//     console.log("Write code examples");
// } else if (day === "friday") {
//     console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//     console.log("Enjoy the weekend!");
// } else {
//     console.log("Not a valid day.");
// }

// ==========Statements and Expressions==========
// 3 + 4 // expression
// 1989 // expression
// true && false && !false // expression

// // Expressions are the words that make up sentences. Statements are the sentences themselves.
// if (23 > 10) {
//     let str = "23 is bigger"; // This is a statement
// }

// console.log(`I'am ${2023 - 1989} years old.`); // This is an expression

// ==========The Conditional (Ternary) Operator==========
const age = 18;
// age >= 18 ? console.log("I like to drink beer.") : console.log("I like to drink water.");

const drink = age >= 18 ? "wine" : "water"; // This is an expression, so we can store it in a variable
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}.`);

// Ternary operator is not a replacement of if/else. Nice to use in template literals where if/else can't be used.