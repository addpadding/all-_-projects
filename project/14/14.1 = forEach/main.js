const title = document.getElementsByTagName("h1");


const titleArray = Array.from(title)

console.log(titleArray);

titleArray.forEach((item) => {

    titleArray[0].style.color = "red"
    titleArray[1].style.color = "royalblue"

    item.style.fontSize = "100px"

})

// fre
titleArray.forEach(item => {

    item.style.fontSize = "100px"

    item.style.color = "green"


    titleArray[2].style.color = "royalblue"

});