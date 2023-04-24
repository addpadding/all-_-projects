const computer_choice_Display_ID_01 = document.getElementById("computer-choice")
const user_choice_Display_ID_01 = document.getElementById("user-choice")
const result_Display_ID_01 = document.getElementById("result")

const possible_choices_ID_01 = document.querySelectorAll("button")

let user_Choice_let_01
let computer_Choice_let_01
let result_Let_01

possible_choices_ID_01.forEach(item => item.addEventListener("click", (e) => {
    user_Choice_let_01 = e.target.id
    user_choice_Display_ID_01.innerHTML = user_Choice_let_01
    generate_computer_choice_FUN_01()
    get_result_FUN_01()
}));

function generate_computer_choice_FUN_01() {
    const random_Number_01 = Math.floor(Math.random() * 3) + 1

    if (random_Number_01 === 1) {
        computer_Choice_let_01 = "rock"
    }
    if (random_Number_01 === 2) {
        computer_Choice_let_01 = "scissors"
    }
    if (random_Number_01 === 3) {
        computer_Choice_let_01 = "paper"
    }
    computer_choice_Display_ID_01.innerHTML = computer_Choice_let_01
}

function get_result_FUN_01() {
    if (computer_Choice_let_01 === user_Choice_let_01) {
        result_Let_01 = "its a draw!"
    }
    if (computer_Choice_let_01 === "rock" && user_Choice_let_01 === "paper") {
        result_Let_01 = "you win!"
    }
    if (computer_Choice_let_01 === "rock" && user_Choice_let_01 === "scissors") {
        result_Let_01 = "you lost!"
    }
    if (computer_Choice_let_01 === "paper" && user_Choice_let_01 === "scissors") {
        result_Let_01 = "you win!"
    }
    if (computer_Choice_let_01 === "paper" && user_Choice_let_01 === "rock") {
        result_Let_01 = "you lost!"
    }
    if (computer_Choice_let_01 === "scissors" && user_Choice_let_01 === "rock") {
        result_Let_01 = "you win!"
    }
    if (computer_Choice_let_01 === "scissors" && user_Choice_let_01 === "paper") {
        result_Let_01 = "you lost!"
    }
    result_Display_ID_01.innerHTML = result_Let_01
}