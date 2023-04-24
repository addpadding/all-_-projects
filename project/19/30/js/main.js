

//*
var stu = [
    //*

    //*
    ["Yarob", "Ahmed", "Khaled"],

    //*
    ["Omar", "Jaber", "Sami"],

    //*
    ["Ali", "Alaa"]
]

//*
for (var i = 0; i < stu.length; i++) {
    //*

    //*
    var class_30 = stu[i]

    //*
    document.getElementById("div_one").innerHTML += ` <h1> class ${i+1} </h1> ` + "<hr>"
    // document.getElementById("div_one").innerHTML += "<br>" + "class" + (i+1)

    //*
    for (let j = 0; j < class_30.length; j++) {
        //*

        //*
        var class_stu_30 = class_30[j]

        //*
        document.getElementById("div_one").innerHTML += class_stu_30 + " <br> "

        //*
        console.log(class_30[j]);
    }

    //*
    // document.getElementById("div_one").innerHTML += "class" + (i+1) + "<br>" + stu[i] + "<br>"

    //*
    // if (i == 0) {
    //     //*

    //     //*
    //     document.getElementById("div_one").innerHTML += "class1" + "<br>" + stu[i] + "<br>"

    // } else if (i == 1) {
    //     //*

    //     //*
    //     document.getElementById("div_one").innerHTML += "class2" + "<br>" + stu[i] + "<br>"

    // } else {
    //     //*

    //     //*
    //     document.getElementById("div_one").innerHTML += "class3" + "<br>" + stu[i] + "<br>"
    // }

    //*
}

//*
// document.getElementById("div_one").innerHTML
