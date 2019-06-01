// Styles
import "minireset.css";
import 'element-ui/lib/theme-chalk/index.css';
import "@style/home.css";


// Scripts

import Vue       from 'vue';
import VueRouter from "vue-router";
import App       from "@vue/App.vue";
import router    from "./router";

Vue.use(VueRouter);


new Vue({
    el: '#app',
    router,
    render: h => h(App),
});



