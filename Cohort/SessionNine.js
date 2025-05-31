//* Day 9 learnign Array in js Basics .
let prompt = require("prompt-sync")();
//> Strong Number
// let number = prompt(`Enter the Number : `);
// let ans = 0 ;
// for(let i = 0 ; i < number.length; i++){
//     let digit = parseInt(number[i])
//     let fact = 1 ;
//     for (let j = 1 ; j <= digit ; j++ ){
//         fact = fact * j;
//     }
//     ans += fact;
// }
// if (ans == number){
//     console.log(`Strong Number`);
// }else{
//     console.log(`Not a strong number`);
// }

// let arr = [10,20,30,40];
//> console.log(arr); After creation of Array .
// arr.push(100);
//> console.log(arr); After push
// arr.unshift(3000);
//> console.log(arr); After unshift
// arr.shift();
//> console.log(arr); After shift
// arr.pop();
//> console.log(arr); After pop
// console.log(arr.length); //> Checking Length of Array.

// arr[10]=300;
// console.log(arr)
// let array = new Array(4); //> Length will be 4 and index from 0 to 3
// array[1] = 0 ;
// array[4] = 5;
// console.log(array);

//* Session 2 on Array Solving more Question .
//? Find out Second max Element of an array .

// let input = prompt(`Enter Items by comma . : `).split(",").map(str => Number(str));
// let max = input[0];
// let secondmax = 0;
// for(let i = 1 ; i < input.length;i++){
//     if(input[i]>max){
//         secondmax = max;
//         max = input[i];
//     }else if(input[i]>secondmax && input[i] !== max){
//> we Handle the Case of both equal max number.
//         secondmax=input[i];
//     }
// }
// console.log(`Second Maxm number in the array is : ${secondmax}`);

//! Example :   50 ,45, 46,23,32,545,6,4,2,3,245,5,62
//> Largest number = 50 ; Secondmax = 0 ;
// > Largest number = 545 ; Secondmax = 50;
//?  largest number = 545 ;  But here the else if code will run and 245 will be the second max which is right . otherwise 50 would be the Second max which is wrong
//todo We have to check the code for the case where all elements will be same .

//? Reverse an Array .

//!Method One (With Extra Space/Array) :
// let arr = [1,2,3,4,5,6];
// let reversedArray = [];
// let i = 0 ; //> This will help to create new Reverse array , indexing .
// for( let j = arr.length -1 ; j>=0 ; j--){
//     reversedArray[i] = arr[j];
//     i++
// }
// console.log(reversedArray);

//!Method Two (Without Extra Space/Array) :
// let arr = [1, -2, 3, -4, 5, 6];   //> Used Two pointer Approach .
// let i = 0 ;
// let j = arr.length-1;

// while(i<j){
//     let temp = arr[i] ;
//     arr[i] = arr[j];
//     arr[j] =temp;
//     j--
//     i++
// }
// console.log(arr);

//? ALL ZERO INTO LEFT :

// let arr = [1,0,20,0,5,505,0,3,30,0,330,3,23,0,3,0];
// let i = 0 , j = 0 ;
// while(i<arr.length){
//     if(arr[i] == 0 ){
//         [arr[i],arr[j]] = [arr[j],arr[i]];  //> This is just to Swap .
//         j++
//     }
//     i++  //> If non Zero number then increase I only .
// }
// console.log(arr);

//? Rotate an array to left by 1 ;

// let arr = [21,343,45,566,7,78];
// let first = arr[0];
// for(let i = 0 ; i < arr.length-1 ; i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = first;
// console.log(arr);

//? Rotate an array to Right by 1 ;

// let arr = [23,24,435,564,6,799,1];
// let last = arr[arr.length-1];
// for(let i = arr.length-1 ; i > 0  ; i--){
//     arr[i] = arr[i-1];
// }
// arr[0]=last;
// console.log(arr);




let x = 10 ; 
let y = x ;
console.log(x , y );
x = 15 ; 
console.log(x , y );