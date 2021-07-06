import Vue from 'vue';
import App from './App.vue';
import './assets/css/base/reset.scss';
import './assets/css/base/safe-area.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')