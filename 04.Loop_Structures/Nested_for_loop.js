// // //Part I-d] Nested For Loop Questions
// // 1. 
// console.log("--- 1. Right-Triangle Number Pattern ---");
// let rows1 = 4;
// let currentNum1 = 1;
// for (let i = 1; i <= rows1; i++) {
//     let rowStr = "";
//     for (let j = 1; j <= i; j++) {
//         rowStr += currentNum1 + " ";
//         currentNum1++;
//     }
//     console.log(rowStr.trim());
// }

// // 2. 
// console.log("\n--- 2. Right-Triangle Alphabet Pattern ---");
// let rows2 = 5;
// for (let i = 1; i <= rows2; i++) {
//     let rowStr = "";
//     for (let j = 1; j <= i; j++) {
//         rowStr += String.fromCharCode(64 + j) + " ";
//     }
//     console.log(rowStr.trim());
// }

// // 3. 
// console.log("\n--- 3. Hollow Right-Triangle Star Pattern ---");
// let rows3 = 5;
// for (let i = 1; i <= rows3; i++) {
//     let rowStr = "";
//     for (let j = 1; j <= i; j++) {
//         if (j === 1 || j === i || i === rows3) {
//             rowStr += "* ";
//         } else {
//             rowStr += "  ";
//         }
//     }
//     console.log(rowStr.trimEnd());
// }

// // 4. 
// console.log("\n--- 4. Reverse Right-Angle Star Pattern ---");
// let rows4 = 5;
// for (let i = rows4; i >= 1; i--) {
//     let rowStr = "";
//     for (let j = 1; j <= i; j++) {
//         rowStr += "*";
//     }
//     console.log(rowStr);
// }

// // 5. 
// console.log("\n--- 5. Reverse Right-Angle Pattern (Repeated Row Number) ---");
// let rows5 = 5;
// for (let i = rows5; i >= 1; i--) {
//     let rowStr = "";
//     for (let j = 1; j <= i; j++) {
//         rowStr += i + " ";
//     }
//     console.log(rowStr.trim());
// }

// // 6. 
// console.log("\n--- 6. Reverse Right-Angle Number Pattern ---");
// let rows6 = 5;
// for (let i = rows6; i >= 1; i--) {
//     let rowStr = "";
//     for (let j = 1; j <= i; j++) {
//         rowStr += j + " ";
//     }
//     console.log(rowStr.trim());
// }

// // 7
// console.log("\n--- 7. Reverse Right-Angle Consecutive Numbers ---");
// let currentNum7 = 15;
// for (let i = 5; i >= 1; i--) {
//     let rowArr = [];
//     for (let j = 1; j <= i; j++) {
//         rowArr.push(currentNum7);
//         currentNum7--;
//     }
//     console.log(rowArr.join(" "));
// }

// // 8
// console.log("\n--- 8. Reverse Right-Angle Hollow Star Pattern ---");
// let rows8 = 5;
// for (let i = rows8; i >= 1; i--) {
//     let rowStr = "";
//     for (let j = 1; j <= i; j++) {
//         if (i === rows8 || j === 1 || j === i) {
//             rowStr += "* ";
//         } else {
//             rowStr += "  ";
//         }
//     }
//     console.log(rowStr.trimEnd());
// }

// // 9. 
// console.log("\n--- 9. 5x5 Square (Empty Main Diagonal) ---");
// let n9 = 5;
// for (let i = 1; i <= n9; i++) {
//     let rowStr = "";
//     for (let j = 1; j <= n9; j++) {
//         if (i === j) {
//             rowStr += "  ";
//         } else {
//             rowStr += "* ";
//         }
//     }
//     console.log(rowStr.trim());
// }

// // 10
// console.log("\n--- 10. Multiplication Tables (Even Products Only) ---");
// for (let i = 1; i <= 5; i++) {
//     console.log(`Table of ${i}:`);
//     for (let j = 1; j <= 10; j++) {
//         let prod = i * j;
//         if (prod % 2 === 0) {
//             console.log(`${i} x ${j} = ${prod}`);
//         }
//     }
//     console.log("");
// }

// // 11. 
// console.log("--- 11. Matrix of Absolute Differences ---");
// let n11 = 5;
// for (let i = 0; i < n11; i++) {
//     let rowStr = "";
//     for (let j = 0; j < n11; j++) {
//         let diff = Math.abs(i - j);
//         rowStr += diff + "\t";
//     }
//     console.log(rowStr);
// }

// // 12. 
// console.log("\n--- 12. Unique Pairs (Sum is Perfect Square) ---");
// for (let i = 1; i <= 10; i++) {
//     for (let j = i + 1; j <= 10; j++) {
//         let sum = i + j;
//         let sqrt = Math.sqrt(sum);
//         if (sqrt === Math.floor(sqrt)) {
//             console.log(`(${i}, ${j})`);
//         }
//     }
// }

// // 13. 
// console.log("\n--- 13. Diamond Number Pattern ---");
// let n13 = 5;
// for (let i = 1; i <= n13; i++) {
//     let spaces = " ".repeat(n13 - i);
//     let nums = "";
//     for (let j = 1; j <= i; j++) nums += j;
//     for (let j = i - 1; j >= 1; j--) nums += j;
//     console.log(spaces + nums);
// }
// for (let i = n13 - 1; i >= 1; i--) {
//     let spaces = " ".repeat(n13 - i);
//     let nums = "";
//     for (let j = 1; j <= i; j++) nums += j;
//     for (let j = i - 1; j >= 1; j--) nums += j;
//     console.log(spaces + nums);
// }

// // 14. 
// console.log("\n--- 14. 6x6 Matrix in Spiral Order ---");
// let n14 = 6;
// let matrix14 = Array(n14).fill(0).map(() => Array(n14).fill(0));
// let top = 0, bottom = n14 - 1, left = 0, right = n14 - 1;
// let val14 = 1;

// while (top <= bottom && left <= right) {
//     for (let j = left; j <= right; j++) matrix14[top][j] = val14++;
//     top++;
//     for (let i = top; i <= bottom; i++) matrix14[i][right] = val14++;
//     right--;
//     for (let j = right; j >= left; j--) matrix14[bottom][j] = val14++;
//     bottom--;
//     for (let i = bottom; i >= top; i--) matrix14[i][left] = val14++;
//     left++;
// }

// for (let i = 0; i < n14; i++) {
//     let rowStr = "";
//     for (let j = 0; j < n14; j++) {
//         rowStr += String(matrix14[i][j]).padStart(3, " ") + " ";
//     }
//     console.log(rowStr);
// }

// // 15. 
// console.log("\n--- 15. Centered Pascal's Triangle ---");
// let numRows15 = 8;
// for (let i = 0; i < numRows15; i++) {
//     let rowStr = " ".repeat((numRows15 - i - 1) * 2);
//     let currentVal = 1;
//     for (let j = 0; j <= i; j++) {
//         rowStr += String(currentVal).padStart(4, " ");
//         currentVal = (currentVal * (i - j)) / (j + 1);
//     }
//     console.log(rowStr);
// }

// // 16. 
// console.log("\n--- 16. Custom Border Matrix ---");
// let rows16 = 5, cols16 = 5;
// for (let i = 0; i < rows16; i++) {
//     let rowStr = "";
//     for (let j = 0; j < cols16; j++) {
//         let val = 0;
//         if (i === 0 || i === rows16 - 1 || j === 0 || j === cols16 - 1) {
//             val = 1;
//         }
//         if ((i + j) % 3 === 0) {
//             val = 2;
//         }
//         rowStr += val + " ";
//     }
//     console.log(rowStr.trim());
// }