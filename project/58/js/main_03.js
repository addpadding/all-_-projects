console.log("lesson 03");
// =======================


var the_input = document.querySelector(".the_input")
var plus_button = document.querySelector(".plus_button")
var content_box = document.querySelector(".content_box")
var no_message = document.querySelector(".no_message")

var count = document.querySelector(".count span")
var completed = document.querySelector(".completed span")

window.onload = function () {
    the_input.focus()
}

plus_button.onclick = function () {
    if (the_input.value === "") {
        console.log("no");
    } else {
        no_message.remove()

        var span_box = document.createElement("span")
        var span_delete = document.createElement("span")

        var input_box = document.createTextNode(the_input.value)
        var Delete_text = document.createTextNode("Delete")

        span_box.appendChild(input_box)
        span_box.className = "span_box"

        span_delete.appendChild(Delete_text)
        span_delete.className = "span_delete"

        span_box.appendChild(span_delete)
        content_box.appendChild(span_box)

        the_input.value = ""
        the_input.focus()

    }
}
