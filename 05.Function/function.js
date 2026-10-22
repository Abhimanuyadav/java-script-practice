// // JAVASCRIPT FUNCTIONS ASSIGNMENT SOLUTIONS

// // 1.

// //   What is a function in JavaScript?
// //   A function is a reusable block of code designed to perform a particular task. It is executed 
// //   when "called" or "invoked".
  
// //   Four advantages of using functions:
// //   1. Reusability: Write code once and reuse it multiple times without rewriting.
// //   2. Maintainability: Easier to debug and update code in one central place.
// //   3. Modularity: Breaks complex problems down into smaller, manageable sub-tasks.
// //   4. Readability: Makes code cleaner and easier to understand with descriptive names.



// //2
// function greetStudent(name) {
//   return `Hello ${name}, welcome to CodingGita!`;
// }
// console.log("=== Q2 Output ===");
// console.log(greetStudent("Rahul"));
// console.log(greetStudent("Priya"));


// // 3. Hoisting

// //   Hoisting is JavaScript's default behavior of moving function and variable declarations 
// //   to the top of their scope before code execution. For function declarations, the entire 
// //   function body is hoisted, allowing you to call the function before it appears in the code.

// console.log("\n=== Q3 Output ===");
// console.log(hoistedGreet("Amit")); 

// function hoistedGreet(name) {
//   return `Welcome back, ${name}!`;
// }


// //4 Function Expression 
// const calculateAverage = function(a, b, c) {
//   return (a + b + c) / 3;
// };
// console.log("\n=== Q4 Output ===");
// console.log("Average:", calculateAverage(80, 90, 70));


// //5 Parameters vs Arguments 

// //   - Parameters are the variable names listed in the function definition.
// //   - Arguments are the actual real values passed to the function when it is called.
  
// //   In the code below:
// //   - Parameters: x, y
// //   - Arguments: 12, 5

// console.log("\n=== Q5 Output ===");
// function multiply(x, y) {
//   return x * y;
// }
// console.log(multiply(12, 5));


// //6 Return Statement
// function isEven(num) {
//   return num % 2 === 0;
// }
// console.log("\n=== Q6 Output ===");
// console.log("Is 24 even?", isEven(24));
// console.log("Is 17 even?", isEven(17));


// //7 Multiple Parameters 
// function findPercentage(obtainedMarks, totalMarks) {
//   return (obtainedMarks / totalMarks) * 100;
// }
// console.log("\n=== Q7 Output ===");
// console.log(`Percentage: ${findPercentage(456, 500)}%`);


// //8 Function Without Return 

// //   If a function does not contain a return statement, it implicitly returns `undefined`.
// console.log("\n=== Q8 Output ===");
// function demoNoReturn() {
//   let x = 10 + 5;
// }
// console.log("Value returned:", demoNoReturn());


// //9  Practical Application – Simple Interest 
// const calculateSimpleInterest = function(principal, rate, time) {
//   return (principal * rate * time) / 100;
// };
// console.log("\n=== Q9 Output ===");
// console.log("Simple Interest:", calculateSimpleInterest(10000, 5, 2));


// //10 Mixed Concept Question 

// //   a) Major difference: Function declarations are hoisted (can be called before definition), 
// //      whereas function expressions are not hoisted and are only available after the line 
// //      where they are assigned.

// console.log("\n=== Q10 Output ===");
// const formatStudent = function(name, marks) {
//   return `Student ${name} has scored ${marks} marks.`;
// };
// console.log(formatStudent("Aarav", 88));
// console.log(formatStudent("Neha", 92));


// //11 Function Scope 

// //   a) Local scope variables are declared inside a function and can only be accessed within that function.
// //      Global scope variables are declared outside any function and can be accessed globally anywhere in the script.

// console.log("\n=== Q11 Output ===");
// let course = "JavaScript"; // Global variable

// function displayAge() {
//   let age = 20; // Local variable
//   console.log("Inside function - Age:", age);
//   console.log("Inside function - Course:", course);
// }
// displayAge();
// // Trying to print age outside will throw a ReferenceError:
// // console.log(age); // Uncommenting this line would cause an error


// //12 Combining Multiple Concepts 
// function analyzeStudent(name, m1, m2, m3) {
//   let total = m1 + m2 + m3;
//   let average = total / 3;
//   return `${name} scored total ${total} with average ${average.toFixed(2)}`;
// }
// console.log("\n=== Q12 Output ===");
// console.log(analyzeStudent("Karan", 85, 90, 78));
// console.log(analyzeStudent("Simran", 92, 88, 95));


// //13 Nested Functions 

// //   a) A nested function is a function defined inside another function.

