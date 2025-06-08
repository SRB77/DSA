let prompt = require('prompt-sync')();
/* 
let i = 0
while (i<10){
    process.stdout.write("* ");
    i++;
}
console.log();
i=0
while (i<10){
    process.stdout.write("* ");
    i++;
}
console.log();
i=0
while (i<10){
    process.stdout.write("* ");
    i++;
}
console.log();
i=0
while (i<10){
    process.stdout.write("* ");
    i++;
}
console.log();
i=0
while (i<10){
    process.stdout.write("* ");
    i++;
}
console.log(); */
// ? The above is the repetitive solution and for that we have nested loops here the nested loop solution . 

//> Example 1 :-
/*let length = prompt(`Enter the length of the square: `);
for(let i = 1;i<=length;i++){
    for(let j = 1;j<=length;j++){
        process.stdout.write("* ");
    }
    console.log();
}*/

//> Right angle triangle
/*
let n = prompt(`Enter the number of rows: `);
for (let i = 1;i <=n;i++){  //> The numbre of rows will actually be the input number . 
    for(let j = 1;j<=i;j++){ //> and the inner loops i mean the columns is exactly the row number so . 
        process.stdout.write("* ");
    }
    console.log();
}
*/



//> Right angle number pattern 
/*
let number = prompt(`enter the number for pattern : `);
for (let i = 1 ; i <= number;i++){
    for(let j = 1;j<=i;j++){
        process.stdout.write(`${j} `);
    }
    console.log()
} */

//> Inverted right angle triangle
/*
let number = prompt(`Enter the number for Stars : `);
for (let i = number; i>=1;i--){
    for(let j = 1; j <=i;j++){
        process.stdout.write("* ");
    }
    console.log();
} */