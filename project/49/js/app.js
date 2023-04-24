const select = document.querySelector("select")
const product_s = document.querySelector(".product")

select.addEventListener("change", (event) => {

    const selected = event.target.value;

    for (let i = 0; i < product_s.children.length; i++) {
        const product = product_s.children[i];

        if (selected === "none") {
            product.style.display = "block"

        } else {

            if (product.id !== selected) {
                product.style.display = "none"

            } else {
                product.style.display = "block"
            }

        }

    }
})