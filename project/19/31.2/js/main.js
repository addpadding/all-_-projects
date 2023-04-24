

//*
for (var i = 1; i <= 10; i++) {
    //*

    //*
    document.getElementById("results").innerHTML += ` <h3> Table Of ${i} </h3> `

    //*
    for (var j = 1; j <= 10; j++) {
        //*

        //*
        // console.log(i, j, i*j);

        //*
        document.getElementById("results").innerHTML += ` ${i} X ${j} = ${i*j} <br> `

    }

    //*
    document.getElementById("results").innerHTML += ` <hr> `
}