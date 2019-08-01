import Vue from 'vue'
import App from './App.vue'
import store from './vuex/vuex.config'
import router from './router/router.config'
import axios from './axios/axios.config'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './theme/blogTheme.less';



Vue.use(iView);
Vue.prototype.$GET = axios.get;
Vue.prototype.$POST = axios.post;
Vue.prototype.$ALL = axios.all;

Vue.config.productionTip = false
window.console.log(`当前环境${process.env.NODE_ENV}`)
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')