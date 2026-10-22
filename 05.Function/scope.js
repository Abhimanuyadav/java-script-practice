// // Q1
// (function () {
//     var city = "Surat";
//     function display() {
//         var country = "India";
//         console.log(city);
//         console.log(country);
//     }
//     display();
// })();

// // Q2
// (function () {
//     var price = 500;
//     function calculate() {
//         var tax = 50;
//         console.log(price + tax);
//     }
//     calculate();
//     console.log(price);
// })();

// // Q3
// (function () {
//     var college = "ABC College";
//     function student() {
//         var name = "Rahul";
//         var age = 20;
//     }
//     function teacher() {
//         var subject = "JavaScript";
//     }
// })();

// // Q4
// (function () {
//     function first() {
//         var number = 100;
//     }
//     function second() {
//         try {
//             console.log(number);
//         } catch (e) {
//             console.log(e.name + ": " + e.message);
//         }
//     }
//     first();
//     second();
// })();

// // Q5
// (function () {
//     var globalVar = "I am global";
//     function show() {
//         var localVar = "I am local";
//         console.log(globalVar);
//         console.log(localVar);
//     }
//     show();
//     console.log(globalVar);
// })();

// // Q6
// (function () {
//     var game = "Cricket";
//     function play() {
//         console.log("I like " + game);
//     }
//     play();
//     console.log(game);
// })();

// // Q7
// (function () {
//     var language = "English";
//     function showLanguage() {
//         console.log(language);
//     }
//     function changeLanguage() {
//         language = "Gujarati";
//     }
//     showLanguage();
//     changeLanguage();
//     showLanguage();
//     console.log(language);
// })();

// // Q8
// (function () {
//     function displayMarks() {
//         console.log(marks);
//     }
//     var marks = 75;
//     displayMarks();
// })();

// // Q9
// (function () {
//     var color = "Red";
//     function showColor() {
//         var message = "Favorite color: ";
//         console.log(message + color);
//     }
//     showColor();
//     console.log(color);
//     try {
//         console.log(message);
//     } catch (e) {
//         console.log(e.name + ": " + e.message);
//     }
// })();

// // Q10
// (function () {
//     var school = "Sunrise School";
//     function showSchool() {
//         console.log(school);
//     }
//     function updateSchool() {
//         school = "Green Valley School";
//     }
//     showSchool();
//     updateSchool();
//     console.log(school);
// })();

// // Q11
// (function () {
//     function calculateTotal() {
//         var first = 100;
//         var second = 200;
//         console.log(first + second);
//     }
//     calculateTotal();
//     try {
//         console.log(first);
//     } catch (e) {
//         console.log(e.name + ": " + e.message);
//     }
// })();

// // Q12
// (function () {
//     function employee() {
//         var salary = 30000;
//     }
//     employee();
//     try {
//         console.log(salary);
//     } catch (e) {
//         console.log(e.name + ": " + e.message);
//     }
// })();

// // Q13
// (function () {
//     var number = 15;
//     function test() {
//         var number = 25;
//         console.log(number);
//     }
//     test();
//     console.log(number);
// })();

// // Q14
// (function () {
//     function calculate() {
//         var result = 40;
//         result = result + 10;
//         console.log(result);
//     }
//     calculate();
//     calculate();
// })();

// // Q15
// (function () {
//     function calculateArea() {
//         var length = 8;
//         var width = 4;
//         console.log("Area:", length * width);
//     }
//     calculateArea();
// })();

// // Q16
// (function () {
//     if (10 > 5) {
//         var result = "Success";
//     }
//     console.log(result);
// })();

// // Q17
// (function () {
//     var number = 1;
//     if (true) {
//         var number = 2;
//     }
//     console.log(number);
// })();

// // Q18
// (function () {
//     var message = "Start";
//     {
//         var message = "End";
//     }
//     console.log(message);
// })();

// // Q19
// (function () {
//     if (false) {
//         var result = 100;
//     }
//     console.log(result);
// })();

// // Q20
// (function () {
//     if (true) {
//         let secret = "Hidden";
//     }
//     try {
//         console.log(secret);
//     } catch (e) {
//         console.log(e.name + ": " + e.message);
//     }
// })();

// // Q21
// (function () {
//     for (var number = 2; number <= 6; number += 2) {
//         console.log(number);
//     }
//     console.log("Final:", number);
// })();

