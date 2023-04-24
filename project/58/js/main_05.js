console.log("lesson 05");
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

        // ==========
        if (document.body.contains(no_message)) {
            no_message.remove()
        }

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

        // =============
        calculate()

    }
}

document.addEventListener("click", function (e) {
    if (e.target.className == "span_delete") {
        e.target.parentNode.remove()

        // ======================================
        if (content_box.childElementCount == 0) {
            no_message_function()
        }
    }

    if (e.target.classList.contains("span_box")) {
        e.target.classList.toggle("finished")
    }

    // =============
    calculate()
})

// =============================================
function no_message_function() {
    var msg_span = document.createElement("span")
    var msg_text = document.createTextNode("No Task To Show")

    msg_span.appendChild(msg_text)
    msg_span.className = "no_message"

    content_box.appendChild(msg_span)
}


// =============================================
function calculate() {
    count.innerHTML = document.querySelectorAll(".content_box .span_box").length
    completed.innerHTML = document.querySelectorAll(".content_box .finished").length
}
