// // PART III: DO-WHILE LOOP ASSIGNMENT SOLUTIONS
// //1
// console.log("=== Q1. Print Numbers in Reverse ===");
// let i1 = 10;
// do {
//   console.log(i1);
//   i1--;
// } while (i1 >= 1);

// //2
// console.log("\n=== Q2. Print Even Numbers ===");
// let i2 = 1;
// do {
//   if (i2 % 2 === 0) {
//     console.log(i2);
//   }
//   i2++;
// } while (i2 <= 20);

// //3
// console.log("\n=== Q3. Sum of Natural Numbers ===");
// let n3 = 5; 
// let sum3 = 0;
// let i3 = 1;
// do {
//   sum3 += i3;
//   i3++;
// } while (i3 <= n3);
// console.log(`Input: ${n3} -> Output: ${sum3}`);


// //4
// console.log("\n=== Q4. Product of Digits ===");
// let num4 = 234; 
// let temp4 = num4;
// let product4 = 1;
// if (temp4 === 0) {
//   product4 = 0;
// } else {
//   do {
//     let digit = temp4 % 10;
//     product4 *= digit;
//     temp4 = Math.floor(temp4 / 10);
//   } while (temp4 > 0);
// }
// console.log(`Input: ${num4} -> Output: ${product4}`);


// //5
// console.log("\n=== Q5. Find the First Digit ===");
// let num5 = 58372; 
// let temp5 = num5;
// do {
//   if (temp5 < 10) {
//     break;
//   }
//   temp5 = Math.floor(temp5 / 10);
// } while (temp5 > 0);
// console.log(`Input: ${num5} -> Output: ${temp5}`);


// //6
// console.log("\n=== Q6. Calculate a Power ===");
// let base = 3; 
// let exponent = 4; 
// let result6 = 1;
// let count6 = 0;
// do {
//   if (exponent === 0) break;
//   result6 *= base;
//   count6++;
// } while (count6 < exponent);
// console.log(`Input: Base = ${base}, Exponent = ${exponent} -> Output: ${result6}`);



// //7
// console.log("\n=== Q7. Print Multiples with Conditions ===");
// let i7 = 1;
// do {
//   if (i7 % 4 === 0 && i7 % 8 !== 0) {
//     console.log(i7);
//   }
//   i7++;
// } while (i7 <= 100);



// //8
// console.log("\n=== Q8. Check a Palindrome Number ===");
// let num8 = 1221; 
// let original8 = num8;
// let reversed8 = 0;
// let temp8 = num8;
// do {
//   let digit = temp8 % 10;
//   reversed8 = reversed8 * 10 + digit;
//   temp8 = Math.floor(temp8 / 10);
// } while (temp8 > 0);

// if (original8 === reversed8) {
//   console.log(`Input: ${num8} -> Output: Palindrome number`);
// } else {
//   console.log(`Input: ${num8} -> Output: Not a palindrome number`);
// }



// //9
// console.log("\n=== Q9. Find the Greatest Common Divisor (GCD) ===");
// let a = 48; 
// let b = 18; 
// do {
//   let temp = b;
//   b = a % b;
//   a = temp;
// } while (b !== 0);
// console.log(`Input: 48, 18 -> Output: ${a}`);



// //10
// console.log("\n=== Q10. Convert Decimal to Binary (with Challenge for 0) ===");
// let num10 = 13; 
// let binary10 = "";
// let temp10 = num10;

// if (temp10 === 0) {
//   binary10 = "0";
// } else {
//   do {
//     let remainder = temp10 % 2;
//     binary10 = remainder + binary10;
//     temp10 = Math.floor(temp10 / 2);
//   } while (temp10 > 0);
// }
// console.log(`Input: ${num10} -> Output: ${binary10}`);