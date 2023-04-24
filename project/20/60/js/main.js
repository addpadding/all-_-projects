


//*
let open_60 = document.getElementById("open")
let close_60 = document.getElementById("close")
let container_60 = document.querySelector(".container")

//*
close_60.onclick = function () {
    //*

    //*
    container_60.classList.add("hide")

    //*
    this.classList.add("hide")

    //*
    open_60.classList.remove("hide")

}


//*
open_60.onclick = function () {
    //*

    //*
    this.classList.add("hide")

    //*
    close_60.classList.remove("hide")

    //*
    container_60.classList.remove("hide")

}