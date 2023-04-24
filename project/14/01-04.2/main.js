const myheader = document.querySelector(".myheader");
const section = document.getElementById("sec");
const main = document.getElementById("main");
const mydiv = document.getElementById("mydiv");

const title = document.createElement("h1");

mydiv.prepend(title);

title.classList.add("mb", "bc")

title.classList.remove("bc")

title.innerText = "الدولية العالمية"
