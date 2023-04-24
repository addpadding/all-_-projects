const card_Array_02 = [
    {
        name_obj: "fries",
        img_obj: "images/fries.png",
    },
    {
        name_obj: "cheeseburger",
        img_obj: "images/cheeseburger.png",
    },
    {
        name_obj: "hotdog",
        img_obj: "images/hotdog.png",
    },
    {
        name_obj: "ice-cream.",
        img_obj: "images/ice-cream.png",
    },
    {
        name_obj: "milkshake",
        img_obj: "images/milkshake.png",
    },
    {
        name_obj: "pizza",
        img_obj: "images/pizza.png",
    },
    {
        name_obj: "fries",
        img_obj: "images/fries.png",
    },
    {
        name_obj: "cheeseburger",
        img_obj: "images/cheeseburger.png",
    },
    {
        name_obj: "hotdog",
        img_obj: "images/hotdog.png",
    },
    {
        name_obj: "ice-cream.",
        img_obj: "images/ice-cream.png",
    },
    {
        name_obj: "milkshake",
        img_obj: "images/milkshake.png",
    },
    {
        name_obj: "pizza",
        img_obj: "images/pizza.png",
    },
]

card_Array_02.sort(() => 0.5 - Math.random())

const grid_Display_02 = document.querySelector("#grid")

const result_Display_02 = document.querySelector("#result")

let cards_Chosen_02 = []
let cards_Chosen_Ids_02 = []
const cards_Won = []

function create_Board_FUN_02() {
    for (let i = 0; i < card_Array_02.length; i++) {
        const card_02 = document.createElement("img")
        card_02.setAttribute("src", "images/blank.png")
        card_02.setAttribute("data-id", i)
        card_02.addEventListener("click", flip_card_FUN_02)
        grid_Display_02.appendChild(card_02)
    }
}
create_Board_FUN_02()

function check_Match_FUN_02() {
    const card_ss_02 = document.querySelectorAll("img")
    const options_One_Id_02 = cards_Chosen_Ids_02[0]
    const options_Two2_Id_02 = cards_Chosen_Ids_02[1]

    console.log(card_ss_02);

    console.log("check for Match");

    if (options_One_Id_02 == options_Two2_Id_02) {
        card_ss_02[options_One_Id_02].setAttribute("src", "images/blank.png")
        card_ss_02[options_Two2_Id_02].setAttribute("src", "images/blank.png")

        alert("you clicked the same image")
    }

    if (cards_Chosen_02[0] == cards_Chosen_02[1]) {
        alert("you found a match!")
        card_ss_02[options_One_Id_02].setAttribute("src", "images/white.png")
        card_ss_02[options_Two2_Id_02].setAttribute("src", "images/white.png")
        card_ss_02[options_One_Id_02].removeEventListener("click", flip_card_FUN_02)
        card_ss_02[options_Two2_Id_02].removeEventListener("click", flip_card_FUN_02)
        cards_Won.push(cards_Chosen_02)
    } else {
        card_ss_02[options_One_Id_02].setAttribute("src", "images/blank.png")
        card_ss_02[options_Two2_Id_02].setAttribute("src", "images/blank.png")
        alert("sory try again!")
    }
    result_Display_02.textContent = cards_Won.length
    cards_Chosen_02 = []
    cards_Chosen_Ids_02 = []

    if (cards_Won.length == card_Array_02.length / 2) {
        result_Display_02.textContent = "Congratulations you found them all"
    }
}


function flip_card_FUN_02() {

    const cardID_02 = this.getAttribute("data-id")
    cards_Chosen_02.push(card_Array_02[cardID_02].name_obj)
    cards_Chosen_Ids_02.push(cardID_02)

    console.log(cards_Chosen_02);
    console.log(cards_Chosen_Ids_02);

    this.setAttribute("src", card_Array_02[cardID_02].img_obj)

    if (cards_Chosen_02.length === 2) {
        setTimeout(check_Match_FUN_02, 500)
    }
} 