//* Class 4 is normal loops so no notes  5 with some Example ,Concept and HomeWork ;

let prompt = require('prompt-sync')();


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


