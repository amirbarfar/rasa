// menu

let iconOpen = document.querySelector(".open")
let iconClose = document.querySelector(".close")
let menuMobile = document.querySelector(".container-mobile")

iconOpen.addEventListener("click"  , open)
iconClose.addEventListener("click" , close)

function open (){
    menuMobile.style.right = "0"
    menuMobile.style.transition = "all 0.2s linear";
}
function close (){
    menuMobile.style.right = "-250px"
}