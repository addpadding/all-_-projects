

//*
var students_21_2 = []

//*
// document.getElementById("stu_div").innerHTML = students_21_2

//*
document.getElementById("button").addEventListener("click", function () {
    //*

    //*
    // console.log("fffff");

    //*
    var input_21_2 = document.getElementById("input").value

    //*
    // console.log(input_21_2);

    //*
    students_21_2.push(input_21_2)

    //*
    document.getElementById("stu_div").innerHTML = students_21_2

    //*
    document.getElementById("input").value = ""

})

document.getElementById("Delete").addEventListener("click", function () {
    //*

    //*
    // console.log("Delete");

    //*
    students_21_2.pop()

    //*
    document.getElementById("stu_div").innerHTML = students_21_2

})
