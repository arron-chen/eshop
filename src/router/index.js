import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import product from '@/components/product'

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
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/product',
      name:'product',
      component:product
    }
  ]
}))

export default router

