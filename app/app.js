import Vue from "vue";
import VueRouter from "vue-router";
import Vuei18n from "vue-i18n";
import App from "./components/app.vue";
import page1 from "./components/home/page1.vue";
import page2 from "./components/home/page2.vue";

Vue.use(VueRouter);

Vue.use(Vuei18n);
const i18n = new Vuei18n({
   locale: "en"
});

const router = new VueRouter({
   routes: [
      { path: "/page1", component: page1 },
      { path: "/page2", component: page2 },
      { path: "/", redirect: "/page1" }
   ]

});
// Will redirect to login if token is not set
/*
router.beforeEach((to, from, next) => {
    let loginPath = "/login";
    if(!Settings.token && to.path != loginPath){
        next(loginPath);
        return;
    }
    next();
});
*/

new Vue({
   i18n,
   el: '#app',
   router: router,
   render: function (h) {
      return h(App);
   }
});