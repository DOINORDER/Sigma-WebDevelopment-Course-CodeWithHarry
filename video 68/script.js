console.log("Sagar Malasi");

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green"

document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "green";
});

document.querySelector(".container").contains(e[0])