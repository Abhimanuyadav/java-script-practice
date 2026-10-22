// //PART 1]-
// //FOR LOOP 
// // 1

// let temperatures = [28, 32, 25, 40, 18, 35];
// let count = 0;

// for (let i = 0; i < temperatures.length; i++) {
//     if (temperatures[i] > 30) {
//         count++;
//     }
// }

// console.log("1. Days hotter than 30°C:", count);


// // 2

// let num = 4729;
// let sum = 0;

// for (; num > 0; num = Math.floor(num / 10)) {
//     sum += num % 10;
// }

// console.log("2. Sum of digits:", sum);


// // 3
// console.log("3. Numbers:");

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
//         console.log(i);
//     }
// }


// // 4

// let str = "JavaScript";
// let consonants = "";

// for (let i = 0; i < str.length; i++) {
//     let ch = str[i];

//     if (!"aeiouAEIOU".includes(ch)) {
//         consonants += ch;
//     }
// }

// console.log("4. Consonants:", consonants);


// // 5

// let numbers = [10, 25, 8, 40, 30];
// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < numbers.length; i++) {
//     let current = numbers[i];

//     if (current > largest) {
//         secondLargest = largest;
//         largest = current;
//     } else if (current > secondLargest && current < largest) {
//         secondLargest = current;
//     }
// }

// console.log("5. Second-largest number:", secondLargest);



