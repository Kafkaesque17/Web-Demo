//selecting Elements
const hamMenu = document.querySelector("#nav-menu");
const extendMenu = document.querySelector("#nav")
const mobileMenu = document.querySelector("#mobile-nav-menu")

//Event Listeners
hamMenu.addEventListener("click",hamfunc);





//Functions

//for Mobile menu
function hamfunc(e){
   mobileMenu.classList.add("left-[0]","h-[100vh]")
   extendMenu.classList.add("h-[100vh]")
}