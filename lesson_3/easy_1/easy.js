// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.
// munstersDescription = munstersDescription[0].toUpperCase() + munstersDescription.slice(1,munstersDescription.length).toLowerCase()

// console.log(munstersDescription)

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

let additionalAges = { Marilyn: 22, Spot: 237 };

let allAges = Object.assign(ages, additionalAges);

// console.log(allAges);


let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino');

flintstones.concat([1,2])

let advice = "Few things in life are as important as house training your pet dinosaur.";

advice = advice.slice(0,advice.indexOf("house"));

console.log(advice);