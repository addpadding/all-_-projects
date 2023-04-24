
let title_html_05 = document.querySelector(".title")

let turn_01 = "x"

let square_s_Arr_07 = []

function end_08_fun(num1, num2, num3,) {
    title_html_05.innerHTML = `${square_s_Arr_07[num1]} winner `
    document.getElementById("item" + num1).style.background = "#000"
    document.getElementById("item" + num2).style.background = "#000"
    document.getElementById("item" + num3).style.background = "#000"

    setInterval(function () {
        title_html_05.innerHTML += "."

        // =====
        title_html_05.classList.add("orange0")
    }, 1000)

    setTimeout(function () {
        location.reload()

    }, 4000);
}

function winner_06_fun() {
    for (let i = 1; i < 10; i++) {
        square_s_Arr_07[i] = document.getElementById("item" + i).innerHTML
    }

    // ===================
    if (square_s_Arr_07[1] == square_s_Arr_07[2] &&
        square_s_Arr_07[2] == square_s_Arr_07[3] &&
        square_s_Arr_07[1] != "") {

        end_08_fun(1, 2, 3)

    } else if (square_s_Arr_07[4] == square_s_Arr_07[5] &&
        square_s_Arr_07[5] == square_s_Arr_07[6] &&
        square_s_Arr_07[5] != "") {

        end_08_fun(4, 5, 6)

    } else if (square_s_Arr_07[7] == square_s_Arr_07[8] &&
        square_s_Arr_07[8] == square_s_Arr_07[9] &&
        square_s_Arr_07[8] != "") {

        end_08_fun(7, 8, 9)
    }
    // ===================

    if (square_s_Arr_07[1] == square_s_Arr_07[4] &&
        square_s_Arr_07[4] == square_s_Arr_07[7] &&
        square_s_Arr_07[1] != "") {

        end_08_fun(1, 4, 7)

    } else if (square_s_Arr_07[2] == square_s_Arr_07[5] &&
        square_s_Arr_07[5] == square_s_Arr_07[8] &&
        square_s_Arr_07[5] != "") {

        end_08_fun(2, 5, 8)

    } else if (square_s_Arr_07[3] == square_s_Arr_07[6] &&
        square_s_Arr_07[6] == square_s_Arr_07[9] &&
        square_s_Arr_07[6] != "") {

        end_08_fun(3, 6, 9)

    }
    // ===================

    if (square_s_Arr_07[1] == square_s_Arr_07[5] &&
        square_s_Arr_07[5] == square_s_Arr_07[9] &&
        square_s_Arr_07[5] != "") {

        end_08_fun(1, 5, 9)

    } else if (square_s_Arr_07[2] == square_s_Arr_07[5] &&
        square_s_Arr_07[5] == square_s_Arr_07[7] &&
        square_s_Arr_07[5] != "") {

        end_08_fun(3, 5, 7)

    }
    // ===================
}

function game_02_fun(id_03) {
    let element_04 = document.getElementById(id_03)

    if (turn_01 === "x" && element_04.innerHTML == "") {
        element_04.innerHTML = "X"
        turn_01 = "o"
        title_html_05.innerHTML = "O"
        // =====
        // title_html_05.classList.add("green0")


    } else if (turn_01 === "o" && element_04.innerHTML == "") {
        element_04.innerHTML = "O"
        turn_01 = "x"
        title_html_05.innerHTML = "X"
        // =====
        // title_html_05.classList.add("green0")
    }
    winner_06_fun()
}