//Arrays

//  >> Arrays is the collection of elements having same data types

let arr = [1, 2, 4, 5, 7];
//index = 0, 1, 2, 3, 4 , 5
console.log(arr);
console.log(arr.length);

//Array is mutable i.e. we can change value of arrays without forming new arrays while on the otherhand strings are immutable

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);
console.log(arr[1]);

arr[3] = 4653;
console.log(arr[3]); //The third index of array will be changed as 4653

arr[2] = "Sagar";
console.log(arr[2]);
console.log(typeof arr);

//array methods

console.log(arr.toString());
console.log(arr.join(" and ")); //Important method
console.log(arr.pop(3));
arr.push("Rocket Science");
console.log(arr)

let a1 = [1, 2, 3, 4, 5];
let a2 = [9, 8, 7, 6, 0];

c = arr.concat(a1, a2)
console.log(c) //This will bind the two arrays together without changing them

//splice method

let num = [1,2,3,4,5]
console.log(num.splice(2,4)) 
num.splice(2,4, 54, 67)

console.log(num) // 3 and 5 will be removed as they are at the index position of 2 and 4