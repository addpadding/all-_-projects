var container_img = Array.from(document.querySelectorAll(".container_img img"))
var img_length = container_img.length
var current = 1;

var number = document.querySelector(" .number")
var next_Button = document.querySelector(".next_Button")
var prev_Button = document.querySelector(".prev_Button")

next_Button.addEventListener("click", function () {
    console.log("next");
})

prev_Button.addEventListener("click", function () {
    console.log("prev");
})

var ul_created = document.createElement("ul")

ul_created.setAttribute("id", "ul_id")

for (var i = 1; i <= img_length; i++) {
    var li_created = document.createElement("li")
    li_created.setAttribute("data-index", i)
    li_created.appendChild(document.createTextNode(i))
    ul_created.appendChild(li_created)
}

document.querySelector(".bullets").appendChild(ul_created)




