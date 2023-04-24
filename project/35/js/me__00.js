const slider_container = document.getElementById("slider_container")
const pre = document.getElementById("pre")
const next = document.getElementById("next")
const my_number = document.querySelectorAll(".my_number")
const parent_numbers = document.getElementsByClassName("parent_numbers")[0]


const arr_img = [

    `<img src="images/01.webp" class="img_slider" alt="">`,
    `<img src="images/02.webp" class="img_slider" alt="">`,
    `<img src="images/03.webp" class="img_slider" alt="">`,
    `<img src="images/04.webp" class="img_slider" alt="">`,
    `<img src="images/05.webp" class="img_slider" alt="">`,
    `<img src="images/04.webp" class="img_slider" alt="">`,


]

let i = 0

slider_container.innerHTML += arr_img[i]
pre.setAttribute("disabled", "")
slider_container.innerHTML += ` <p>slide #${i + 1} of ${arr_img.length}</p> `


// 003 next
next.addEventListener("click", (eo) => {

    pre.removeAttribute("disabled")

    i++

    slider_container.innerHTML += arr_img[i]
    slider_container.innerHTML += ` <p>slide #${i + 1} of ${arr_img.length}</p> `

    if (i + 1 == arr_img.length) {
        next.setAttribute("disabled", "")

    }

    parent_numbers.getElementsByClassName("active_num")[0].classList.remove("active_num")
    // parent_numbers.getElementsByTagName("button")[i].classList.add("active_num")
    parent_numbers.querySelectorAll(".numbers button")[i].classList.add("active_num")


})

// 003 pre
pre.addEventListener("click", (eo) => {
    next.removeAttribute("disabled")

    i--

    slider_container.innerHTML += arr_img[i]
    slider_container.innerHTML += ` <p>slide #${i + 1} of ${arr_img.length}</p> `

    if (i == 0) {
        pre.setAttribute("disabled", "")

    }

    parent_numbers.getElementsByClassName("active_num")[0].classList.remove("active_num")
    // parent_numbers.getElementsByTagName("button")[i].classList.add("active_num")
    parent_numbers.querySelectorAll(".numbers button")[i].classList.add("active_num")


})

// 005 button
my_number.forEach((item, index) => {
    item.addEventListener("click", (eo) => {

        parent_numbers.getElementsByClassName("active_num")[0].classList.remove("active_num")
        item.classList.add("active_num")

        slider_container.innerHTML += arr_img[index]
        slider_container.innerHTML += ` <p>slide #${index + 1} of ${arr_img.length}</p> `

        i = index

        if (index == arr_img.length - 1) {
            next.setAttribute("disabled", "")
            pre.removeAttribute("disabled")

        } else if (index == 0) {
            next.removeAttribute("disabled")
            pre.setAttribute("disabled", "")

        } else {
            next.removeAttribute("disabled")
            pre.removeAttribute("disabled")

        }

    })
});