// // Q22
// (function () {
//     var count = 10;
//     for (var count = 1; count <= 3; count++) {
//         console.log(count);
//     }
//     console.log("Count:", count);
// })();

// // Q23
// (function () {
//     var i = 5;
//     while (i > 2) {
//         console.log(i);
//         i--;
//     }
//     console.log("After loop:", i);
// })();

// // Q24
// (function () {
//     for (var item = 1; item <= 3; item++) {
//         console.log("Item:", item);
//     }
//     console.log("Last item:", item);
// })();

// // Q25
// (function () {
//     for (let step = 1; step <= 4; step++) {
//         console.log(step);
//     }
//     try {
//         console.log(step);
//     } catch (e) {
//         console.log(e.name + ": " + e.message);
//     }
// })();

// // Q26
// (function () {
//     function calculate() {
//         for (var number = 1; number <= 3; number++) {
//             console.log(number * 10);
//         }
//         console.log("Final:", number);
//     }
//     calculate();
// })();

// // Q27
// (function () {
//     function student() {
//         for (var marks = 60; marks <= 80; marks += 10) {
//             console.log(marks);
//         }
//         console.log(marks);
//     }
//     student();
//     try {
//         console.log(marks);
//     } catch (e) {
//         console.log(e.name + ": " + e.message);
//     }
// })();

// // Q28
// (function () {
//     function test() {
//         var value = 5;
//         while (value < 8) {
//             console.log(value);
//             value++;
//         }
//         console.log("Final value:", value);
//     }
//     test();
// })();

// // Q29
// (function () {
//     function calculate() {
//         for (var i = 1; i <= 2; i++) {
//             console.log(i);
//         }
//     }
//     try {
//         console.log(i);
//     } catch (e) {
//         console.log(e.name + ": " + e.message);
//     }
//     calculate();
// })();

// // Q30
// (function () {
//     function printNumbers() {
//         for (var i = 1; i <= 5; i++) {
//             console.log(i);
//         }
//         console.log("After loop:", i);
//     }
//     printNumbers();
//     try {
//         console.log(i);
//     } catch (e) {
//         console.log(e.name + ": " + e.message);
//     }
// })();

// // Q31
// (function () {
//     console.log(score);
//     var score = 90;
//     console.log(score);
// })();

// // Q32
// (function () {
//     var a = 10;
//     function test() {
//         console.log(a);
//         var a = 20;
//         console.log(a);
//     }
//     test();
// })();

// // Q33
// (function () {
//     console.log(first);
//     console.log(second);
//     var first = 100;
//     var second = 200;
//     console.log(first);
//     console.log(second);
// })();

// // Q34
// (function () {
//     function calculate() {
//         console.log(total);
//         var total = 50;
//         console.log(total);
//     }
//     calculate();

//     function calculateHoisted() {
//         var total;
//         console.log(total);
//         total = 50;
//         console.log(total);
//     }
//     calculateHoisted();
// })();

// // Q35
// (function () {
//     var price = 100;
//     function showPrice() {
//         console.log(price);
//         var price = 500;
//     }
//     showPrice();
//     console.log(price);
// })();

// // Q36
// (function () {
//     sayHello();
//     function sayHello() {
//         console.log("Hello from CodingGita");
//     }
// })();

// // Q37
// (function () {
//     display();
//     function display() {
//         console.log("Function is hoisted completely");
//     }
// })();

// // Q38
// (function () {
//     try {
//         greet();
//     } catch (e) {
//         console.log(e.name + ": " + e.message);
//     }
//     var greet = function () {
//         console.log("Hi");
//     };
//     greet();
// })();

// // Q39
// (function () {
//     console.log(typeof myFunc);
//     function myFunc() {
//         return "I am hoisted";
//     }
//     console.log(myFunc());
// })();

// // Q40
// (function () {
//     var message = "Message from a global variable";
//     greetEarly();
//     function greetEarly() {
//         console.log(message);
//     }
// })();

// // Q41
// (function () {
//     var institute = "CodingGita";
//     function department() {
//         var dept = "CSE";
//         function batch() {
//             var year = 2025;
//             console.log(year);
//             console.log(dept);
//             console.log(institute);
//         }
//         batch();
//     }
//     department();
// })();

