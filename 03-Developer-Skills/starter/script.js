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

