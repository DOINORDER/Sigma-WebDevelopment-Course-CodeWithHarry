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

num.slice(1, 3)
console.log(num)


let a = [1,93,5,6,88]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}


a.forEach((value, index, arr) => {
    console.log(value, index, arr)
})


let obj = {
    a:1,
    b:2,
    c:3
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
    }
}

for (const value of a) { //iterator is value
    console.log(a)
}

// map()

let mapArr = [1,3,5,7,11];
// let newArr = []
// for (let index = 0; index < mapArr.length; index++) {
//     const element = mapArr[index];
//     newArr.push(element**2) //This will fill up the newArr by converting mapArr into their respective squares
// }

let newArr = arr.map((e, index, array)=>{
    return e**2
})
console.log(newArr)