import Vue         from 'vue';
import Router      from 'vue-router';
import homePage    from "@vue/home.vue";
import aboutPage   from "@vue/about.vue";
import contactPage from "@vue/contact.vue";
import OddAnalysis from "@vue/oddAnaly.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: OddAnalysis
        },
        {
            path: "/home",
            component: homePage
        },
        {
            path: '/about',
            component: aboutPage
        },
        {
            path: "/contact",
            component: contactPage
        }
    ]
});
