
//* #01 
var the_img_33 = document.getElementById("the_img")

//* #02 
var the_model_33 = document.getElementById("the_model")

//* #02 == 22 + #02 == 33
var model_img_33 = document.getElementById("img"),
    model_caption_33 = document.getElementById("caption")

//* #01
the_img_33.onclick = function () {
    //*

    //* #02 
    the_model_33.style.display = "block"

    //* #02 == 22
    model_img_33.src = this.src

    //* #02 == 33
    model_caption_33.innerHTML = this.alt
}

//*
var close = document.getElementsByClassName("close")[0]

//*
close.onclick = function () {
    //*

    //*
    the_model_33.style.display = "none"
}

//* لم يتم التشغيل
document.onkeydown = function (ev) {
    //*

    //* لم يتم التشغيل
    if (ev.keyCode == "27") {
        //*

        //*
        the_model_33.style.display = "none"
    }
}
