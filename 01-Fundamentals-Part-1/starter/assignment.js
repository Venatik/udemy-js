let country = "Macedonia";
const continent = "Europe";
let population = 2000000;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
const language = "Macedonian";

console.log(isIsland);

console.log(population / 2);
// population++;
console.log(++population);

const finlandPop = 6000000;
console.log(population > finlandPop);
let averagePop = 33000000;
console.log(population > averagePop);

let description = `${country} is in ${continent}, and its ${population} people speak ${language}.`
console.log(description);

if (population >= 33000000) {
    console.log(`Your country's population is above average!`)
} else {
    let difference = 33000000 - population
    console.log(`Your country's population is ${difference} below average!`)
}