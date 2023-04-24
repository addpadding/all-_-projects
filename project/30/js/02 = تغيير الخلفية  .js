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
}, 1000);
