let switcher_Lis = document.querySelectorAll(".switcher li")

let img_s = Array.from(document.images)

switcher_Lis.forEach(li_item => {
    li_item.addEventListener("click", remove_active)
    li_item.addEventListener("click", manage_imgs)
});

// remove active class from all (Li) and add current
function remove_active() {
    switcher_Lis.forEach(li_item => {
        li_item.classList.remove("active")
        this.classList.add("active")
    });
}

// manage imgs
function manage_imgs() {
    img_s.forEach(img_item => {
        img_item.style.display = "none"
    });
    document.querySelectorAll(this.dataset.cat).forEach(el => {
        el.style.display = "block"
    });
}