// // Q42
// (function () {
//     var globalVar = "I am global";
//     function outer() {
//         var outerVar = "I am outer";
//         function inner() {
//             console.log(globalVar);
//             console.log(outerVar);
//             try {
//                 console.log(innerVar);
//             } catch (e) {
//                 console.log(e.name + ": " + e.message);
//             }
//         }
//         inner();
//     }
//     outer();
// })();

// // Q43
// (function () {
//     var a = 1;
//     function level1() {
//         var b = 2;
//         function level2() {
//             var c = 3;
//             function deep() {
//                 console.log(a, b, c);
//             }
//             deep();
//         }
//         level2();
//     }
//     level1();
// })();

// // Q44
// (function () {
//     var x = "global";
//     function first() {
//         var x = "first";
//         function second() {
//             console.log(x);
//         }
//         second();
//     }
//     first();
//     console.log(x);
// })();

// // Q45
// (function () {
//     var outerVar = "Outermost";
//     function middle() {
//         var middleVar = "Middle";
//         function innermost() {
//             var innerVar = "Innermost";
//             console.log(innerVar);
//             console.log(middleVar);
//             console.log(outerVar);
//         }
//         innermost();
//     }
//     middle();
// })();

// // Q46
// (function () {
//     var score = 50;
//     function test() {
//         var score = 90;
//         console.log(score);
//     }
//     test();
//     console.log(score);
// })();

// // Q47
// (function () {
//     var name = "Global Name";
//     function show() {
//         var name = "Local Name";
//         console.log(name);
//     }
//     show();
//     console.log(name);
// })();

// // Q48
// (function () {
//     var value = 10;
//     function update() {
//         value = 20;
//         console.log(value);
//     }
//     update();
//     console.log(value);
// })();

// // Q49
// (function () {
//     var color = "Blue";
//     function changeColor() {
//         var color = "Red";
//         console.log("Inside:", color);
//     }
//     changeColor();
//     console.log("Outside:", color);
// })();

// // Q50
// (function () {
//     var marks = 70;
//     function showMarks() {
//         var marks = 95;
//         console.log("Inside function:", marks);
//     }
//     showMarks();
//     console.log("Outside function:", marks);
// })();

// // Q51
// (function () {
//     function outer() {
//         var teacher = "Kartik Sir";
//         function inner() {
//             var student = "Jenil";
//             console.log(student);
//             console.log(teacher);
//         }
//         inner();
//     }
//     outer();
// })();

// // Q52
// (function () {
//     function parent() {
//         var a = "Parent";
//         function child() {
//             var b = "Child";
//             function grandchild() {
//                 var c = "Grandchild";
//                 console.log(a);
//                 console.log(b);
//                 console.log(c);
//             }
//             grandchild();
//         }
//         child();
//     }
//     parent();
// })();

// // Q53
// (function () {
//     function outer() {
//         var secret = "Hidden";
//         function inner() {
//             console.log(secret);
//         }
//         inner();
//     }
//     try {
//         inner();
//     } catch (e) {
//         console.log(e.name + ": " + e.message);
//     }
//     outer();
// })();

// // Q54
// (function () {
//     function createMessage() {
//         var greeting = "Hello";
//         function show() {
//             console.log(greeting + " students");
//         }
//         return show;
//     }
//     var messageFunc = createMessage();
//     messageFunc();
// })();

// // Q55
// (function () {
//     function studentInfo() {
//         var name = "Jenil";
//         var course = "JavaScript";
//         function display() {
//             console.log("Name:", name);
//             console.log("Course:", course);
//         }
//         display();
//     }
//     studentInfo();
// })();

// // Q56
// (function () {
//     function test() {
//         x = 100;
//     }
//     test();
//     console.log(x);
// })();

// // Q57
// (function () {
//     if (true) {
//         var x = 20;
//     }
//     console.log(x);
// })();

// // Q58
// (function () {
//     console.log(a);
//     var a = 10;
// })();

// // Q59
// (function () {
//     var x = 10;
//     var x = 20;
//     console.log(x);
// })();

// // Q60
// (function () {
//     function calculate() {
//         let total = 0;
//         for (let i = 1; i <= 5; i++) {
//             total = total + i;
//         }
//         console.log(total);
//     }
//     calculate();
// })();