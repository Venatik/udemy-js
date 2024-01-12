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

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    }
    else {
        console.log(`${firstName} has already retired!`);
        return -1;
    }
    // return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1989, "Stefan"));
console.log(yearsUntilRetirement(1970, "Mike"));