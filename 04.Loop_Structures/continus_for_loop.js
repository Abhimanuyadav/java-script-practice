// //Part I-b] continue inside a for Loop

// // 1

// console.log("1. Numbers:");

// for (let i = 1; i <= 30; i++) {
//     if (i % 4 === 0) {
//         continue;
//     }
//     console.log(i);
// }


// // 2

// let numbers = [10, -5, 20, -8, 15, -3];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] <= 0) {
//         continue;
//     }
//     sum += numbers[i];
// }

// console.log("2. Sum of positive numbers:", sum);


// // 3

// let str = "Hello World";

// console.log("3. Characters:");

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//         continue;
//     }
//     console.log(str[i]);
// }


// // 4

// console.log("4. Multiplication table of 6:");

// for (let i = 1; i <= 12; i++) {
//     let product = 6 * i;

//     if (product % 5 === 0) {
//         continue;
//     }

//     console.log("6 x " + i + " = " + product);
// }


// // 5

// let ages = [12, 18, 25, 15, 30, 17, 22];

// console.log("5. Eligible voting ages:");

// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] < 18) {
//         continue;
//     }

//     console.log(ages[i]);
// }

