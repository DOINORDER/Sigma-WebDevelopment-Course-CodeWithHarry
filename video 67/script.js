//DOM

let a = "hello world";
console.log(a);

document.body.childNodes[1].childNodes;

let cont = document.body.childNodes[1]; //ChildNode which is at second place i.e. first index

cont.lastElementChild.style.color = "red";
cont.lastElementChild.style.backgroundColor = "yellow";

// NodeList(13)[
//   (text, comment, text, div.box, text, div.box, text, div.box, text, div.box)
// ];

document.body.firstElementChild;
document.body.firstElementChild.childNodes;
document.body.firstElementChild.children;

let tab = document.body.children[1]
document.body.children[1].rows

tab.style.backgroundColor = "cadetBlue"
tab.style.textAlign = "center"
tab.style.padding = "20px"