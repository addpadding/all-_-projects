const hamburger = document.querySelector(".hamburger")
const nav_menu = document.querySelector(".nav_menu")

hamburger.addEventListener("click", (e) => {
    nav_menu.classList.toggle("active")
})
