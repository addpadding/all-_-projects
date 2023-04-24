let count_02 = 0

const value_02 = document.querySelector("#value")
const btn_02 = document.querySelectorAll(".btn")

btn_02.forEach(function (item) {
    item.addEventListener("click", function (e) {
        const styles_02 = e.currentTarget.classList
        if (styles_02.contains("decrease")) {
            count_02--;
        } else if (styles_02.contains("increase")) {
            count_02++;
        } else {
            count_02 = 0;
        }
        if (count_02 > 0) {
            value_02.style.color = "green"
        }
        if (count_02 < 0) {
            value_02.style.color = "red"
        }
        if (count_02 === 0) {
            value_02.style.color = "#222"
        }
        value_02.textContent = count_02
    })
})
