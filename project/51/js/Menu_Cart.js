let carts_products_menu = document.querySelector(".carts_products");
let carts_products_div_Dom2 = document.querySelector(".carts_products div");
let badge_Dom_2 = document.querySelector(".badge");
let shopping_cart_icon = document.querySelector(".shopping_cart");

// open cart menu
shopping_cart_icon.addEventListener("click", open_cart_menu);

// check if items in localStoreage
let add_item = JSON.parse(localStorage.getItem("productCart_set"))
    ? JSON.parse(localStorage.getItem("productCart_set"))
    : [];

if (add_item) {
    add_item.map((item) => {
        carts_products_div_Dom2.innerHTML += `<p> ${item.title_obj} ${item.qty_obj} </p> `;
    });

    badge_Dom_2.style.display = "block";
    badge_Dom_2.innerHTML += add_item.length;
}


// open cart menu
function open_cart_menu() {
    if (carts_products_div_Dom2.innerHTML != "") {
        if (carts_products_menu.style.display == "block") {
            carts_products_menu.style.display = "none";
        } else {
            carts_products_menu.style.display = "block";
        }
    }
}
