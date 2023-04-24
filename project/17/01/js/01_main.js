//*
var heading_11 = document.getElementsByClassName("accordion");

//*
var i;

//*
for (i = 0; i < heading_11.length; i++) {
    //*
    heading_11[i].addEventListener("click", function () {
        //*
        this.classList.toggle("active")

        //*
        var desc_11 = this.nextElementSibling;

        //*
        if (desc_11.style.maxHeight) {
            //*
            desc_11.style.maxHeight = null;

        //*
        } else {
            //*
            desc_11.style.maxHeight = desc_11.scrollHeight + "px"
        }
    });
}
