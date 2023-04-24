var container_img = Array.from(document.querySelectorAll(".container_img img"));
var img_length = container_img.length;
var current = 1;

var number = document.querySelector(".number");
var next_Button = document.querySelector(".next_Button");
var prev_Button = document.querySelector(".prev_Button");

//* ================
next_Button.addEventListener("click", function () {
    if (next_Button.classList.contains("disabled")) {
        return false;
    } else {
        current++;
        theChecker();
    }
});

//* ================
prev_Button.addEventListener("click", function () {
    if (prev_Button.classList.contains("disabled")) {
        return false;
    } else {
        current--;
        theChecker();
    }
});

var ul_created = document.createElement("ul");

ul_created.setAttribute("id", "ul_id");

for (var i = 1; i <= img_length; i++) {
    var li_created = document.createElement("li");
    li_created.setAttribute("data-index", i);
    li_created.appendChild(document.createTextNode(i));
    ul_created.appendChild(li_created);
}

document.querySelector(".bullets").appendChild(ul_created);

var get_ul_created = ul_created;

var container_Bullet = Array.from(document.querySelectorAll("#ul_id li"));

//* ================
for (var i = 0; i < container_Bullet.length; i++) {
    container_Bullet[i].onclick = function () {
        current = parseInt(this.getAttribute("data-index"));
        theChecker();
    };
}

theChecker();
function theChecker() {
    number.textContent = "slide #" + current + " of " + img_length;
    removeAllActive();
    container_img[current - 1].classList.add("active");
    get_ul_created.children[current - 1].classList.add("active");

    if (current == 1) {
        prev_Button.classList.add("disabled");
    } else {
        prev_Button.classList.remove("disabled");
    }

    if (current == img_length) {
        next_Button.classList.add("disabled");
    } else {
        next_Button.classList.remove("disabled");
    }
}

function removeAllActive() {
    container_img.forEach(function (img) {
        img.classList.remove("active");
    });

    container_Bullet.forEach(function (bullet) {
        bullet.classList.remove("active");
    });
}
