//Part I-a] break inside a for Loop

// // 1

// let arr = [2, 4, 6, 7, 9, 7];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 7) {
//         console.log("1. Number 7 found at index:", i);
//         break;
//     }
// }


// // 2

// let correctPassword = "hello123";
// let accessGranted = false;

// for (let i = 1; i <= 5; i++) {
//     let password = prompt("Enter password (Attempt " + i + " of 5):");

//     if (password === correctPassword) {
//         console.log("2. Access granted");
//         accessGranted = true;
//         break;
//     }
// }

// if (!accessGranted) {
//     console.log("2. Account locked");
// }


// // 3. 

// let sum = 0;

// for (let i = 1; ; i++) {
//     sum += i;

//     if (sum > 100) {
//         console.log("3. Last number added:", i);
//         console.log("   Total sum:", sum);
//         break;
//     }
// }


// // 4

// let names = ["Amit", "Rahul", "Sneha", "Sahil", "Priya"];

// for (let i = 0; i < names.length; i++) {
//     if (names[i].startsWith("S")) {
//         console.log("4. First name starting with S:", names[i]);
//         break;
//     }
// }


// // 5

// for (let i = 1; i <= 50; i++) {
//     let root = Math.sqrt(i);

//     if (i > 20 && Number.isInteger(root)) {
//         console.log("5. First perfect square greater than 20:", i);
//         break;
//     }

//     console.log(i);
// }


