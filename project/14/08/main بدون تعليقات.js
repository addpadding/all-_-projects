const buy = document.getElementsByClassName("btn")[0]
const yes = document.getElementsByClassName("btn")[1]

const youtube = document.getElementById("you")

const bigContainer = document.querySelector(".big-container")

buy.addEventListener("click", (eo) => {


    bigContainer.classList.add("active")

    eo.preventDefault()

})

yes.addEventListener("click", (eo) => {

    bigContainer.classList.remove("active")
    
})

youtube.addEventListener("click", (eo) => {
    

    eo.preventDefault()

})