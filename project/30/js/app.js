// toggle menu 
const hamburger = document.querySelector(".hamburger")
const nav_menu = document.querySelector(".nav_menu")

hamburger.addEventListener("click", (e) => {
    nav_menu.classList.toggle("active")
})









// تغيير الخلفية ================
let landing = document.querySelector(".landing")

let img_Array = [
    "landing.jpg",
    "landing03.webp",
    "landing04.webp",
    "landing05.webp",
    "landing06.webp",
]

setInterval(() => {
    let randomNumber = Math.floor(Math.random() * img_Array.length)
    landing.style.backgroundImage = `
        url("images/${img_Array[randomNumber]}")
    `
}, 3000);









// ==============================

var span = document.getElementsByTagName("article")
var div = document.querySelectorAll(".feat")

var x = 0

span[1].onclick = () => {

    x++

    for (var i of div) {

        if (x == 0) {
            i.style.left = "0px"
        }

        if (x == 1) {
            i.style.left = "-740px"
        }

        if (x == 2) {
            i.style.left = "-1480px"
        }

        if (x == 3) {
            i.style.left = "-2220px"
        }

        if (x == 4) {
            i.style.left = "-2960px"
        }

        if (x > 4) {
            x = 4
        }

    }
}


span[0].onclick = () => {

    x--

    for (var i of div) {

        if (x == 0) {
            i.style.left = "0px"
        }

        if (x == 1) {
            i.style.left = "-740px"
        }

        if (x == 2) {
            i.style.left = "-1480px"
        }

        if (x == 3) {
            i.style.left = "-2220px"
        }

        if (x < 0) {
            x = 0
        }

    }
}









// ==============portfolio================
var index_value = 1

show_img(index_value)

function btm_slide(e) {
    show_img(index_value = e)
}

function side_slide(e) {
    show_img(index_value += e)
}

function show_img(e) {
    var i;
    const img = document.querySelectorAll(".card")
    const sliders = document.querySelectorAll(".btm_sliders span")

    if (e > img.length) {
        index_value = 1
    }

    if (e < 1) {
        index_value = img.length
    }

    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none"
    }

    for (i = 0; i < sliders.length; i++) {
        sliders[i].style.background = "rgba(255, 255, 255, 0.1)"
    }

    img[index_value - 1].style.display = "flex"
    sliders[index_value - 1].style.background = "#fff"

}