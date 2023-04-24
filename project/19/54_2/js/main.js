
//*
let massage_h2_54_2 = document.getElementById("massage_h2")

//*
let is_Submitted_54_2 = false

//*
function Name_input_change_54_2(input_54_2) {
    //*

    //*
    // input_54_2.value

    //*
    // console.log(input_54_2.value);

    //*
    document.getElementById("currentName").innerHTML = input_54_2.value
}

document.getElementById("submit_button").addEventListener("click", function () {
    //*

    // is_Submitted_54_2 = true

    if (!is_Submitted_54_2) {
        //*

        //*
        is_Submitted_54_2 = true

        // massage_h2_54_2.innerHTML = ""

        //*
        let child_54_2 = massage_h2_54_2.firstChild

        //*
        massage_h2_54_2.removeChild(child_54_2)

    }


    //*
    let value_54_2 = document.getElementById("name_input").value

    //*
    let textNode_54_2 = document.createTextNode(value_54_2)

    //*
    massage_h2_54_2.appendChild(textNode_54_2)

    //*
    let br_54_2 = document.createElement("br")

    //*
    massage_h2_54_2.appendChild(br_54_2)
})

massage_h2_54_2.addEventListener("mouseover", function () {
    //*

    // this.style.background = "red"

    //*
    if (is_Submitted_54_2) {
        //*

        //*
        this.style.background = "green"

    }else {
        //*

        //*
        this.style.background = "red"
    }
})

massage_h2_54_2.addEventListener("mouseout", function () {
    //*

    //*
    this.style.background = "#FFF"
})
