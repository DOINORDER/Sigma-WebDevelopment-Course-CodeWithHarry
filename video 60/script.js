//Strings

// >> Write anything inside double quote i.e. " ", it is called STRING.
//Array type character is known as string

console.log('this is a string tutorial')

let a = 'SagarMalasi' //Sagar is a String here
console.log(a)

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);

console.log(a.length)

let friend  = 'Rohan'
let name = 'Sagar'
console.log("his name is " + name + " and his friends name is " + friend)
console.log(`his name is ${name} and his friends name is ${friend}`)

console.log(friend.toUpperCase())
console.log(name.toLowerCase())

console.log(name.slice(1, 5))

console.log(friend.replace("Ro", "78")) ///replaces "Ro" from Rohan to 78han
console.log(friend.slice(1))

let p = "Rahul"
let q = "Priya"
console.log(p.concat(a, "rahul", "Priya", "Sneha"))