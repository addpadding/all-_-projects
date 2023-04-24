

//*
const h1_heading_10 = document.getElementById("h1_heading")
const button_10 = document.getElementById("button")
const ul_list_10 = document.getElementById("ul_list")

var li_10 = document.getElementById("ul_list").getElementsByTagName("li"),
    counter =1;

//* ====
// li_10[0].addEventListener("click", function () {
//     //*

//     //*
//     h1_heading_10.innerHTML = li_10[0].innerHTML

// })

//* ===
// for (var i = 0; i < li_10.length; i++) {
//     //*

//     //*
//     li_10[i].addEventListener("click", active)

// }
//*
ul_list_10.addEventListener("click", active)


//*
function active (e) {
    //*

    //*
    if (e.target.nodeName == "LI") {
        //*

        //*
        h1_heading_10.innerHTML = e.target.innerHTML

        //*
        for (var i = 0; i < e.target.parentNode.children.length; i++) {
            //*

            //*
            e.target.parentNode.children[i].classList.remove("active")
        }

        //*
        e.target.classList.add("active")
    }


}

//* ===
// function active () {
//     //*

//     //*
//     h1_heading_10.innerHTML = this.innerHTML

//     //*
//     for (var i = 0; i < li_10.length; i++) {
//         //*

//         //*
//         li_10[i].classList.remove("active")

//     }

//     //*
//     this.classList.add("active")

// }

//*
button_10.addEventListener("click", Add)
    //*

//*
function Add() {
    //*

    //*
    ul_list_10.innerHTML += " <li> New "+ counter + "</li> ";
    counter++;

    //* الحركة ده = جدعنة من عندي
    // ul_list_10.innerHTML += ` <li> New  ${counter} </li> `;
    // counter++;

}
