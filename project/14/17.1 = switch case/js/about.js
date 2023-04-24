const container50 = document.getElementById("containerAbout");
const title50 = document.getElementById("title");


container50.style.border = "5px solid red"

container50.addEventListener("click", (eo) => {

    // if (eo.target.className == "btn btn-primary") {

    //     title50.innerText = "primary"

    // } else if (eo.target.className == "btn btn-secondary") {

    //     title50.innerText = "secondary"
        
    
    // } else if (eo.target.className == "btn btn-success") {

    //     title50.innerText = "success"
        
    // } else if (eo.target.className == "btn btn-danger") {

    //     title50.innerText = "danger"
        
    // }


    // =============
    switch (eo.target.className) {
        case "btn btn-primary":
            title50.innerText = "primary"
            title50.style.marginTop = "50px"
            break;

        case "btn btn-secondary":
            title50.innerText = "secondary"
            break;

        case "btn btn-success":
            title50.innerText = "success"
            break;

        case "btn btn-danger":
            title50.innerText = "danger"
            break;

        default:
            title50.innerText = "error"
            break;
    }
    
})
