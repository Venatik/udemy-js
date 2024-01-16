"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio"; // reserved word
// const private = 534; // reserved word

// ========= Functions ===========

// function logger() {
//     console.log("My name is Stefan.");
// }

// // Calling / running / invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(2, 4);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(4, 4);
// console.log(appleOrangeJuice);

// // ============ Function declaration ============
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1989);
// console.log(age1);

// // ============ Function expression ============
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1989);
// console.log(age1, age2);

// // ============ Arrow Function ============
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1989);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1989, "Stefan"));
// console.log(yearsUntilRetirement(1994, "Marta"));

// ============ Functions calling other functions ============

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     }
//     else {
//         console.log(`${firstName} has already retired!`);
//         return -1;
//     }
//     // return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1989, "Stefan"));
// console.log(yearsUntilRetirement(1970, "Mike"));


// ============ Introduction to Arrays ============

// const friend1 = "Mike";
// const friend2 = "Bob";
// const friend3 = "Pepe";

// const friends = ["Mike", "Bob", "Pepe"];
// console.log(friends);

// // const years = new Array(1991, 1989, 1984, 2008, 2020);

// console.log(friends[1]); // log index 1
// console.log(friends.length); // log number of items in array, this is not zero-based like the index
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);
// // friends = ["bob", "alice"]; // Doesn't work.

// const firstName = "Stefan";
// const stefan = [firstName, "Trajkovski", 2024 - 1989, "Dev", friends];
// console.log(stefan);
// console.log(stefan.length);

// // Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1969, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
// console.log(ages);

// ============ Basic Array Operations (Methods) ============

// Add elements to array
/* const friends = ["Mike", "Bob", "Pepe"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements to array
friends.pop(); // Last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First element
console.log(friends);

console.log(friends.indexOf("Bob"));
console.log(friends.indexOf("Jay"));

console.log(friends.includes("Stefan"));
console.log(friends.includes("Bob"));

if (friends.includes("Peter")) {
    console.log("You have a friend called Peter.");
} else {
    console.log("You don't have a friend called Peter.");
} */

// ============ Introduction to Objects ============

/* const stefanArray = [
    "Stefan",
    "Trajkovski",
    2023 - 1989,
    "Dev"
];

const stefan = {
    firstName: "Stefan",
    lastName: "Trajkovski",
    age: 2023 - 1989,
    job: "Student",
    friends: ["Mike", "Bob", "Sarah"]
}; */

/* const stefan = {
    firstName: "Stefan",
    lastName: "Trajkovski",
    age: 2024 - 1989,
    job: "Student",
    friends: ["Mike", "Bob", "Sarah"]
};
console.log(stefan);

console.log(stefan.lastName);
console.log(stefan["lastName"]);

const nameKey = "Name";

console.log(stefan["first" + nameKey]);
console.log(stefan["last" + nameKey]);

const interestedIn = prompt("What do you want to know about Stefan? Choose between firstName, lastName, age and job.")

if (stefan[interestedIn]) {
    console.log(stefan[interestedIn]);
} else {
    console.log("Invalid request. Choose between firstName, lastName, age and job.");
}

stefan.location = "Skopje";
stefan["homeTown"] = "Kumanovo";
console.log(stefan);

// Challenge

console.log(`${stefan.firstName} is from ${stefan.homeTown} and his job is ${stefan.job}`);
console.log(`${stefan.firstName} has ${stefan.friends.length} friends and his best friend is ${stefan.friends[1]}.`);
*/

// ============ Object Methods ============

/* const stefan = {
    firstName: "Stefan",
    lastName: "Trajkovski",
    birthYear: 1989,
    job: "Student",
    friends: ["Mike", "Bob", "Sarah"],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2024 - 1989;
    // }

    // calcAge: function () {
    //     // console.log(this); 
    //     return 2024 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}. He has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
    }
}
console.log(stefan.calcAge());

console.log(stefan.age);
console.log(stefan.age);
console.log(stefan.age);

// Challenge
// Stefan is a 35 year old student and he does not have a driver's license.

console.log(stefan.getSummary());
*/

