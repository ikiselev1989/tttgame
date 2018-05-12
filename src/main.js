import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Store from "./store";

Vue.config.productionTip = false;

let store = new Store();

new Vue({
  data: { store },
  router,
  render: h => h(App),
  beforeMount() {
    this.$router.replace("/");
  }
}).$mount("#app");
