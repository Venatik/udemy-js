// Remember, we"re gonna use strict mode in all scripts now!
"use strict";

/* // PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem
// - What is temperature amplitude? - Difference between highest and lowest temperature.
// - How to compute the max and min temperatures?
// - What's a sensor error? And what to do when it occurs?


// 2. Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and then return it

const calcTempAmplitude = function (temps) {
    let maxTemp = temps[0];
    let minTemp = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i];
        if (typeof currentTemp !== "number") {
            continue;
        }

        if (currentTemp > maxTemp) {
            maxTemp = currentTemp;
        }
        if (currentTemp < minTemp) {
            minTemp = currentTemp;
        }
    }
    console.log(`The min temperature is: ${minTemp}. The max temperature is: ${maxTemp}.`);
    return maxTemp - minTemp;
}

calcTempAmplitude([3, 7, 4, 1, 8, 10]);
// min = 1
// max = 10

const amplitude = calcTempAmplitude(temperatures);
console.log(`The amplitude is: ${amplitude}.`);

// PROBLEM 2:
// Function should now receive two arrays of temperatures.

// 1. Understanding the problem
// - With 2 arrays, should we implement functionality twice? - No. Just merge 2 arrays.

// 2. Breaking up into sub-problems
// - Merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
    const array1 = ["a", "b", "c"];
    const array2 = ["d", "e", "f"];
    const array3 = array1.concat(array2); // reference variables

    const temps = t1.concat(t2);
    console.log(temps);

    let maxTemp = temps[0];
    let minTemp = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i];
        if (typeof currentTemp !== "number") {
            continue;
        }

        if (currentTemp > maxTemp) {
            maxTemp = currentTemp;
        }
        if (currentTemp < minTemp) {
            minTemp = currentTemp;
        }
    }
    console.log(`The min temperature is: ${minTemp}. The max temperature is: ${maxTemp}.`);
    return maxTemp - minTemp;
}

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(`The new amplitude is: ${amplitudeNew}.`);
*/

/* const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: "celsius",

        // C) FIX the bug
        value: 10,
    }

    console.log(measurement);
    // B) FIND the bug
    console.table(measurement);

    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
}

// A) IDENTIFY the bug
console.log(measureKelvin());

// Using a debugger

const calcTempAmplitudeBug = function (t1, t2) {
    const array1 = ["a", "b", "c"];
    const array2 = ["d", "e", "f"];
    const array3 = array1.concat(array2); // reference variables

    const temps = t1.concat(t2);
    console.log(temps);

    let maxTemp = 0;
    let minTemp = 0;

    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i];
        if (typeof currentTemp !== "number") {
            continue;
        }

        debugger;
        if (currentTemp > maxTemp) {
            maxTemp = currentTemp;
        }
        if (currentTemp < minTemp) {
            minTemp = currentTemp;
        }
    }
    console.log(`The min temperature is: ${minTemp}. The max temperature is: ${maxTemp}.`);
    return maxTemp - minTemp;
}

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY the bug
console.log(`The new amplitude is: ${amplitudeBug}.`); */

// ===================== Coding Challenge #1 =====================

/* Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will be printed as "17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Your tasks:
1. Create a function "printForecast" which takes in an array "arr" and logs a string like the above in the console.

Use the problem-solving framework. Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with °C
// - Strings need to contain day (index + 1)
// - Add ... between elements and start and end of string
*/

/* let array1 = [17, 21, 23];
let array2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days...`;
    }
    console.log("..." + str);
}

printForecast(array1);
printForecast(array2); */

// Udemy solution:
/* const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printeForecastUdemy = function (arr) {
    let string = ""; // this is the equivalent of 0 for numbers
    for (let i = 0; i < arr.length; i++) {
        string = string + `${arr[i]}°C in ${i + 1} days...`;
    }
    console.log(`...` + string);
}

printeForecastUdemy(data1);
printeForecastUdemy(data2); */