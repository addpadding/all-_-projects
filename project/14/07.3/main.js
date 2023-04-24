const buy = document.getElementById("buy")

const mydiv = document.getElementById("mydiv");

// ==============الطريقة 111=============
const nfn = () => {

    const title = document.createElement("h1")
    
    title.innerText ="اتعلم في ساعة"

    mydiv.append(title)

    title.classList.add("mb")

}

buy.addEventListener("click", nfn)

// ==============الطريقة 222=============

buy.addEventListener("click", 

    () => {

        const title = document.createElement("h1")
        
        title.innerText ="اتعلم في ساعة"

        mydiv.append(title)

        title.classList.add("mb")

    }

)

// =====================================
buy.addEventListener("click", 

    () => {

        buy.classList.add("bc")

    }

)
