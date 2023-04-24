
const time_left_Display_html = document.querySelector("#time_left")
const result_Display_html = document.querySelector("#result")
const start_pause_button_html = document.querySelector("#start_pause_button")
const square_s_html = document.querySelectorAll(".grid_html div")

let current_Index_05 = 76
const width_05 = 9

function move_Frog_fun(e) {
    square_s_html[current_Index_05].classList.remove('frog')

    switch (e.key) {
        case 'ArrowLeft':
            if (current_Index_05 % width_05 !== 0) current_Index_05 -= 1
            break
        case 'ArrowRight':
            if (current_Index_05 % width_05 < width_05 - 1) current_Index_05 += 1
            break
        case 'ArrowUp':
            if (current_Index_05 - width_05 >= 0) current_Index_05 -= width_05
            break
        case 'ArrowDown':
            if (current_Index_05 + width_05 < width_05 * width_05) current_Index_05 += width_05
            break
    }
    square_s_html[current_Index_05].classList.add('frog')
}

document.addEventListener("keyup", move_Frog_fun)


