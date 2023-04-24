console.log("45%");
// ============================

var box = Array.from(document.querySelectorAll(".box"));
console.log(box);

function draw_Bord() {
    box.forEach(function (box, index) {
        var style_string = "";

        if (index < 3) {
            style_string += "border-bottom: 3px solid #3e0249;";
        }

        if (index % 3 === 0) {
            style_string += "border-right: 3px solid #3e0249;";
        }

        if (index % 3 === 2) {
            style_string += "border-left: 3px solid #3e0249;";
        }

        if (index > 5) {
            style_string += "border-top: 3px solid #3e0249;";
        }
        box.style = style_string
    });
}

draw_Bord();
