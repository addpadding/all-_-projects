

//*
document.getElementById("button").addEventListener("click", function () {
    //*

    // console.log("ddd");

    // var randomR = Math.random()*255
    // var randomG = Math.random()*255
    // var randomB = Math.random()*255

    // var randomR = return_38()
    // var randomG = return_38()
    // var randomB = return_38()

    // var randomRBG = Math.random()*255
    // var randomGBG = Math.random()*255
    // var randomBBG = Math.random()*255

    // console.log(random);

    // document.getElementById("button").style.backgroundColor = ` rgb(${randomR}, ${randomG}, ${randomB}) `

    //*
    this.style.backgroundColor = rgb_38()

    //*
    setInterval( function () {
        //*

        // var randomRBG = Math.random()*255
        // var randomGBG = Math.random()*255
        // var randomBBG = Math.random()*255

        // var randomRBG = return_38()
        // var randomGBG = return_38()
        // var randomBBG = return_38()

        // document.getElementById("div_one").style.backgroundColor = ` rgb(${randomRBG}, ${randomGBG}, ${randomBBG}) `

        //*
        document.getElementById("div_one").style.backgroundColor = rgb_38()

    }, 2000);
})

//*
function return_38() {
    //*

    //*
    return Math.random()*255
}

//*
function rgb_38() {
    //*

    //*
    var randomR = return_38()
    var randomG = return_38()
    var randomB = return_38()

    //*
    return ` rgb(${randomR}, ${randomG}, ${randomB}) `


}