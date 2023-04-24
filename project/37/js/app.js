const btn__hamburger = document.querySelector("#btn__hamburger");
// ==================
const header = document.querySelector(".header");
// ==================
const overlay = document.querySelector(".header .overlay");
// ==================
const has_fade = document.querySelectorAll('.has_fade');
// ==================
const body = document.querySelector('body');



btn__hamburger.addEventListener("click", function () {
    // ==================

    if (header.classList.contains("open")) {
        // ==================

        // ((body) => (click("noscroll")))
        body.classList.remove("noscroll")

        // ((header) => (click("open")))
        header.classList.remove("open")

        has_fade.forEach(function (item) {
            // ==================

            // ((has_fade) => (click("fade_in")))
            item.classList.remove("fade_in")
            item.classList.add("fade_out")
        })


    } else {
        // ==================

        // ((body) => (click("noscroll")))
        body.classList.add("noscroll")

        // ((header) => (click("open")))
        header.classList.add("open")

        has_fade.forEach(function (item) {
            // ==================

            // ((has_fade) => (click("fade_in")))
            item.classList.remove("fade_out")
            item.classList.add("fade_in")
        })

    }

})