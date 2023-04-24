var box = Array.from(document.querySelectorAll(".box"));
var play_Text = document.querySelector("#play_Text");
var re_start_btn = document.querySelector("#re_start_btn");

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

function box_clicked(e) {
    var id = e.target.id;

    if (!spaces[id]) {
        spaces[id] = current;
        e.target.innerText = current;

        if (player_Has_Won()) {
            play_Text.innerText = `${current} = has win!`;
            // ====================
            return;
        }

        current = current === o_Text ? x_Text : o_Text;
    }
}

function player_Has_Won() {
    //from top left, check across, down, and diagonal
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

    //from bottom check up and across
    if (spaces[8] === current) {
        if (spaces[2] === current && spaces[5] === current) {
            console.log(`${current} wins on the right`);
            return true;
        }

        if (spaces[7] === current && spaces[6] === current) {
            console.log(`${current} wins on the bottom`);
            return true;
        }
    }

    //from middle check middle vertical and middle horizontal
    if (spaces[4] === current) {

        if (spaces[1] === current && spaces[7] === current) {
            console.log(`${current} wins on the middle`);
            return true;
        }

        if (spaces[3] === current && spaces[5] === current) {
            console.log(`${current} wins on the middle`);
            return true;
        }
    }
}

re_start_btn.addEventListener("click", restart);

function restart() {
    spaces.forEach(function (space, index) {
        spaces[index] = null;
    });

    box.forEach(function (box) {
        box.innerText = "";
    });

    play_Text.innerText = `Let's play`;

    current = o_Text;
}


draw_Bord();