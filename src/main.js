import Vue from "vue/dist/vue.js";
import VueRouter from "vue-router";
// import VueFullPage from 'vue-fullpage.js';
import App from "./App.vue";

// Route components
// import Outdated from "./sections/Outdated";

Vue.config.productionTip = false;
Vue.use(VueRouter);
// Vue.use(VueFullPage);
// Components (with lazy loaded routes and not templates)
const Homepage = () => import("./components/Homepage.vue");
const Outdated = () => import("./sections/Outdated.vue");
const ArchIsMyEx = () => import("./sections/ArchIsMyEx.vue");

// Routes
const routes = [
  { path: "/", component: Homepage },
  { path: "/outdated", component: Outdated },
  { path: "/arch", component: ArchIsMyEx }
];

// Router
const router = new VueRouter({
  mode: "history",
  routes
  // base: "/src/"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
