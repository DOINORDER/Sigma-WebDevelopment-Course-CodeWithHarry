//Loops in JavaScript

console.log("I am a tutorial on Loops");

let a = 1;
console.log(a);

// for (let i = 0; i < 10; i++) {
//     console.log(a+i)

// }

for (let i = 0; i < 100; i++) {
  console.log(a + i);
}

let obj = {
  name: "sagar",
  role: "developer",
  company: "not faang",
};

for (const key in obj) {
  // const element = obj[key];
  console.log(key);
}

for (const c of "Sagar") {
  console.log(c);
}

let i = 9;
while(i < 6){
    console.log(i)
    i++;
}

let j = 5;
do {
   console.log(j) 
   i++;
} while (i < 6);