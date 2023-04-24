

//*
document.getElementById("submit_btn").addEventListener("click", function () {
    //*

    //*
    var weight_17_2 = document.getElementById("weight_input").value
    var height_17_2 = document.getElementById("height_input").value

    //* 44 = h4
    var bmi_17_2 = weight_17_2 / (height_17_2 * height_17_2)

    //* 44 = h4
    document.getElementById("bmi").innerHTML = bmi_17_2

    //* 44 = h3
    var bmi_category = "نحيف"

    //*
    if (bmi_17_2 < 18) {
        //*

        //*
        bmi_category = "نحيف"

    //*
    } else if (bmi_17_2 < 24.9) {
        //*

        //*
        bmi_category = "وزن مثالي"

    //*
    } else if (bmi_17_2 < 29.9) {
        //*

        //*
        bmi_category = "وزن زائد"

    //*
    } else if (bmi_17_2 < 34.9) {
        //*

        //*
        bmi_category = " سمنة درجة اولى "

    //*
    } else if (bmi_17_2 < 39.9) {
        //*

        //*
        bmi_category = " سمنة درجة ثانية "

    //*
    } else {
        //*

        //*
        bmi_category = "سمنة خطيرة"
    }

    //* 44 = h3
    document.getElementById("bmi_category"). innerHTML = bmi_category
})