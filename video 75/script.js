console.log("Sagar Is a Coder");

setTimeout(() => {
  console.log("I am inside the set time out");
}, 2000);
setTimeout(() => {
  console.log("I am again inside the set time out");
}, 3000);

console.log("The end");

const fn = () => {
  console.log("Nothing");
};
const callback = (arg) => {
  console.log(arg);
  fn();
};
const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Sagar");
  document.head.append(sc);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
