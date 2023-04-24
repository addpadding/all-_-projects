
// img
const Arrayimg_88 = [
    //*
    `<img src="images/01.jpg" class="img_slider" alt="">`,

    `<img src="images/02.jpg" class="img_slider" alt="">`,

    `<img src="images/03.jpeg" class="img_slider" alt="">`,

    `<img src="images/04.jpg" class="img_slider" alt="">`,

    `<img src="images/05.jpg" class="img_slider" alt="">`
]

const id_slider_container_88 = document.getElementById("id_slider_container")
const pre_88 = document.getElementById("pre")
const next_88 = document.getElementById("next")

//*
let i = 0

//*كود الصور
id_slider_container_88.innerHTML += Arrayimg_88[i]

//*
pre_88.setAttribute("disabled", "")

//*كود ترقيم السلايد
id_slider_container_88.innerHTML += ` <p> slide #${i + 1} of ${Arrayimg_88.length}</p> `

//* next_88
next_88.addEventListener("click", (eo) => {
    //*
    pre_88.removeAttribute("disabled")

    //*
    i++

    //*كود الصور
    id_slider_container_88.innerHTML += Arrayimg_88[i]

    //*كود ترقيم السلايد
    id_slider_container_88.innerHTML += ` <p> slide #${i + 1} of ${Arrayimg_88.length}</p> `

    //*
    if (i + 1 == Arrayimg_88.length) {
        //*
        next_88.setAttribute("disabled", "")
    }

    //* remove active_num 
    Parent_Numbers_88.getElementsByClassName("active_num")[0].classList.remove("active_num")

    //* add active_num
    Parent_Numbers_88.getElementsByTagName("button")[i].classList.add("active_num")

})

//* pre_88
pre_88.addEventListener("click", (eo) => {
    //*
    next_88.removeAttribute("disabled")

    //*
    i--

    //*كود الصور
    id_slider_container_88.innerHTML += Arrayimg_88[i]

    //* كود ترقيم السلايد
    id_slider_container_88.innerHTML += ` <p> slide #${i + 1} of ${Arrayimg_88.length}</p> `

    //*
    if (i == 0) {
        //*
        pre_88.setAttribute("disabled", "")
    }

    //* remove active_num 
    Parent_Numbers_88.getElementsByClassName("active_num")[0]
        .classList.remove("active_num")

    //* add active_num
    Parent_Numbers_88.getElementsByTagName("button")[i]
        .classList.add("active_num")

})

//*
const allButton_88 = document.querySelectorAll(".myNumber")
const Parent_Numbers_88 = document.getElementsByClassName("numbers")[0]

//* ازرار الارقام
allButton_88.forEach((item, index) => {
    //*
    item.addEventListener("click", (eo) => {
        //* remove active_num 
        Parent_Numbers_88.getElementsByClassName("active_num")[0]
            .classList.remove("active_num")

        //* add active_num
        item.classList.add("active_num")

        //* كود الصور
        id_slider_container_88.innerHTML += Arrayimg_88[index]

        //* كود ترقيم السلايد
        id_slider_container_88.innerHTML += ` <p> slide #${index + 1} of ${Arrayimg_88.length}</p> `

        //*
        i = index

        //* Last index
        if (index == Arrayimg_88.length - 1) {
            //*
            next_88.setAttribute("disabled", "")
            //*
            pre_88.removeAttribute("disabled")

            //* Frist index
        } else if (index == 0) {
            //*
            next_88.removeAttribute("disabled")
            //*
            pre_88.setAttribute("disabled", "")

            //*
        } else {
            //*
            next_88.removeAttribute("disabled")
            //*
            pre_88.removeAttribute("disabled")
        }
    })
});