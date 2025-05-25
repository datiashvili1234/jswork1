const redBtn = document.querySelector(".redBtn")
const blueBtn = document.querySelector(".blueBtn")
const yellowBtn = document.querySelector(".yellowBtn")
const greenBtn = document.querySelector(".greenBtn")

const red = document.querySelector(".red")
const blue = document.querySelector(".blue")
const yellow = document.querySelector(".yellow")
const green = document.querySelector(".green")

redBtn.addEventListener("click", ()=>{
    console.log(10)
    red.style.zIndex = "4"
    blue.style.zIndex = "3"
})
blueBtn.addEventListener("click", ()=>{
    blue.style.zIndex = "3"
    yellow.style.zIndex = "2"
})
