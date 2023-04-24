var span = document.getElementsByTagName("span")
var div = document.getElementsByTagName("div")

var x = 0

span[1].onclick = () => {

    x++

    for (var i of div) {

        if (x == 0) {
            i.style.left = "0px"
        }

        if (x == 1) {
            i.style.left = "-740px"
        }

        if (x == 2) {
            i.style.left = "-1480px"
        }

        if (x == 3) {
            i.style.left = "-2220px"
        }

        if (x == 4) {
            i.style.left = "-2960px"
        }

        if (x > 4) {
            x = 4
        }

    }
}


span[0].onclick = () => {

    x--

    for (var i of div) {

        if (x == 0) {
            i.style.left = "0px"
        }

        if (x == 1) {
            i.style.left = "-740px"
        }

        if (x == 2) {
            i.style.left = "-1480px"
        }

        if (x == 3) {
            i.style.left = "-2220px"
        }

        if (x < 0) {
            x = 0
        }

    }
}