//Conditional Tutorial

console.log('Hello i am conditional tutorial')

let age = 200;

if (age == 18){
    console.log('You can drive')
}
else{
    console.log('You cannot drive')
}

let grace = 2
if ((age+grace)>18){
    console.log('You can drive')
}
else{
    console.log('you cannot drive')
}

//comment
/*
Multi line comment
 */

//If-Else ladder

let marks = 50;
if(marks > 33){
    console.log('you passed')
}
else if(marks => 50){
    console.log('are you kidding me')
}
else{
    console.log("you failed")
}


let a = 6;
let b = 8
let c = a>b ? (a - b) : (b - a);