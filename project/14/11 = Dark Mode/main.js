const buy = document.getElementsByClassName("btn")[0]
const yes = document.getElementsByClassName("btn")[1]

const youtube = document.getElementById("you")

const bigContainer = document.querySelector(".big-container")

const kahyaan = document.getElementById("kahyaan")
const visa = document.getElementById("visa")

// buy زرار
buy.addEventListener("click", (eo) => {


// اضافة الخلفية 
    bigContainer.classList.add("active")

    // scroll up
    eo.preventDefault()

    //  اخفاء = ياكحيان 
    kahyaan.style.display = "none"

    // visa استمرار في الظهور
    visa.style.display = "block"



})

// yes زرار
yes.addEventListener("click", (eo) => {
    
    // حذف الخلفية 
    // bigContainer.classList.remove("active")

    //  اظهار = ياكحيان 
    kahyaan.style.display = "block"

    // visa اخفاء
    visa.style.display = "none"

    setTimeout(() => {

        //  اخفاء = ياكحيان 
        kahyaan.style.display = "none"

        // حذف الخلفية 
        bigContainer.classList.remove("active")


    }, 3000);

    
})

// الغاء زرار اليوتيوب
youtube.addEventListener("click", (eo) => {
    

    eo.preventDefault()

})


const darkMode = document.getElementById("darkMode")
const body = document.getElementById("body")

darkMode.addEventListener("click", (eo) => {

    body.classList.toggle("dark__CSS")

})