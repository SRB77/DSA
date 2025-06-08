const prompt = require ('prompt-sync')();

//> Right angle Alphabet Triangle Pattern: 
/*
let number = prompt(`Enter a number : `);

for(let i = 1; i<=number; i++){
    for(let j = 1; j<=i; j++){
        process.stdout.write(String.fromCharCode(j+64));
    }
    console.log()
}

//! This line is "process.stdout.write(String.fromCharCode(j+64));" basically helping me to convert ASCII to String 
*/


//> Create mirror Right angle Triangle .

/*
let number = prompt(`Enter a number : `);
for (let i = number; i>= 1 ;i--){
    // let temp = number - (i-1); 
    //> jUST ADDING EXTRA SPACE SO I REMOVED IT . AND ADDED LIL DIFFERENT LOGIC IN THE 2ND LOOP
    for(let j = 1; j<i ; j++){
        process.stdout.write("  ");
    }
    for(let k = 1; k<= number-i+1 ;k++){
        process.stdout.write("* ");
    }
    console.log()
}
*/

//> V PATTERN : 
/*
let number = Number(prompt(`Enter a number : `));
console.log();

for(let i = 1; i<=number; i++){
    for(let j = 1; j<=( number*2)-1; j++){
        if(i===j || i+j === number*2){
            process.stdout.write("* ");
        } else process.stdout.write("  ");
    }
    console.log();
}
*/
//> X  PATTERN :

/*
let number =  Number(prompt(`Enter a number  : `));
for(let i = 1; i<=number; i++){
    for(let j = 1; j<=number;j++){
        if(i===j || i+j === number+1){
            process.stdout.write("* ");
        }
        else{
            process.stdout.write("  ");
        }
    }
    console.log();
}
*/

