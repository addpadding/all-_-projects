console.log("main");
// ============================

var box = Array.from(document.querySelectorAll(".box"));
// ====================
var play_Text = document.querySelector("#play_Text");

var spaces = [null, null, null, null, null, null, null, null, null];
var o_Text = "O";
var x_Text = "X";
var current = o_Text;

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

        box.style = style_string;

        box.addEventListener("click", box_clicked);
    });
}
draw_Bord();

function box_clicked(e) {
    var id = e.target.id;

    if (!spaces[id]) {
        spaces[id] = current;
        e.target.innerText = current;

        // ====================
        if (player_Has_Won()) {
            play_Text.innerText = `${current} = has won!`;
            return;
        }

        current = current === o_Text ? x_Text : o_Text;
    }
}

// ====================
function player_Has_Won() {
    if (spaces[0] === current) {

        if (spaces[1] === current && spaces[2] === current) {
            console.log(`${current} wins up top`);
            return true;
        }

        if (spaces[3] === current && spaces[6] === current) {
            console.log(`${current} wins on the left`);
            return true;
        }

        if (spaces[4] === current && spaces[8] === current) {
            console.log(`${current} wins on the left`);
            return true;
        }

    }
}
