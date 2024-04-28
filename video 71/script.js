// let a = document.querySelector(".box").innerText
// console.log(a)

let a = (document.querySelector(".box").innerHTML = "Hey I am Sagar Malasi");
console.log(a);

let div = document.createElement("div");
div.innerHTML = "I have been inserted by <b>Sagar Malasi | Doinorder</b>";
div.setAttribute("class", "created");
document.querySelector(".container").append(div);

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterend, <b>I am under the water, please help me, it is too much raining here</b>")