

//*
document.getElementById("button").addEventListener("click", function () {
    //*

    //*
    document.getElementById("result").innerHTML = ` `

    //*
    var txt_input_23 = document.getElementById("input").value

    //*
    // document.getElementById("result").innerHTML = txt_input_23


    //*
    for (var char_23 of txt_input_23) {
        //*

        //*
        // document.getElementById("result").innerHTML += ` ${char_23} <br> `

        // //*
        // if (char_23 == "a" || char_23 == "e" || char_23 == "i") {
        //     //*

        // } else {
        //     //*

        //     //*
        //     document.getElementById("result").innerHTML += ` ${char_23} <br> `
        // }

        //*
        var LowerCase = char_23.toLowerCase()

        // //*
        // if (LowerCase != "a" && LowerCase != "e" && LowerCase != "i" && LowerCase != "o" && LowerCase != "u") {
        //     //*

        //     //*
        //     document.getElementById("result").innerHTML += ` ${char_23} <br> `

        // //*
        // }

        //*
        const array_23 = ["a", "e", "i", "o", "u"]

        //*
        array_23.includes("")

        //*
        if ( !array_23.includes(LowerCase)) {
            //*

            //*
            document.getElementById("result").innerHTML += ` ${char_23} <br> `
        }

    //*
    }

//*
})