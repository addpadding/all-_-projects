const myheader = document.querySelector(".myheader");
const section = document.getElementById("sec");
const main = document.getElementById("main");
const mydiv = document.getElementById("mydiv");

const title = document.createElement("h1");


// الطريقة الاولى
// ==================================
const container111 = function () {

    mydiv.prepend(title);

    title.classList.add("mb")


    title.innerText = "الدولية العالمية"

}

setTimeout(container111, 1000)

// الطريقة 222
// ==================================
const container222 =  () => {

    mydiv.prepend(title);

    title.classList.add("mb")


    title.innerText = "الدولية العالمية"

}

setTimeout(container222, 1000)

// الطريقة 333
// ==================================
setTimeout(
    
    () => {

        mydiv.prepend(title);
    
        title.classList.add("mb")
    
    
        title.innerText = "الدولية العالمية"
    
    }
    
    , 3000)

// الطريقة 444
// ==================================
const container444 = () => {

    mydiv.prepend(title);

    title.classList.add("mb")


    title.innerText = "الدولية العالمية"

}

setTimeout(container444, 3000)


// الطريقة 555 nfn
// ==================================
const container555 = () => {

    mydiv.prepend(title);

    title.classList.add("mb")


    title.innerText = "الدولية العالمية"

}

// الطريقة 666 anfn
// ==================================
() => {
    
}

setTimeout((params) => {
    
}, 3000)

