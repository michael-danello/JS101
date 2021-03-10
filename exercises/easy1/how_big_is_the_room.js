const readline = require('readline-sync');

SQFT_TO_METERS = 10.7639; 

console.log("Enter the length of the room in meters:");
let length = readline.question();

console.log("Enter the width of the room in meters:")
let width = readline.question();

let area = length * width;

console.log(`The area of the room is ${area.toFixed(2)} square meters (${(area*SQFT_TO_METERS).toFixed(2)} square feet).`);

