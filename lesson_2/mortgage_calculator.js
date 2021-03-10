/* eslint-disable max-len */
const readline = require('readline-sync');

let messages = require('./mortgage_calculator.json');

// prompt exepcts an answer 
let prompts = messages['prompts'];
let errors = messages['errors'];
let result  = messages['result'];

/*
Inputs:

- the loan amount (Number)
- the Annual Percentage Rate (APR) (Number 1-100)
- the loan duration (Number, months)

Outputs:

monthly interest rate
loan duration in months

let m = p * (j / (1 - Math.pow((1 + j), (-n))));
*/

let printPrompt = (message) => console.log(`${message} =>`);
let printError = (message) => console.log(`UH OH: ${message}. Try again?`);
let validNumber = (number) => !isNaN(number);

function calculateMonthlyPayment(loanDuration, monthlyInterestRate, loanAmount) {
  let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));
  return monthlyPayment;
}
let inputDict = {};


for (let inputType in prompts) {

  let input;

  while (!validNumber(input)) {
    printPrompt(prompts[inputType]);
    input = readline.question();
    if (!validNumber(input)) {
      printError(errors[inputType]);
      continue;
    }
    inputDict[inputType] = input;
  }
}

let monthlyPayment = calculateMonthlyPayment(inputDict['loanDuration'],inputDict['APR'] / 12 / 100, inputDict['loanAmount']);
console.log(result + " $" + monthlyPayment.toFixed(2));