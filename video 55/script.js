console.log("hey this is tutorial 55");

var a = 5;
var b = 5;
var c = "Sagar";

//JavaScript variable names are case sensitive

//Var is GLOBALLY SCOPED while let & const are BLOCK SCOPED

console.log(a + b + 8);
console.log(typeof a, typeof b, typeof c);

// const a1 = 6;
// a1 = a1 + 6;
// >> Not allowed

{
    let a= 10;
    console.log(a);
};

//DataTypes in JS

//--> Primitive data types { null, number, string, symbol, undefined, boolean, big int }
//--> Object

let x = "Sagar";
let y = 232;
let z = 232.4;
const p = true;
let r = null;
let q = undefined;
console.log(x + 3, y + -3)
console.log(typeof x, y, z, p, r, q)

let obj = {
    "name":"Sagar", 
    "job code": 5433,
    "is_handsome": true
};

console.log(obj);
obj.salary = "1cr";
console.log(obj);
obj.salary = '4cr';
console.log(obj);