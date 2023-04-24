// ==============portfolio================
var index_value = 1

show_img(index_value)

function btm_slide(e) {
    show_img(index_value = e)
}

function side_slide(e) {
    show_img(index_value += e)
}

function show_img(e) {
    var i;
    const img = document.querySelectorAll(".card")
    const sliders = document.querySelectorAll(".btm_sliders span")

    if (e > img.length) {
        index_value = 1
    }

    if (e < 1) {
        index_value = img.length
    }

    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none"
    }

    for (i = 0; i < sliders.length; i++) {
        sliders[i].style.background = "rgba(255, 255, 255, 0.1)"
    }

    img[index_value - 1].style.display = "flex"
    sliders[index_value - 1].style.background = "#fff"

}