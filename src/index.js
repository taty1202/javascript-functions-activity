// function divides(num1, num2) {
//     return num1 % num2 === 0
//   }
// Convert the above function to arrow function
const divides = (num1, num2) => num1 % num2 === 0;

console.log(divides(15, 5));
// Write a function that converts Fahrenheit to Celsius

const convertFtoC = tempF => (tempF - 32) / 1.8;

console.log(convertFtoC(32));
// Convert the python function below to a javascript function

// def pairs_with_given_sum(numbers, target):
//     total = 0
//     for i in range(len(numbers)-1):
//         for j in range(i+1, len(numbers)):
//             if numbers[i]+numbers[j] == target:
//                 total += 1
//     return total

const pairsWithGivenSum = (numbers, target) => {
  let total = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        total += 1;
      }
    }
  }
  return total;
};
console.log(pairsWithGivenSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5], 6));
console.log(pairsWithGivenSum([1, 2, 3, 5, 7], 8));
// Using the setInterval function (described below), register a callback function to be called every second.
// Consider printing some output so that you can see that the callback is running.
// setInterval is very similar to the setTimeout function described in Learn, taking the form

// setInterval(callBackFunction, intervalInMs)
//   callBackFunction is a reference to the function to be run periodically
//   intervalInMs is how much time should pass between calls to callBackFunction (in millisecond units)
//
// Check out the MDN documentation for setInterval (and setTimeout) for additional details
// add your call here
const greeting = () => console.log('Hello!');

setInterval(greeting, 1000);
