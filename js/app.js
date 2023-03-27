const toggleBtn = document.querySelector(".toggle")
const closeBtn = document.querySelector("#close")
const side = document.querySelector("nav .navigation ul")
const navbar = document.querySelector("nav")
const date = document.querySelector("#date")

date.innerText = new Date().getFullYear()




toggleBtn.addEventListener("click", function(){
    side.classList.add("active")
    console.log("Minor");
})
closeBtn.addEventListener("click",function(){
    side.classList.remove("active")
})

//scroll
window.addEventListener("scroll",()=>{
    side.classList.remove("active")
})

//BLOG

const categoryContainer = document.querySelectorAll("#category .category-box .category-detail")

categoryContainer.forEach(function(container){
    const btn = container.querySelector("a")

    btn.addEventListener("click",function(){
        container.classList.toggle("show")
    })
    
})
/////************PRELOADER JS*********** */
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("show-preloader")
})
