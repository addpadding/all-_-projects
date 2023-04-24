// #01 11 = 30
const cart_btn_html_01 = document.querySelector(".cart_btn")
// #04 11 = 10
const close_cart_html_02 = document.querySelector(".close_cart")

// #04 11 = 40 = 200
const clear_cart_html_03 = document.querySelector(".clear_cart")

// #04 11 
const cart_DOM_html_04 = document.querySelector(".cart")

// #04
const cart_overlay_html_05 = document.querySelector(".cart_overlay")

// #04 11 = 30 = 100
const cart_item_html_06 = document.querySelector(".cart_item")

// #04 11 = 30
const cart_content_html_07 = document.querySelector(".cart_content")

// #03 22
const products_center_DOM_html_08 = document.querySelector(".products_center")

let cart_09 = []

class Products_Arr_10 {
    async getProducts_10() {
        try {

            let result_15 = await fetch("products.json")

            let data_16 = await result_15.json()

            let products_17 = data_16.items_json

            products_17 = products_17.map(item_18 => {
                const { title_json, price_json } = item_18.fields_json
                const { id_json } = item_18.sys_json
                const { image_json } = item_18.fields_json.image_json.fields_json.file_json.url_json
                return { title_json, price_json, id_json, image_json }
            })
            return products_17
        } catch (error) {
            console.log(error);
        }
    }
}

class UI_11 {
    displayProducts_20(producat_s_params_21) {
        console.log(producat_s_params_21);
        let result_22 = "";
        producat_s_params_21.forEach(producat_forEach_21 => {
            result_22 += `
            <article class="article-01 product">
                <div class="img_container">
                    <img class="product_img" src=${producat_forEach_21.image_json} alt="">
                    <button class="bag_btn" data-id=${producat_forEach_21.id_json}>
                        <i class="fas fa-shopping-cart"></i>
                        add to bag
                    </button>
                </div>
                <h3>${producat_forEach_21.title_json}</h3>
                <h4>$${producat_forEach_21.price_json}</h4>
            </article>
            `;
        });
        products_center_DOM_html_08.innerHTML = result_22
    }
}

class Storage_12 { }

document.addEventListener("DOMContentLoaded", () => {
    const ui_13 = new UI_11()
    const producat_s_14 = new Products_Arr_10

    producat_s_14.getProducts_10().then(producat_19 =>
        ui_13.displayProducts_20(producat_19))
})


