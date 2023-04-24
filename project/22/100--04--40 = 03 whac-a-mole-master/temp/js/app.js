const squares_html = document.querySelectorAll(".square")
const mole_html = document.querySelector(".mole")
const time_left_html = document.querySelector("#time-left")
const score_html = document.querySelector("#score")

let result_03 = 0
let hit_Position_03
let current_Time_03 = 60
let timer_id_03 = null

function random_square_FUN() {
    squares_html.forEach(square_item => {
        square_item.classList.remove("mole")
    })

    let random_Squares_03 = squares_html[Math.floor(Math.random() * 9)]
    random_Squares_03.classList.add("mole")

    hit_Position_03 = random_Squares_03.id
}
// ================

squares_html.forEach(square_item => {
    square_item.addEventListener("mousedown", () => {
        if (square_item.id == hit_Position_03) {
            result_03++
            score_html.textContent = result_03
            hit_Position_03 = null
        }
    })
})

// ================
function move_mole_FUN() {
    timer_id_03 = setInterval(random_square_FUN, 500)
}
move_mole_FUN()

function count_Down_FUN() {
    current_Time_03--
    time_left_html.textContent = current_Time_03

    if (current_Time_03 == 0) {
        clearInterval(count_Down_timer_id_03)
        clearInterval(timer_id_03)
        alert("Game Over! Yout final score is " + result_03)
    }
}

let count_Down_timer_id_03 = setInterval(count_Down_FUN, 1000)

