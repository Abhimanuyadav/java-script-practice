// // PART II: While Loop 

// // Q1. 
// console.log("--- Q1. Print Numbers 1 to 10 ---");
// let i1 = 1;
// while (i1 <= 10) {
//     console.log(i1);
//     i1++;
// }

// //  Q2.
// console.log("\n--- Q2. Sum of Natural Numbers ---");
// let i2 = 1, sum2 = 0;
// while (i2 <= 10) {
//     sum2 += i2;
//     i2++;
// }
// console.log("Sum:", sum2);

// // Q3. 
// console.log("\n--- Q3. Multiplication Table ---");
// let num3 = 5, i3 = 1;
// while (i3 <= 10) {
//     console.log(`${num3} x ${i3} = ${num3 * i3}`);
//     i3++;
// }

// // Q4. 
// console.log("\n--- Q4. Count the Digits ---");
// let n4 = 58372, temp4 = n4, count4 = 0;
// if (temp4 === 0) {
//     count4 = 1;
// } else {
//     while (temp4 > 0) {
//         count4++;
//         temp4 = Math.floor(temp4 / 10);
//     }
// }
// console.log(`Input: ${n4} | Output: ${count4}`);

// // Q5.
// console.log("\n--- Q5. Reverse a Number ---");
// let n5 = 12345, temp5 = n5, rev5 = 0;
// while (temp5 > 0) {
//     rev5 = (rev5 * 10) + (temp5 % 10);
//     temp5 = Math.floor(temp5 / 10);
// }
// console.log(`Input: ${n5} | Output: ${rev5}`);

// // Q6. 
// console.log("\n--- Q6. Sum of Digits ---");
// let n6 = 4729, temp6 = n6, sum6 = 0;
// while (temp6 > 0) {
//     sum6 += temp6 % 10;
//     temp6 = Math.floor(temp6 / 10);
// }
// console.log(`Input: ${n6} | Output: ${sum6}`);

// //  Q7. 
// console.log("\n--- Q7. Numbers Divisible by 3 and 5, but not 7 ---");
// let i7 = 1, res7 = [];
// while (i7 <= 100) {
//     if (i7 % 3 === 0 && i7 % 5 === 0 && i7 % 7 !== 0) {
//         res7.push(i7);
//     }
//     i7++;
// }
// console.log(res7.join(" "));

// // Q8. 
// console.log("\n--- Q8. Calculate Factorial ---");
// let n8 = 5, fact8 = 1, i8 = n8;
// while (i8 > 1) {
//     fact8 *= i8;
//     i8--;
// }
// console.log(`Input: ${n8} | Output: ${fact8}`);

// // Q9. 
// console.log("\n--- Q9. Check a Palindrome Number ---");
// let n9 = 121, temp9 = n9, rev9 = 0;
// while (temp9 > 0) {
//     rev9 = (rev9 * 10) + (temp9 % 10);
//     temp9 = Math.floor(temp9 / 10);
// }
// if (n9 === rev9) {
//     console.log(`Input: ${n9} | Output: Palindrome number`);
// } else {
//     console.log(`Input: ${n9} | Output: Not a palindrome number`);
// }

// // Q10. 
// console.log("\n--- Q10. Convert Decimal to Binary ---");
// let decimal10 = 13, temp10 = decimal10, binary10 = "";
// if (temp10 === 0) {
//     binary10 = "0";
// } else {
//     while (temp10 > 0) {
//         binary10 = (temp10 % 2) + binary10;
//         temp10 = Math.floor(temp10 / 2);
//     }
// }
// console.log(`Input: ${decimal10} | Output: ${binary10}`);