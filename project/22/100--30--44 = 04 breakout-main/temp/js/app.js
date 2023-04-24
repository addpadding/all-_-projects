const grid_html = document.querySelector(".grid")
const score_html = document.querySelector("#score")

const block_width_04 = 100
const block_height_04 = 20

const ball_Diameter_04 = 20
const board_Width_04 = 560
const board_Height_04 = 300

let timer_id_04
let x_Direction = -2
let y_Direction = 2
let score_04 = 0

const user_Start_04 = [230, 10]
let current_Position_04 = user_Start_04

const ball_Start_04 = [270, 40]
let ball_Position_04 = ball_Start_04

class Block_04 {
    constructor(x_Axis, y_Axix) {
        this.bottmoLeft = [x_Axis, y_Axix]
        this.bottomRight = [x_Axis + block_width_04, y_Axix]
        this.topLeft = [x_Axis, y_Axix + block_height_04]
        this.topRight = [x_Axis + block_width_04, y_Axix + block_height_04]
    }
}

const block_s_Array = [
    new Block_04(10, 270),
    new Block_04(120, 270),
    new Block_04(230, 270),
    new Block_04(340, 270),
    new Block_04(450, 270),

    new Block_04(10, 240),
    new Block_04(120, 240),
    new Block_04(230, 240),
    new Block_04(340, 240),
    new Block_04(450, 240),

    new Block_04(10, 210),
    new Block_04(120, 210),
    new Block_04(230, 210),
    new Block_04(340, 210),
    new Block_04(450, 210),

]

function add_Block_s_FUN() {
    for (let i = 0; i < block_s_Array.length; i++) {
        const block_css = document.createElement("div")
        block_css.classList.add("block_css")
        block_css.style.left = block_s_Array[i].bottmoLeft[0] + "px"
        block_css.style.bottom = block_s_Array[i].bottmoLeft[1] + "px"
        grid_html.appendChild(block_css)
    }
}
add_Block_s_FUN()

const user_css = document.createElement("div")
user_css.classList.add("user_css")
draw_User_fun()
grid_html.appendChild(user_css)

function draw_User_fun() {
    user_css.style.left = current_Position_04[0] + "px"
    user_css.style.bottom = current_Position_04[1] + "px"
}

function draw_ball_fun() {
    ball_css.style.left = ball_Position_04[0] + "px"
    ball_css.style.bottom = ball_Position_04[1] + "px"
}


function move_User_FUN(e) {
    switch (e.key) {
        case "ArrowLeft":
            if (current_Position_04[0] > 0) {
                current_Position_04[0] -= 10
                draw_User_fun()
            }
            break;

        case "ArrowRight":
            if (current_Position_04[0] < board_Width_04 - block_width_04) {
                current_Position_04[0] += 10
                draw_User_fun()
            }
            break;
    }
}
document.addEventListener("keydown", move_User_FUN)

const ball_css = document.createElement("div")
ball_css.classList.add("ball_css")
draw_ball_fun()
grid_html.appendChild(ball_css)

function move_ball_fun() {
    ball_Position_04[0] += x_Direction
    ball_Position_04[1] += y_Direction
    draw_ball_fun()
    check_for_Collisions_fun()
}


timer_id_04 = setInterval(move_ball_fun, 30)

function check_for_Collisions_fun() {
    for (let i = 0; i < block_s_Array.length; i++) {
        if (
            (
                (ball_Position_04[0] > block_s_Array[i].bottmoLeft[0] && ball_Position_04[0] < block_s_Array[i].bottomRight[0]) &&
                ((ball_Position_04[1] + ball_Diameter_04) > block_s_Array[i].bottmoLeft[1] && ball_Position_04[1] < block_s_Array[i].topLeft[1])
            )
        ) {
            const all_Block_s_03 = Array.from(document.querySelectorAll(".block_css"))
            all_Block_s_03[i].classList.remove("block_css")
            block_s_Array.splice(i, 1)
            change_Direction_fun()
            score_04++
            score_html.innerHTML = score_04

            if (block_s_Array.length === 0) {
                score_html.innerHTML = "You Win"
                clearInterval(timer_id_04)
                document.removeEventListener("keydown", move_User_FUN)
            }
        }
    }

    if (
        ball_Position_04[0] >= (board_Width_04 - ball_Diameter_04) ||
        ball_Position_04[1] >= (board_Height_04 - ball_Diameter_04) ||
        ball_Position_04[0] <= 0
    ) {
        change_Direction_fun()
    }

    if (
        (ball_Position_04[0] > current_Position_04[0] && ball_Position_04[0] < current_Position_04[0] + block_width_04) &&
        (ball_Position_04[1] > current_Position_04[1] && ball_Position_04[1] < current_Position_04[1] + block_height_04)
    ) {
        change_Direction_fun()
    }

    if (ball_Position_04[1] <= 0) {
        clearInterval(timer_id_04)
        score_html.innerHTML = "You lose"
        document.removeEventListener("keydown", move_User_FUN)
    }
}

function change_Direction_fun() {
    if (x_Direction === 2 && y_Direction == 2) {
        y_Direction = -2
        return
    }
    if (x_Direction === 2 && y_Direction === -2) {
        x_Direction = -2
        return
    }
    if (x_Direction === -2 && y_Direction === -2) {
        y_Direction = 2
        return
    }
    if (x_Direction === -2 && y_Direction === 2) {
        x_Direction = 2
        return
    }
}