

//*
if (localStorage.length > 0) {
    //*

    document.body.style.backgroundColor = localStorage.getItem("kay_color__68")
}

//*
function setColor_68(color_68) {
    //*

    localStorage.setItem("kay_color__68", color_68)

    //*
    document.body.style.backgroundColor = color_68
}