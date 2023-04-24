import Vue from "vue";

// Make UpperCase
Vue.filter("uppercase", function (v) {
    return v.toUpperCase();
});

// Make Reverse
Vue.filter("reversing", function (v) {
    return v.split("").reverse().join("");
});
