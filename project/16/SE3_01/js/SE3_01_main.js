
{//===== 1 ===== dark
    const darkMode = document.getElementById("darkMode")
const body = document.getElementById("body")

darkMode.addEventListener("click", (eo) => {

    body.classList.toggle("dark__CSS")

})
}



{//===== 2 ===== changeColor = اظهار واخفاء 
// #01 - 11 == 10 == 400 
// ====================
{//changeColor = اظهار
changeColor.addEventListener("mousemove", (eo) => {

    // #01 - 11 == 10 == 400 == 1.000
    hiddenul.style.display = "block"
})
}

{//changeColor = اخفاء
changeColor.addEventListener("mouseout", (eo) => {

    // #01 - 11 == 10 == 400 == 1.000
    hiddenul.style.display = "none"
})
}
}



{//===== 3 ===== تغيير الالوان بشكل عشوائي
// 01 header
// ====================
headerbg.addEventListener("click", (eo) => {

// header تغير لون 
const random = Math.round(Math.random() * 360)

    header.style.backgroundColor = `hsl( ${random}, 44%, 55%)`


// Title تغير لون
const webTitle = document.querySelector("#header > h1")

    webTitle.style.backgroundColor = `hsl( ${random}, 44%, 55%)`

// dark تغير لون
    darkMode.style.backgroundColor = `hsl( ${Math.round(Math.random() * 100)}, 44%, 55%)`

})
}



{//===== 4 ===== h1 تغير لون الخلفية 
// ========== #01 - 11 == 10 == 400 == 1.000 ==========
titlebg.addEventListener("click", (eo) => {

const allTitle = document.querySelectorAll("h1:not(#header > h1)")

    allTitle.forEach(item => {

        // h1 تغير لون 
        const random = Math.round(Math.random() * 360)
        item.style.backgroundColor = `hsl( ${random}, 44%, 55%)`

    });
})
}



{//===== 5 ===== h1 تغير لون الخط
// ========== #01 - 11 == 10 == 400 == 1.000 ==========
const changeColorH1 = () => {

    return Math.round(Math.random() * 360)
    
}

titlecolor.addEventListener("click", (eo) => {

    const allTitle = document.querySelectorAll("h1:not(#header > h1)")
    
    allTitle.forEach(item => {

        item.style.color = `hsl( ${changeColorH1()}, 44%, 55%)`

    });
})

}
