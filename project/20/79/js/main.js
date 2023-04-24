

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

let mood_78 = "create"
let tmp_78;

// ===== get Total ===== 01
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

// ===== create product ===== 02

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

//* onclick
submit_70.onclick = function () {
    //*

    //*
    let new_pro_70 = {
        //*

        //*
        title_obj:title_70.value.toLowerCase(),

        //*
        price_obj:price_70.value,

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
        category_obj:category_70.value.toLowerCase(),
    }

    // ===== update ===== 07
    //*
    if (mood_78 === "create") {
        //*
        
        //*
        

        // ===== count ===== 06
        //*
        if (new_pro_70.count_obj > 1) {
            //*

            //*
            for (let i = 0; i < new_pro_70.count_obj; i++) {
                //*

                //*
                data_Pro_70.push(new_pro_70)
            }

        //*
        } else {
            //*

            //*
            data_Pro_70.push(new_pro_70)
        }

    //*
    } else {
        //*

        //*
        data_Pro_70[tmp_78] = new_pro_70

        //*
        mood_78 = "create"

        //*
        submit_70.innerHTML = "create"

        //*
        count_70.style.display = "block"
    }

    //*
    localStorage.setItem("kay_product", JSON.stringify(data_Pro_70))

    //*
    clear_data_70()

    //*
    show_Data_70()
}

// ===== create product ===== 03

//* clear_data
function clear_data_70() {
    //*

    //*
    title_70.value = "";

    //*
    price_70.value = "";

    //*
    taxes_70.value = "";

    //*
    ads_70.value = "";

    //*
    discount_70.value = "";

    //*
    total__70.innerHTML = "";

    //*
    count_70.value = "";

    //*
    category_70.value = "";
}


// ===== read ===== 04

//* show_Data
function show_Data_70() {
    //*

    //*
    get_Total_70()

    //*
    let table_70 = ""

    //*
    for (let i = 0; i < data_Pro_70.length; i++) {
        //*

        //*
        table_70 += `
        <tr>

            <td>${i}</td>
            <td>${data_Pro_70[i].title_obj}</td>
            <td>${data_Pro_70[i].price_obj}</td>
            <td>${data_Pro_70[i].taxes_obj}</td>
            <td>${data_Pro_70[i].ads_obj}</td>
            <td>${data_Pro_70[i].discount_obj}</td>
            <td>${data_Pro_70[i].total_obj}</td>
            <td>${data_Pro_70[i].category_obj}</td>

            <!-- ===== update ===== 07-->
            <td><button onclick="update_data_70(${i})" id="update">update</button></td>

            <td><button onclick="delete_data_70(${i})" id="delete">delete</button></td>

        </tr>
        `;

    }

    //*
    document.getElementById("tbody").innerHTML = table_70

    //*
    let btn_delete_All_70 = document.getElementById("deleteAll")

    //*
    if (data_Pro_70.length > 0) {
        //*

        //*
        btn_delete_All_70.innerHTML = `

        <button onclick="Delete__All__70()"> Delete All (${data_Pro_70.length}) </button>
        
        `

    } else {
        //*

        //*
        btn_delete_All_70.innerHTML = ""
    }
    }
show_Data_70()


// ===== delete ===== 05

//* delete_data
function delete_data_70(i) {
    //*

    //*
    data_Pro_70.splice(i,1)

    //*
    localStorage.kay_product = JSON.stringify(data_Pro_70)
}

// ===== delete All ===== 06

//* Delete__All
function Delete__All__70(i) {
    //*

    //*
    localStorage.clear

    //*
    data_Pro_70.splice(0)

    //*
    show_Data_70()
}

// ===== count ===== 06



// ===== update ===== 07

//*
function update_data_70(i) {
    //*

    //*
    title_70.value = data_Pro_70[i].title_obj

    //*
    price_70.value = data_Pro_70[i].price_obj

    //*
    taxes_70.value = data_Pro_70[i].taxes_obj

    //*
    ads_70.value = data_Pro_70[i].ads_obj

    //*
    discount_70.value = data_Pro_70[i].discount_obj

    //*
    category_70.value = data_Pro_70[i].category_obj

    //*
    get_Total_70()

    //*
    count_70.style.display = "none"

    //*
    submit_70.innerHTML = " update "

    //*
    mood_78 = " update "

    //*
    tmp_78 = i;

    //*
    scroll({
        top: 0,
        behavior: "smooth",
    })
}

// ===== search ===== 07

//*
let search_mood_79 = "title_mood"

function get_search_79(id) {
    //*

    let search_79 = document.getElementById("search")

    //*
    if (id == "search_title") {
        //*

        //*
        search_mood_79 = "title_mood"
        // search_79.placeholder = "Search By Title"

    //*
    } else {
        //*

        //*
        search_mood_79 = "category_mood"
        // search_79.placeholder = "Search By category"

    }

    //*
    search_79.placeholder = "Search By" + search_mood_79

    //*
    search_79.focus()

    //*
    search_79.value = ""

    //*
    show_Data_70()
}


function search_Data_79(value) {
    //*

    //*
    let table_70 = ""

    for (let i = 0; i < data_Pro_70.length; i++) {
        
        //*
        if (search_mood_79 == "title_mood") {
            //*

            // for (let i = 0; i < data_Pro_70.length; i++) {

                //*
                if (data_Pro_70[i].title_obj.includes(value.toLowerCase())) {
                    //*

                    //*
                    table_70 += `
                    <tr>
                        <td>${i}</td>
                        <td>${data_Pro_70[i].title_obj}</td>
                        <td>${data_Pro_70[i].price_obj}</td>
                        <td>${data_Pro_70[i].taxes_obj}</td>
                        <td>${data_Pro_70[i].ads_obj}</td>
                        <td>${data_Pro_70[i].discount_obj}</td>
                        <td>${data_Pro_70[i].total_obj}</td>
                        <td>${data_Pro_70[i].category_obj}</td>
                        <td><button onclick="update_data_70(${i})" id="update">update</button></td>
                        <td><button onclick="delete_data_70(${i})" id="delete">delete</button></td>
                    </tr>
                    `;

                    //*
                    console.log(i);

                //*
                }

        //*
        } else {
            //*

            // for (let i = 0; i < data_Pro_70.length; i++) {

                //*
                if (data_Pro_70[i].category_obj.includes(value.toLowerCase())) {
                    //*

                    //*
                    table_70 += `
                    <tr>
                        <td>${i}</td>
                        <td>${data_Pro_70[i].title_obj}</td>
                        <td>${data_Pro_70[i].price_obj}</td>
                        <td>${data_Pro_70[i].taxes_obj}</td>
                        <td>${data_Pro_70[i].ads_obj}</td>
                        <td>${data_Pro_70[i].discount_obj}</td>
                        <td>${data_Pro_70[i].total_obj}</td>
                        <td>${data_Pro_70[i].category_obj}</td>
                        <td><button onclick="update_data_70(${i})" id="update">update</button></td>
                        <td><button onclick="delete_data_70(${i})" id="delete">delete</button></td>
                    </tr>
                    `;

                    //*
                    console.log(i);

                //*
                }
        }
    }


    //*
    document.getElementById("tbody").innerHTML = table_70

    //*
    // console.log(value);
}
