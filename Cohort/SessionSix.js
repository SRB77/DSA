//* Class 6 Learning and Example .
let prompt = require("prompt-sync")();

//* Break and Continue. 
//! Therory : - 
// ? so both break and continue are used to control the flow of execution of the loop.
//! Break : - 
//?The break statement is used to terminate the loop immediately when a certain condition is met.
//! Continue : - 
//? The continue statement is used to skip the current iteration of the loop and move on to the next iteration.

//> Code Example : -
// let n = 10 ;
// for(let i = 0 ; i <=n;i++){
//     if(i==5) break;
//     console.log(i);
//     //ouput : 0 1 2 3 4
// }   
// for(let i = 0 ; i <=n;i++){
//     if(i==4) continue;
//     console.log(i);
//     //ouput : 0 1 2 3 5 6 7 8 9 10
// }

//* While Loop.

//>Syntax : -
// while(condition){
    // changes or operations goes here
// }

//> Code Example : -
// let n = 10 ,i=1;
// while(i<=n){
//     console.log(i);
//     i++;
// }

//> Sum of N Terms .
// let n = prompt(`Enter the Number : `) , i = 1,sum=0;
// while(i<=n){
//     sum +=i;
//     i++;
// }
// console.log(sum);

//? Note :-  why and when we should use while loop ?

//? Ans :-  When we don't know the number of iteration we can use while loop.just like below  example . In the below example we don't know how many times the loop will run so we can use while loop.

//>Code Example (SUM OF DIGITS): -

// let number = prompt(`Enter the Number : `); //34567
// let sum = 0;
// while (number>0){
//     let lastDigit = number % 10;
//     sum += lastDigit;
//     number = Math.floor(number/10);
// }
// console.log(sum);

//> Code Example (REVERSE OF A NUMBER): -

// let number = prompt(`Enter the Number : `); //34567
// let reverse = 0 ;
// while(number>0){
//     rem = number%10;
//     reverse = (reverse*10)+rem
//     number = Math.floor(number/10)
// }
// console.log(reverse)


//* ASSIGNMENTS :
// ? Question 1
// let num = prompt(`Provide a number : `);
// let sum = 0 ;
// if(num.length === 10 ){
//     for (let i = 1; i < num.length+1 ; i++) {
//       sum += Number(num[i-1])*i;
//       console.log(sum);
//     }
//     if (sum % 11 === 0) {
//       console.log(`The Given number is ISBN number`);
//     } else {
//       console.log(`Not a valid ISBN number .`);
//     }
// }else{
//     return "please Enter Valid Number";
// }

//? Question 2
//! Not cleared Yet have to go through again
// let num1 = prompt(`please enter first number : `);
// let num2 = prompt(`please enter Second number : `);
// if (num1 > 0 && num2 > 0) {
//   while (num2 !== 0) {    //> Have to understand this logic
//     let rem = num1 % num2;
//     num1 = num2;
//     num2 = rem;
//   }
// }
// console.log(`GCD /HCF is ${num1}`);

//?Question 3
// let number = prompt(`Enter number for check : `);
// let numCopy = number;
// let sum = 0 ;
// for(let i = 0 ; i < String(number).length ; i++){
//   let lastdigit = numCopy % 10;
//   sum += lastdigit;
//   numCopy = Math.floor(numCopy / 10);
// }
// if(number % sum === 0 ){
//   console.log(`Number checked True`);
// }else{
//   console.log("number Checked False");
// }

//? Question 4 .
// let number = prompt(`Enter number for Check : `);
// if(Number.isInteger(Math.sqrt(number))){
//   console.log(`Checked True `)
// }else{
//   console.log(`Checked False`);
// }

//? Question 5
// let number = prompt(`Enter number For Check : `);
// let sum = 0;
// for (let i = 1; i < number; i++) {
//   if (number % i === 0) {
//     sum += i;
//   }
// }
// if (sum > number) {
//   console.log(`Abundent Number`);
// } else {
//   console.log(`Not an Abundent Number`);
// }

//? Question 6

// let number = prompt(`Enter your Number : `);
// let one = 0 ;
// let two = 1;
// let sum = 0 ;
// let series = "0 " + "1 "
// while(sum<number){
//   sum = one + two;
//   one = sum - one ;
//   two = sum ;
//   series += `${two} `;
// }
// console.log(series)

// ? Question 7
//todo I have Some Question Related Doubt
// let input = prompt(`Enter the number : `);

//? Question 8
// let primeCheck = prompt(`Enter number for primeFactors : `);
// let iter = 2;
// let factors = [];
// while (iter < primeCheck) {
//   if (primeCheck % iter === 0) {
//     factors.push(iter);
//     primeCheck = primeCheck / iter;
    //> Understand The Logic :
        // todo Here the Logic is when  we will get the First prime Factor then they reduce the number by that facotr mns if we take 30 as example and 2 is the First prime Factor then it will do this 30/2  = 15 and next operation will happend according to the 15 new Number / PrimeCheck in this Question .
//   }
//   iter++;
// }
// if (primeCheck > 1) {
//   factors.push(primeCheck);
// }
// console.log(`The prime Factors are : ${factors.join(",")}`);

//? Question 9 

// let choice = prompt(`Enter your Choice between 3 : `);
// switch (choice){
//     case "circle":
//         let radius = Number(prompt(`enter Radius of Circle : `));
//         console.log(`Area of circle is :${Math.PI * radius * radius}`);
//         break
//     case "rectangle":
//         let length = Number(prompt(`Enter the length of rectangle : `));
//         let width = Number(prompt(`Enter the width of rectangle : `));
//         console.log(`Area of rectangle is : ${length*width}`);
//         break
//     case "triangle":
//         let base = Number(prompt(`Enter the base of rectangle : `));
//         let height = Number(prompt(`Enter the height of rectangle : `));
//         console.log(`Area of triangle is : ${1/2 * base * height}`);
//         break 
//     default:
//         console.log(`Case is out of Algo .`);
//         break
// }

//? Question 10 

// let number = Number(prompt(`Enter a Number: `));
// let square = number * number ;
// let squareString = String(square);
// let sum = 0 ;
// for (let i = 0 ; i < String(square).length;i++){
//     sum += Number(squareString[i]);
// }

// if (sum === number){
//     console.log(`Neon Number`);
// }else{
//     console.log(`Not Neon Number`);
// }
//? Question 11
// let num = prompt(`Enter the Number :`);
// let max = Number(num[0]);
// for (let i=1 ; i < num.length;i++){
// 	if(num[i]>max){
// 	    max = num[i];
// 	}
// }
// console.log(max);
//
//? Question 14 :


//let number = prompt(`Enter number : `);
//let sum = 0 ;
//for (let i = 0; i < number.length ; i++){
//	if(Number(number[i]%2 ===0)){
//		sum += Number(number[i]);
//	}
//}
//console.log(`The sum of Even digits are : ${sum}`);

//? Question 15 :

// let month = prompt(`Enter the name of the Month`).toLowerCase();
// console.log(month);


