import Vue from 'vue';
import App from './App';
import router from './router';

new Vue({
  el: '#app',    //这里绑定的是index.html中的id为app的div元素
  router,
  render: h => h(App)
})