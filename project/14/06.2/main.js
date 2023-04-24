const myheader = document.querySelector(".myheader");
const section = document.getElementById("sec");
const main = document.getElementById("main");
const mydiv = document.getElementById("mydiv");

const title = document.createElement("h1");


// الطريقة الاولى
// ==================================

    mydiv.prepend(title);

    title.classList.add("mb")


    title.innerText = "الدولية العالمية"



// اختصار 111
// ============== nfn ====================

const name = () => {

    mydiv.prepend(title);

    title.classList.add("mb")


    title.innerText = "الدولية العالمية"

}

// اختصار 222
// ============= sto =====================

setTimeout(() => {

    mydiv.prepend(title);

    title.classList.add("mb")


    title.innerText = "الدولية العالمية"


}, 4000);

// اختصار 222
// ============= clg =====================
// هذا الاختصار في الدرس الي بعده على طول

console.log(object);