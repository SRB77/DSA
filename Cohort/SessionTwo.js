//* MATH FUNCTION IN CLASS CONCEPT :-
const prompt = require("prompt-sync")();
// console.log(Math.ceil(10.4));
// console.log(Math.floor(10.9));
//> Both are opposite to each other as name suggest ceil is top and floor is down as example above .

// console.log(Math.round(10.4));
// console.log(Math.round(10.5));
//> The round Function is combination of Both floor and ceil , Try to run above example for better understanding .

//console.log(Math.abs(8));//> Change the negative into  positive

// console.log(Math.pow(5,2)); //> 5^2 ;
// console.log(Math.trunc(10.3345457679569856)); //> Remove everything after point .

// console.log(Math.sqrt(25));  //>Squareroot and cuberoot .
// console.log(Math.sqrt(40));
// console.log(Math.cbrt(40));
// console.log(Math.cbrt(27));

// console.log(Math.max(4.456,78,457,7,8.67,88,89.99,99,76.8,689,6.8,6,9.9,66,6.7,456))
// console.log(Math.min(34,34,545,6,6,767,67,678,8,9,35,57,8,9,0,3,656,7,8));
//> Max and min among numbers .

// Math.random(); //> Only 0-1 value comes here .

// let a = 234.6695495;
// console.log(a.toFixed(1));  //> Remove the given number value after the point .

//! Compound Interest .
// A = p*(1+(r/100))^t
// CI = A-P;
// > Here is the answer and above are the Formula .
// let p = Number(prompt(`Enter the Principle Amount : `));
// let r = Number(prompt(`Enter the rate of Interest : `));
// let t = Number(prompt(`Enter the time duration : `));
// let CalculateAmount = p * Math.pow(1 + r / 100, t);
// let CompoundInterest = CalculateAmount-p;
// console.log(CompoundInterest);

//? Generate OTP {USING MATH.RANDOM()}; 
// console.log(Math.floor(Math.random()*10000)); //>Range 0-9999.99.....
// console.log(Math.floor(Math.random()*9000+1000)); //> Range 1000-9999.99...

//? Calculate Area of Triangle {Heron's Formula};

// let sidea = Number(prompt(`Enter side a  : `));
// let sideb = Number(prompt(`Enter side b  : `));
// let sidec = Number(prompt(`Enter side c  : `));
// if (
//   sidea + sideb <= sidec ||
//   sidea + sidec <= sideb ||
//   sidec + sideb <= sidea
// ) {
//   console.log(`it's not possible`);
// }else{
//     let s = (sidea + sideb + sidec) / 2;
//     let AreaOfTriangle = Math.sqrt(s * (s - sidea) * (s - sideb) * (s - sidec));
//     console.log(Number(AreaOfTriangle.toFixed(1)));
// }
// //> Formula of semi parameter (a+b+c)/2
// //> Formula of heron's area of traingle {Math.sqrt(s*(s-a)*(s-b)*(s-c))}

//? Circumstances of Circle 
// let radius = prompt(`please Enter the radius : `);
// console.log(2*Math.PI*radius); //> 2PIR radius Formula .


