import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import VueSocketIO from "vue-socket.io";
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(new VueSocketIO({
  debug: true,
  connection:'http://127.0.0.1:5000',
}))
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
