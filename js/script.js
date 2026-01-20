// 1. Напишите функцию isEven, которая принимает одно число и возвращает true, если оно чётное, и false в противном случае.
// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log("5:", isEven(5));
// console.log("8:", isEven(8));
// console.log("93:", isEven(93));
// console.log("1.4:", isEven(1.4));

// 2. Напишите функцию filterPositive, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа.
// function filterPositive(arr) {
//   const onlyPositiveNumbers = [];

//   for (let i = 0; i < arr.length; i++) {
//     const currentNumber = arr[i];

//     if (currentNumber > 0) {
//       onlyPositiveNumbers.push(currentNumber);
//     }
//   }

//   return onlyPositiveNumbers;
// }

// console.log(filterPositive([8, 14, -9, 25, 74, -5, 1]));

// 3. Напишите функцию calculateAverage, которая принимает массив чисел и возвращает их среднее значение.
// function calculateAverage(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     const currentNumber = arr[i];
//     sum = sum + currentNumber;
//   }

//   const averageValue = sum / arr.length;
//   return averageValue.toFixed(2);
// }

// console.log(calculateAverage([8, 14, -9, 25, 74, -5, 1]));
// console.log(calculateAverage(filterPositive([8, 14, -9, 25, 74, -5, 1])));

// 4. Напишите функцию getLongestWord, которая принимает массив строк и возвращает самую длинную строку.

function getLongestWord(arr) {
  let longestWord = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const currentWord = arr[i];
    if (longestWord.length < currentWord.length) {
      longestWord = currentWord;
    }
  }

  return longestWord;
}

console.log(getLongestWord(["Apple", "Banana", "Orange", "Pineapple", "Cat", "History"]));
