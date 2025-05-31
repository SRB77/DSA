//*Content of classes goes here
let prompt = require("prompt-sync")();
// let a = 10;
// console.log(a)
//? Sum of 2 integers
// let a = 30;
// let b = 40 ;
// console.log(a+b);

//? Relation between Integer and String
/*
string + string = string //> {Concatination}
string + integer = string 
//> If we have String in any side of addition it will always result a string with help of concatination.
Integer +Integer = Integer //>{Arithimatic }
 */
// let a = 'hello ';
// let b = 'world';
// console.log(a+b ,typeof(a+b));  //> String +String

// let name = 'chandan';
// let num = 10
// console.log(name+num , typeof(name+num));//> String + Integer

//? Beautiful Question ;
// let a = 30;
// let b = 50;
// console.log('sum of ' + a + ' and ' + b + ' is ' + (a+b));

//? Type Coercion :
//? ACCEPT AND PRINT
// let name = prompt(`Entere your name : `);
// console.log(name);
//? SWAP 2 VARIABLE WITH 3 DIFFERENT METHOD
//> With Extra Variable .
// let a = 10;
// let b = 20;
// let c = a;
// a = b;
// b = c;
// console.log(b, a);
//> Using mathemtical operator .
// let num1 = 10;
// let num2 = 20;
// num1 = num1+num2; //>30
// num2 = num1-num2; //> 30-20 = 10
// num1 = num1-num2; //> 30-10(num2) = 20 
// console.log(num1,num2);
//> Using destructuring;
// let num1 = 35;
// let num2 = 46;
// [num1,num2] = [num2,num1];
// console.log(num1,num2);
