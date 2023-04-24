const myheader = document.querySelector(".myheader");
const section = document.getElementById("sec");
const main = document.getElementById("main");
const mydiv = document.getElementById("mydiv");

const title = document.createElement("h1");



// ==============الطريقة الاولى=============
//              لاستدعاء الفانشن

function eldwlya () {

    mydiv.prepend(title);

    title.classList.add("mb")


    title.innerText = "الدولية العالمية"

}

// eldwlya()

// ==============الطريقة الثانية=============
(function  () {

    mydiv.prepend(title);

    title.classList.add("mb")


    title.innerText = "الدولية العالمية"

}) ()

// ==============الطريقة الثالثة =============
function eldwlya () {

    mydiv.prepend(title);

    title.classList.add("mb")


    title.innerText = "الدولية العالمية"

}

setTimeout(eldwlya, 3000)

