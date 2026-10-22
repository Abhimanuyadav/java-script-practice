// // for (let i=1; i=5; i++){
// //     let bag = ""
// //     for(let i=1; i<=5; i++){
// //         bag += "*"
// //     }
// //     console.log(bag)
// // }


// // for (let i=1; i<=5; i++){
// //     let bag = ""
// //     for(let j=1; j<=i; j++){
// //         bag += "*"
// //     }
// // console.log(bag)



// // function greet(name){
// //     return 'welcome to Guruku, $(name)'
// // }



// // function greet(){
// //     return "welcome to codinggita";
// // }
// // console.log(greet());


// // let greet = function (){
// //     return "welcome to codinggita";
// // };
// // console.log(greet())


// // function greet(name){
// //     return"welcome to codinggita"
// // }
// // console.log(greet())


// // function multiply(a,b){
// //     return a*b;
// // };
// // console.log(multiply(7,5));


// // function fullName(first, last) {
// //     return first + " " + last;
// // }

// // console.log(fullName("John", "Doe")); 


// // function isEven(num) {
// //     return num % 2 === 0;
// // }
// // console.log(isEven(4)); 
// // console.log(isEven(7));      


// // function isEven(num){
// //     if(num%2==0){
// //         return true
// //     else{
// //         return false
// //     }
// //     }
// //     recturn (num%2==0)
// // }


// // function greet(){
    
// // };
// // let x = greet();
// // console.log(x)


// // function cube(n){
// //     return n**3;

// // }
// // console.log(cube(4))


// // function isPositive(num){
// //     if(num>0){
// //         return true;
// //     }else{
// //         return false
// //     }
// // }
// // console.log(isPositive(-5))


// //  let m1 = 85, m2 = 92, m3 = 78;
// // let avg1 = (m1 + m2 + m3) / 3;

// // let x1 = 70, x2 = 60, x3 = 80;
// // let avg2 = (x1 + x2 + x3) / 3;


// // function sumOfThree(a, b, c) {
// //     return a + b + c;
// // }

// // console.log(sumOfThree(10, 20, 30)); 



// // function scope
// // Inside a function, any variable you declare becomes local to that function.
// // function myFunc(){
// //     let x = 10
// //     console.log(x)
// // }




// // Global Scope:
// // Variables declared outside any function are accessible everywhere.


// // function displayAge() {
// //   let age = 20; 
// //   console.log("Inside function:", age);
// // }

// // displayAge(); 


// // console.log("Outside function:", age);


// // function studentMarks() {
// //     var marks = 85;
// //     console.log(marks);
// // }

// // studentMarks(); // 85
// // console.log(marks); // Error: marks is not defined


// // function studentReport(name,m1,m2,m3){
// //   let total = m1+m2+m3;
// //   let avg = (total/3).toFixed(2);
// //   return "the student" + name+ "getting a total marks="+total+"and average = " +avg 
// // };
// // let result = studentReport("raj",89,90,98)
// // console.log(result)

// // function checkPass(avg){
// //   if(avg>=40){
// //     return "pass"
// //   }else{
// //     return "fail"
// //   }
// // };
// // let result = checkPass(78)
// // console.log(result)


// // function processMarks(m1, m2) {
// //   function sum() {
// //     return m1 + m2;
// //   }
// //   return sum();
// // }

// // console.log(processMarks(40, 50)); 



// // function main() {
// //   function helper() {
// //     return "Helper function called";
// //   }
// //   return helper();
// // }

// // console.log(main()); 



// // function calculateDimention(r){
// //     function findAera (r){
// //         let area = (22/7)*r*r
// //         return perameter 
        
// //     }
   
// //     function findPerameter(r){
// //         let perameter = 2*(22/7)*r
// //         return perameter.toFixed(2)
// //     }
// //     let area = findAera(r);
// //     let perimeter = findPerameter(r);
// //     return 'the circle has an area = ${area} & a permeter = ${perimeter}'
// // }
// // console.log(calculateDimention(3))


// // var college = "CodingGita";

// // function showCollege() {
// //     console.log(college);
// // }

// // showCollege();       // CodingGita
// // console.log(college); // CodingGita


// // function studentMarks() {
// //     var marks = 85;
// //     console.log(marks);
// // }

// // studentMarks(); // 85
// // console.log(marks); // Error: marks is not defined


// // function myFunc(){
// //     let name = "Ankit";   //function scope
// //     console.log(name);
// // }
// // console.log(myFunc())

// // if (true){
// //     let  name = "Ankit"
// //     console.log(name)

// // }
// // console.log(name)

// // function main(){
// //     function inner(){
// //         return "hi"
// //     };
// //     console.log(inner());
// //     return "hello"
// // };
// // console.log(main());

// //20
// function processStudent(name, m1, m2, m3) {
//     function calculateTotals() {
//         let total = m1 + m2 + m3;
//         let average = total / 3;
//         return { total: total, average: average };
//     }

//     let results = calculateTotals();
//     let totalMarks = results.total;
//     let avgMarks = results.average;

    
//     let status = avgMarks >= 40 ? "Pass" : "Fail";

//     return `Student: ${name} | Total Marks: ${totalMarks} | Average: ${avgMarks.toFixed(2)} | Result: ${status}`;
// }


// function compareAverages(avg1, avg2) {
//     if (avg1 > avg2) {
//         return `First average (${avg1.toFixed(2)}) is higher than the second average (${avg2.toFixed(2)}).`;
//     } else if (avg2 > avg1) {
//         return `Second average (${avg2.toFixed(2)}) is higher than the first average (${avg1.toFixed(2)}).`;
//     } else {
//         return `Both averages are equal (${avg1.toFixed(2)}).`;
//     }
// }


// let report1 = processStudent("Alice", 85, 90, 88);
// let report2 = processStudent("Bob", 45, 50, 55);
// let report3 = processStudent("Charlie", 30, 35, 40);

// console.log("--- Student Reports ---");
// console.log(report1);
// console.log(report2);
// console.log(report3);

// console.log("\n--- Average Comparison ---");
// console.log(compareAverages(87.67, 50.00));


// function generateReport(name,m1,m2,m3){
//     function calaculateTotal(){
//         return m1+m1+m3;
//     }
//     function calaculateAverage(){
//         return calaculateTotal()/3;
//     }
// }


// for (var i=0; i<=5; i++){
//     console.log(i)
// }
// console.log(i)

// for (let i=0; i<=5; i++){
//     console.log(i)
// }
// console.log(i)

// for (const i=0; i<=5; i++){
//     console.log(i)
// }
// console.log(i)


function runLoops(){
    for (var i=1; i<=5; i++ ){
        console.log(i)
 
   }
   console.log(i)
}
runLoops();
console.log(i);