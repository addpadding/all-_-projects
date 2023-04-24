import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Help from "../views/Help.vue";
import Blog from "../views/Blog.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/blog",
        name: "blog",
        component: Blog,
    },
    {
        path: "/help",
        name: "help",
        component: Help,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
