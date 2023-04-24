//*
let names_Array_54 = ["ahmed" , "ali", "gmal" , "khalid"]

//*
let age_Array_54 = ["18 years old" , "17 years old", "22 years old" , "20 years old"]

// =============

//*
let container_54 = document.createElement("div")

//*
document.body.appendChild(container_54)

//*
container_54.style.textAlign = "center"

// =============

//*
function element(names_Array_54, age_Array_54) {
    //*

    //* element
    let card_54 = document.createElement("div")

    //*
    let title_54 = document.createElement("h2")

    //*
    let age_54 = document.createElement("p")

    //*
    let img_54 = document.createElement("img")

    //* content
    let head_54 = document.createTextNode(names_Array_54)

    //*
    let age_content_54 = document.createTextNode(age_Array_54)

// =============

    //*
    img_54.src = "img/sea.jpg"

    //*
    title_54.appendChild(head_54)

    //*
    age_54.appendChild(age_content_54)

// =============

//*
card_54.style.width = "200px"

card_54.style.backgroundColor = "#444"

card_54.style.Color = "#fff"

card_54.style.padding = "10px"

card_54.style.margin = "2px"
card_54.style.display = "inline-block"

//*
img_54.style.width = "100%"

// =============

    //*
    card_54.appendChild(title_54)
    card_54.appendChild(age_54)
    card_54.appendChild(img_54)

// =============

    //*
    container_54.appendChild(card_54)

}
// element()

//*
for (let i = 0; i < 4; i++) {
    //*

    //*
    element(names_Array_54[i], age_Array_54[i])

}