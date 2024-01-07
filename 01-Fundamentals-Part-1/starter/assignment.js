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

// =========Logical Operators Challenge=========
let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win the trophy!`)
}
if (scoreKoalas > scoreDolphins) {
    console.log(`Koalas win the trophy!`)
}
if (scoreKoalas === scoreDolphins) {
    console.log(`Both teams win the trophy!`)
}

