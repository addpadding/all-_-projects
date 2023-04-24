

//*
var school_24 = ["Yarob", "Khaled", "Mohammed", "Ahmed", "Jaber", "Sami", "Ali"]

//*
for (var i = 0 ; i <= school_24.length -1 ; i++) {
    //*

    //*
    document.getElementById("school_div").innerHTML += school_24[i] + " -- "
}

//*
document.getElementById("button").addEventListener("click", function () {
    // //*

    // //*
    var name_input_24 = document.getElementById("input").value.toLowerCase()

    // //*
    // var isFound = false


    // //*
    // for (var student_24 of school_24) {
    //     //*

    //     // var isFound = false

    //     //*
    //     var Lower_stu_24 = student_24.toLowerCase()

    //     //*
    //     if (name_input_24 == Lower_stu_24) {
    //         //*

    //         //*
    //         isFound = true

    //         // document.getElementById("result_h2").innerHTML = ` ${name_input_24} is in the school `
    //     }
    // }

    // //*
    // if (isFound == true) {
    //     //*

    //     //*
    //     document.getElementById("result_h2").innerHTML = ` ${name_input_24} is in the school `

    // //*
    // } else {
    //     //*

    //     //*
    //     document.getElementById("result_h2").innerHTML = ` ${name_input_24} is NOT the school `
    // }


    //*
    var index = 0
    //*
    while (index <= school_24.length -1) {
        //*
    
        //*
        var student_24 = school_24[index]
    
        //*
        var Lower_stu_24 = student_24.toLowerCase()
    
        //*
        document.getElementById("result_h2").innerHTML = ` ${name_input_24} is NOT the school `
    
        //*
        index+=1
    
        //*
        if (name_input_24 != Lower_stu_24) {
            //*
    
            //*
            continue
        }
    
        //*
        document.getElementById("result_h2").innerHTML = ` ${name_input_24} is in the school `
    
        //*
        break
    }
})
