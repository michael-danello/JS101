let advice = "Few things in life are as important as house training your pet dinosaur.";

advice = advice.replace("important","urgent");

// console.log(advice);

let numbers = [1,2,3,4,5];

let newNums = numbers.slice().reverse();

numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

numbers.includes(number1);
numbers.includes(number2);

let famousWords = "seven years ago...";

// eslint-disable-next-line no-unused-expressions
"Four score and " + famousWords;
"Four score and ".concat(famousWords);


// Question 5
let ar1 = [1, 2, 3, 4, 5];
ar1.splice(2,1);

// Question 6
let flintstones = ["Fred", "Wilma"];
flintstones.push("Barney", "Betty");
flintstones.push("Bambam", "Pebbles");
console.log(flintstones);

// Question 7
flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

// Question 8
numbers = [1, 2, 3, 4]; // true
Array.isArray(numbers);

// Question 9
let title = "Flintstone Family Members";

let padding = Math.floor((40 - title.length) / 2);

title.padStart(padding + title.length);

// Question 10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split('').filter(char => char === 't').length;

