console.log("app");

let our_skills = document.querySelector(".our_skills")
let span_s = document.querySelectorAll(".the_progress span")


window.onscroll = function () {

    if (window.scrollY >= our_skills.offsetTop - 250) {
        console.log("rrrrrrrrrrrr");

        span_s.forEach(function (span) {
            span.style.width = span.dataset.width
        })
    }
}
