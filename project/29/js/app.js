
// 01 = Hover
function HoverButton() {
    document.getElementById("butt").style.backgroundColor = "#080"
}

function Hover() {
    document.getElementById("butt").style.backgroundColor = "#00bc8a"
}



// 02 = visible , hidden

function show() {
    document.getElementById("Ipsum_click").style.visibility = "visible"
}

function hide() {
    document.getElementById("Ipsum_click").style.visibility = "hidden"
}

// me = visible , hidden

function hide_img() {
    document.getElementById("img_click").style.visibility = "hidden"
}

function show_img() {
    document.getElementById("img_click").style.visibility = "visible"
}


// 03 = You Hovered

var n = 0
function You_Hovered() {
    n = n + 1
    document.getElementById("img_01").innerHTML = n
    document.getElementById("img_02").innerHTML = n
    document.getElementById("img_03").innerHTML = n
}


