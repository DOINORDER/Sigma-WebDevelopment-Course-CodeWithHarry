let button = document.getElementById("btn")

button.addEventListener("dblclick", () => {
// document
alert("Iwasclicked")
document.querySelector(".box").innerText = "yayyyyyyyyyyyyyyy, you were clicked!!!!"
})

button.addEventListener("contextmenu", () => {
    alert("Right click please")
})