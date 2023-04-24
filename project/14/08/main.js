// const buy = document.getElementById("buy")

const buy = document.getElementsByClassName("btn")[0]
const yes = document.getElementsByClassName("btn")[1]

const youtube = document.getElementById("you")

const bigContainer = document.querySelector(".big-container")

// تفعيل الزرار
buy.addEventListener("click", (eo) => {


    // الطريقة 111
    // ===================
    // bigContainer.style.display = "block"

    // الطريقة 222
    // ===================
    bigContainer.classList.add("active")

    // حذفت الخلفية بنفسي 
    // ==========😍=========
/*
    setTimeout(() => {
        

        bigContainer.classList.remove("active")

    }, 2000);

*/

    /*
    الغاء انه يعمل
    (scroll up)
    */
    eo.preventDefault()

})

// حذف الخلفية 
yes.addEventListener("click", (eo) => {

    bigContainer.classList.remove("active")
    
})

// الغاء زرار اليوتيوب
youtube.addEventListener("click", (eo) => {
    

    eo.preventDefault()

})