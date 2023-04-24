

document.getElementById("button").addEventListener("click", function () {
    this.style.backgroundColor = rgb_38()
    setInterval( function () {
        document.getElementById("div_one").style.backgroundColor = rgb_38()
    }, 2000);
})

function return_38() {
    return Math.random()*255
}

function rgb_38() {
    var randomR = return_38()
    var randomG = return_38()
    var randomB = return_38()
    return ` rgb(${randomR}, ${randomG}, ${randomB}) `
}
