

//*
let title_70 = document.getElementById("title_input")
let price_70 = document.getElementById("price_input")
let taxes_70 = document.getElementById("taxes_input")
let ads_70 = document.getElementById("ads_input")
let discount_70 = document.getElementById("discount_input")
let total__70 = document.getElementById("total")
let count_70 = document.getElementById("count_input")
let category_70 = document.getElementById("category_input")
let submit_70 = document.getElementById("submit_button")

// ===== get Total
//*
function get_Total_70() {
    //*

    //*
    if (price_70.value != " ") {
        //*

        //*
        let result_70 = (+price_70.value + +taxes_70.value + +ads_70.value) - +discount_70.value;

        //*
        total__70.innerHTML = result_70

        //*
        total__70.style.backgroundColor = "#040"

    } else {
        //*

        //*
        total__70.innerHTML = ""

        //*
        total__70.style.backgroundColor = "#a00d02"
    }
}

// ===== create product

//*
let data_Pro_70;

//*
if (localStorage.kay_product != null) {
    //*

    //*
    data_Pro_70 = JSON.parse(localStorage.kay_product)

} else {
    //*
    

    //*
    data_Pro_70 = []
}

//*
submit_70.onclick = function () {
    //*

    //*
    let new_pro_70 = {
        //*

        //*
        title_obj:title_70.value,

        //*
        price_obj:price_70.value,

        //*
        title_obj:title_70.value,

        //*
        taxes_obj:taxes_70.value,

        //*
        ads_obj:ads_70.value,

        //*
        discount_obj:discount_70.value,

        //*
        total_obj:total__70.innerHTML,

        //*
        count_obj:count_70.value,

        //*
        category_obj:category_70.value,
    }

    //*
    data_Pro_70.push(new_pro_70)

    //*
    localStorage.setItem("kay_product", JSON.stringify(data_Pro_70))

    console.log(data_Pro_70);
}