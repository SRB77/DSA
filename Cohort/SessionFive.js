//* Class 4 is normal loops so no notes  5 with some Example ,Concept and HomeWork ;

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

//* While Loop : -
//? Therory : -
//? The while loop is a control flow statement in programming that allows you to repeatedly execute a block of code as long as a certain condition is true.
//? The syntax of the while loop is as follows:
//? while (condition) {
//?     // code to be executed
//? }

//? While Loop Examples

//> In for loop we do Declare , condition , change in the same line .But in case of While
//> Step 1 : declar /initialize
// let i = 1 ;
// let n = 5 ;
// while(i<=n){   //>Conditon
// console.log(`Hello world `);
// i++
//> Change
// }

//? Sum of N numbers using forloop .

// let n = 5 ,i=0,Sum = 0;
// while (i<=n){
//     Sum+=i
//     i++;
// }
// console.log(Sum);

//? Difference Between While and ForLoop ?
//> It's only about given condition , if we know exact itteration we have to do just like lenght of array is given . but if itteration was not sure then while loop is more preferable .

//!Special Case on MOD

//2%10 //> if left is smaller then always left will be the answer
// 2/10 //> In this case always get 0 or may be some floating value

//? Sum of integers in a number !

// let number = Number(prompt(`Enter a number for Sum : `));
// let sum = 0 ;
// while(number>0){
//     let lastDigit = number%10 ;  //> it will get the lastdigit everytime
//     sum += lastDigit //>it will update the sum
//     number  = Math.floor(number/10); //>and this will update the number
// }
// console.log(sum);

//? Reverse a Number ?
// let number = Number(prompt(`Enter a number for reverse : `));
// let reversedNumber = 0;
// while (number>0){
//     let lastDigit = number%10 ;
//     reversedNumber = reversedNumber*10 +lastDigit;
//! We have to understand the Above Line
//> so we have to reverse the number so we can directly lastdigit . so by multiplying 10 we will get the extra 0 everytime in the once place so we can add and ones place will continue taking the lastDigit .
//? Example : (654) > 0*10 :0+4 = 4 > 4*10:40+5 = 45 > 45*10:450+6 = (456)  #Reversed Number .
//     number = Math.floor(number/10);
// }
// console.log(reversedNumber);

//? check automorphic number :
// let number = Number(prompt(`Enter the number for Check : `));
// let length = `${number}`.length; //>Convert into String and give the Length .
// let square = number*number;
// if(square%Math.pow(10,length) == number){
//     console.log(`hey it's a automorphic number .`);
// }else{
//     console.log(`it's not `)
// }

//* Switch Case : -
//? Therory : -
//? The switch statement is a control flow statement in programming that allows you to execute different blocks of code based on the value of a variable.
//! Swicth case is using hashing behind the scene. so it's faster than if else. but only in constant matching . condition is not suited for switch case.

//>  The syntax of the switch statement is as follows:

//? switch (expression) {
//?     case value1:
//?         // code to be executed if expression === value1
//?         break;
//?     case value2:
//?         // code to be executed if expression === value2
//?         break;
//?     default:
//?         // code to be executed if expression does not match any of the cases
//? }

//> Switch Case Example : -
// let input = Number(prompt(`Enter a number from 1-3 : `));
// switch(input){
//     case 1:
//         console.log(`You Entered 1`);
//         break;
//     case 2:
//         console.log(`You Entered 2`);
//         break;
//     case 3:
//         console.log(`You Entered 3`);
//         break;
//     default:
//         console.log(`You Entered Wrong Input`);
// }

// > weeks switch case : -
// let days = prompt(`Enter days of weeks : `);

// switch(days){
//     case "Monday":
//         console.log(`Today is Monday`);
//         break;
//     case "Tuesday":
//         console.log(`Today is Tuesday`);
//         break;
//     case "Wednesday":
//         console.log(`Today is Wednesday`);
//         break;
//     case "Thursday":
//         console.log(`Today is Thursday`);
//         break;
//     case "Friday":
//         console.log(`Today is Friday`);
//         break;
//     case "Saturday":
//         console.log(`Today is Saturday`);
//         break;
//     case "Sunday":
//         console.log(`Today is Sunday`);
//         break;
//     default:
//         console.log(`Invalid Day`);
// }

//> how to do some condition in switch case : -

// let number = Number(prompt(`Enter a number : `));

// switch (true){
//     case number>14:
//         console.log(`Number is greater than 14`);
//         break;
//     case number<14:
//         console.log(`Number is less than 14`);
//         break;
//     case number==14:
//         console.log(`Number is equal to 14`);
//         break;
//     default:
//         console.log(`Invalid Input`);
// }

//> IF multiple cases have same operation :-

// let numOfdays = Number(prompt(`Enter days of weeks : `));

// switch (numOfdays) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//     // code to be executed if numOfdays is 1, 2, 3, 4, 5, 6, or 7
//     console.log(`It's a Weekday`);
//     break;
//   case 7:
//     // code to be executed if numOfdays is 7
//     console.log(`It's a Weekend`);
//     break;
//   default:
//     // code to be executed if numOfdays is not 1, 2, 3, 4, 5, 6, or 7
//     console.log(`Invalid day number`);
// }