//   console.log("\n=== Q13 Output ===");
// function studentReport(name, m1, m2, m3) {
//   function total() {
//     return m1 + m2 + m3;
//   }
//   return `${name} total marks: ${total()}`;
// }
// console.log(studentReport("Rohan", 75, 80, 85));


// //14 Practical – Report Card Generator 
// function generateReport(name, m1, m2, m3) {
//   let total = m1 + m2 + m3;
//   let average = total / 3;
//   let result = average >= 40 ? "Pass" : "Fail";
  
//   return `--- Report Card ---\nName: ${name}\nTotal: ${total}\nAverage: ${average.toFixed(2)}\nResult: ${result}`;
// }
// console.log("\n=== Q14 Output ===");
// console.log(generateReport("Vikas", 50, 60, 55));
// console.log("\n" + generateReport("Ananya", 30, 35, 28));


// //15 Practical – Multiple Utility Functions 
// const sumOfThree = (a, b, c) => a + b + c;
// const averageOfTwo = (x, y) => (x + y) / 2;
// const maxOfTwo = (a, b) => (a > b ? a : b);
// const fullName = (first, last) => `${first} ${last}`;

// console.log("\n=== Q15 Output ===");
// console.log("Sum of Three (5, 10, 15):", sumOfThree(5, 10, 15));
// console.log("Average of Two (20, 40):", averageOfTwo(20, 40));
// console.log("Max of Two (50, 80):", maxOfTwo(50, 80));
// console.log("Full Name ('John', 'Doe'):", fullName("John", "Doe"));


// //16 Practical – Grade Calculator 
// const calculateGrade = function(percentage) {
//   if (percentage >= 90) return "A+";
//   if (percentage >= 80) return "A";
//   if (percentage >= 70) return "B";
//   if (percentage >= 60) return "C";
//   if (percentage >= 40) return "D";
//   return "F";
// };
// console.log("\n=== Q16 Output ===");
// let testPercentages = [95, 82, 67, 45, 32];
// testPercentages.forEach(p => {
//   console.log(`Percentage: ${p} -> Grade: ${calculateGrade(p)}`);
// });


// //17 Practical – Shopping Discount 
// function calculateFinalPrice(price, discountPercent) {
//   return price - (price * discountPercent / 100);
// }
// console.log("\n=== Q17 Output ===");
// console.log("Final Price 1:", calculateFinalPrice(2500, 15));
// console.log("Final Price 2:", calculateFinalPrice(1200, 10));


// //18 Practical – Temperature Converter 
// const celsiusToFahrenheit = c => (c * 9 / 5) + 32;
// const fahrenheitToCelsius = f => (f - 32) * 5 / 9;

// console.log("\n=== Q18 Output ===");
// console.log("0°C to Fahrenheit:", celsiusToFahrenheit(0));
// console.log("100°C to Fahrenheit:", celsiusToFahrenheit(100));
// console.log("32°F to Celsius:", fahrenheitToCelsius(32));
// console.log("212°F to Celsius:", fahrenheitToCelsius(212));


// //19 Mixed Advanced Question 

// //   a) No, a function expression cannot be called before it is defined because variable declarations 
// //      using `const` or `let` are not hoisted with their assigned function values (they remain in the Temporal Dead Zone).

// console.log("\n=== Q19 Output ===");
// function outerCalculator(baseNumber) {
//   function innerSquare(n) {
//     return n * n;
//   }
//   return `Square of ${baseNumber} is ${innerSquare(baseNumber)}`;
// }
// console.log(outerCalculator(6));


// //20 Challenge Question (Combining Everything) 
// function processStudent(name, m1, m2, m3) {
//   function calculateMetrics() {
//     let total = m1 + m2 + m3;
//     let avg = total / 3;
//     return { total, avg };
//   }
  
//   let metrics = calculateMetrics();
//   let status = metrics.avg >= 40 ? "Pass" : "Fail";
  
//   return `Student: ${name} | Total: ${metrics.total} | Average: ${metrics.avg.toFixed(2)} | Status: ${status}`;
// }

// function compareAverages(avg1, avg2) {
//   if (avg1 > avg2) return "First average is higher.";
//   if (avg2 > avg1) return "Second average is higher.";
//   return "Both averages are equal.";
// }

// console.log("\n=== Q20 Output ===");
// let report1 = processStudent("Dev", 80, 85, 90);
// let report2 = processStudent("Diya", 60, 55, 65);
// let report3 = processStudent("Kabir", 30, 35, 40);

// console.log(report1);
// console.log(report2);
// console.log(report3);

// console.log(compareAverages(85, 60));