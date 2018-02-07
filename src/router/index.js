import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import product from '@/views/product'
import list from '@/views/list'
import cart from '@/views/cart'

Vue.use(Router)

const RouterConfig ={
  //使用html5的history路由模式
  mode:'history',
  routes:Router
}

const router = new Router(Object.assign({}, RouterConfig,{
  routes: [
    {
      path: '/',
      name: 'index',
      meta:{
        title:'首页'
      },
      component: index,
      children: [
        {
          path:'/',
          component:list,
          meta:{
            title:'首页'
          },
        },
      ]
    },
    {
      path:'/product/:id',
      meta:{
        title:'商品详情'
      },
      component:product
    },
    {
      path:'/cart',
      meta:{
        title:'购物车'
      },
      component:cart
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
}));
router.beforeEach((to,from,next)=>{
  window.document.title =to.meta.title;
  next();
});
router.afterEach((to,from,next)=>{
  window.scrollTo(0,0);
})

export default router

