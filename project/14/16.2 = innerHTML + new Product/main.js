

const youtube = document.getElementById("you")

const bigContainer = document.querySelector(".big-container")

const kahyaan = document.getElementById("kahyaan")
const visa = document.getElementById("visa")


const buy = document.querySelectorAll(".js-buy ")
// buy زرار
buy.forEach(item => {

    item.addEventListener("click", (eo) => {

        // اضافة الخلفية 
        bigContainer.classList.add("active")

        // scroll up
        eo.preventDefault()

        //  اخفاء = ياكحيان 
        kahyaan.style.display = "none"

        // visa استمرار في الظهور
        visa.style.display = "block"
    
    })

});


const press = document.querySelectorAll(".press__here")
// زرار = اضغط هنا
press.forEach(item => {

    item.addEventListener("click", (eo) => {
    
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


    }, 1000);
    
    })

});


// الغاء زرار اليوتيوب
youtube.addEventListener("click", (eo) => {

    eo.preventDefault()

})


// dark
const darkMode = document.getElementById("darkMode")
const body = document.getElementById("body")

darkMode.addEventListener("click", (eo) => {

    body.classList.toggle("dark__CSS")

})


// ======== 016.1 ====

const addProduct = document.querySelector("#add__pro")
const proContainer = document.querySelector("#pro__container")

proContainer.style.border = "5px solid red"

addProduct.addEventListener("click", (eo) => {

    // الطريقة الاولى 
    // const newProduct = '<p class="ali"> new Product </p>'

    // const newProduct = `<p class="ali"> new Product </p>`


    const newProduct = `

    <div class="card mycard" style="width: 18rem;">

        <img src="img/pexels-photo-3826678.jpeg" class="card-img-top mycard__img" alt="...">

        <div class="card-body">
            <h5 class="card-title">My Card title</h5>

            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>

            <a id="buy" href="#" class="js-buy btn btn-primary">buy</a>

        </div>

    </div>


    `

    proContainer.innerHTML += newProduct

})