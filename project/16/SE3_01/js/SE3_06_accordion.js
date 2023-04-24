// lesson-66
// ======================================

const allplus_66_01 = document.querySelectorAll(".plus")


allplus_66_01.forEach(item => {
    //*
    item.addEventListener("click", (eo) => {
        //*
        const content =eo.target.parentElement.parentElement
        .getElementsByClassName("content")[0]

        //* 11
        // content.style.height = "160px"
        // content.style.opacity = "1"

        //* 22
        // content.classList.add("active")

        //* 33
        content.classList.toggle("active")

        //*
        // content.style.height = ` ${content.scrollHeight}px `


        //*
        if (content.classList.contains("active")) {
            //*
            content.style.height = ` ${content.scrollHeight}px `

        } else {
            //*
            content.style.height = ` 0 `
        }

        // =========== ( - + )
        //*
        item.classList.toggle("hide_plus")

        //*
        // item.innerText = " ــ "

        //*
        // item.style.transform = "translateY(-11px)"

        if (item.classList.contains("hide_plus")) {
            //*
            item.innerText = " ــ "

            //*
            item.style.transform = "translateY(-11px)"

        } else {
            //*
            item.innerText = " + "

            //*
            item.style.transform = "translateY(0)"
        }
    })
});