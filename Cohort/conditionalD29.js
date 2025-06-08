//*Conditional  in Details only . 
let prompt = require('prompt-sync')();
//? Leap year Question For Explantion .
// let year = prompt(`Enter Your Year for Check : `);
// if(year%4 ==0 && year%100 != 0){
//     console.log(`This is a leap year`);
// }else if (year %4 ===0 && year%100 === 0 && year%400 ===0){
//     console.log(`This year is a leap year`);
// }else{
//     console.log(`This year is not a Leap year `);
// }
//? Calculate Total Payable Amount .
// let amount = Number(prompt(`Enter your Amount : `));
//   let discount = 0;
//   if (amount > 0 && amount <= 5000) {
//     discount = 0;
//   } else if (amount > 5000 && amount <= 7000) {
//     discount = 5;
//   } else if (amount > 7000 && amount <= 9000) {
//     discount = 10;
//   } else if (amount > 9000) {
//     discount = 20;
//   } else {
//     console.log("Invalid Input");
//   }
// console.log( amount - (discount * amount) / 100);


//? Calculate the Electricty Bill .
// let unit = Number(prompt(`Enter a Unit : `));
// let amount = 0;
// if (unit >0 && unit<=100 ) {
//     amount = unit * 4.2;
// }
// if(unit > 100 && unit <=200){
//     amount = (100*4.2)+(unit-100)*6 
// }
// if(unit>200 && unit <= 400){
//     amount = (100*4.2)+(100*6)+(unit-200)*8
// }
// if(unit>400){
//     amount = (100*4.2)+(100*6)+(200*8)+(unit-400)*13
// }
// console.log(amount.toFixed(1));

//*Time For assignment 
//? Question 1 {Indian currency Notes breakdown}
// let amount = Number(prompt(`Enter Amount : `));
// while (amount > 0) {
//     noteCalc = `2000 X ${Math.floor(amount / 2000)} `;
//     if (amount >= 2000) {
//         amount -= 2000 * Math.floor(amount / 2000);
//     }else noteCalc += `2000 X 0 `; //*for 2000 note is not available.
//     if (amount >= 500) {
//         noteCalc += `500 X ${Math.floor(amount / 500)} `;
//         amount -= 500 * Math.floor(amount / 500);
//     }else noteCalc += `500 X 0 `; //*for 500 note is not available.
//     if (amount >= 200) {
//         noteCalc += `200 X ${Math.floor(amount / 200)} `;
//         amount -= 200 * Math.floor(amount / 200);
//     }else noteCalc += `200 X 0 `; //*for 200 note is not available.
//     if (amount >= 100) {
//         noteCalc += `100 X ${Math.floor(amount / 100)} `;
//         amount -= 100 * Math.floor(amount / 100);
//     }else noteCalc += `100 X 0 `; //*for 100 note is not available.
//     if (amount >= 50) {
//         noteCalc += `50 X ${Math.floor(amount / 50)} `;
//         amount -= 50 * Math.floor(amount / 50);
//     }else noteCalc += `50 X 0 `; //*for 50 note is not available.
//     if (amount >= 20) {
//         noteCalc += `20 X ${Math.floor(amount / 20)} `;
//         amount -= 20 * Math.floor(amount / 20);
//     }else noteCalc += `20 X 0 `; //*for 20 note is not available.
//     if (amount >= 10) {
//         noteCalc += `10 X ${Math.floor(amount / 10)} `;
//         amount -= 10 * Math.floor(amount / 10);
//     }else noteCalc += `10 X 0 `; //*for 10 note is not available.
//     if (amount >= 5) {
//         noteCalc += `5 X ${Math.floor(amount / 5)} `;
//         amount -= 5 * Math.floor(amount / 5);
//     }else   noteCalc += `5 X 0 `; //*for 5 note is not available.
//     if (amount >= 2) {
//         noteCalc += `2 X ${Math.floor(amount / 2)} `;
//         amount -= 2 * Math.floor(amount / 2);
//     } else noteCalc += `2 X 0 `; //*for 2 note is not available.
//     if (amount >= 1) {
//         noteCalc += `1 X ${Math.floor(amount / 1)} `;
//         amount -= 1 * Math.floor(amount / 1);
//     } else noteCalc += `1 X 0 `; //*for 1 note is not available.
// }
// console.log(noteCalc);

//? Question 2 {Movie Rating and all}

// let rating = parseFloat(prompt(`Enter rating First : `)).toFixed(1);
// let movieName = prompt(`Enter the Name of Movie :`); 
// if (rating > 0.0 && rating <= 2.0) {
//   console.log(`${movieName} is a Flop`);
// } else if (rating > 2.0 && rating <= 3.4) {
//   console.log(`${movieName} is a Semi-Hit`);
// } else if (rating > 3.5 && rating <= 4.5) {
//   console.log(`${movieName} is a Hit`);
// } else if (rating > 4.6 && rating <= 5.0) {
//   console.log(`${movieName} is a SuperHit`);
// }

//? Question 3 {Write a program to calculate the Salary}


// ! Session 3 is more or less about these above 3 Question and bit explanation of Loops and types only . 

//*  Class 4 is all about this and some questions are in SessionFive.js 
//> Notes Of loop Therotical . 
//? Defination . 
// Loop is a block of code which perform some task regularly on a specific condition . 
//? How many type of Loops are there .
// There are only 2 type of Loops
//     1> Entry Control (For loop , while loop);
//     2> Exit Control (do whil loop )
//? It is A Valid Code . 
// for (;;){   
//     console.log(`Infinity`);
// }
//>For loop don't need those initializer , condition  , increamnet it's all optional . we do provide condition just perform our specific Task