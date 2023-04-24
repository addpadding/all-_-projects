import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./scss/main.scss";
import "normalize.css";

import "./filter"; // global filter

Vue.config.productionTip = false;

// Make Bold Custom Directive
Vue.directive("bold", {
    bind: function (el) {
        el.style.fontWeight = "bold";
    },
});

// Make Dynamic Font Size Custom Directive
Vue.directive("font", {
    bind: function (el, binding) {
        el.style.fontSize = binding.value + "px";
    },
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
