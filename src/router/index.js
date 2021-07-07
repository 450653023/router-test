// 这里面负责写路由映射，便于管理
// 引入路由模块并使用它
import Vue from "vue";
import VueRouter from "vue-router";
import PageOne from '../components/PageOne';
import PageTwo from '../components/PageTwo';

Vue.use(VueRouter);

// 创建路由实例并配置路由映射
const router = new VueRouter({
  routes: [
    {
      path:'*',
      redirect:'/PageOne'
    },
    {
      path: "/PageOne",
      component: PageOne,
    },
    {
      path: "/PageTwo",
      component: PageTwo,
    }
  ]
});

// 输出router
export default router;