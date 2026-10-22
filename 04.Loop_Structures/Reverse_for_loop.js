//Part I-c] Reverse For Loop

// // 1
// // but NOT divisible by 9

// console.log("1. Numbers:");

// for (let i = 50; i >= 1; i--) {
//     if (i % 3 === 0 && i % 9 !== 0) {
//         console.log(i);
//     }
// }


// // 2

// let arr = [12, 45, 7, 23, 56, 89, 34];
// let largest = -Infinity;

// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] < 50 && arr[i] > largest) {
//         largest = arr[i];
//     }
// }

// console.log("2. Largest number less than 50:", largest);


// // 3

// let num = 4729;
// let product = 1;

// for (; num > 0; num = Math.floor(num / 10)) {
//     let digit = num % 10;

//     if (digit % 2 !== 0) {
//         product *= digit;
//     }
// }

// console.log("3. Product of odd digits:", product);


// // 4

// let str = "Programming";
// let consonants = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     let ch = str[i];

//     if (!"aeiouAEIOU".includes(ch)) {
//         consonants += ch;
//     }
// }

// console.log("4. Reverse consonants:", consonants);


// // 5

// let fib = [0, 1];

// for (let i = 2; i < 15; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
// }

// console.log("5. Fibonacci numbers in reverse order:");

// for (let i = 14; i >= 0; i--) {
//     console.log(fib[i]);
// }
