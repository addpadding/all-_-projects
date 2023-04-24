const buy = document.getElementById("buy")


buy.addEventListener("click", (eo) => {
    
    eo.preventDefault()

    cuteAlert({
        type: "success",
        title: "Success Title",
        message: "Success Message",
        buttonText: "Okay"
    })

})
