import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/testing',
    name: 'testing',
    component: () => import('../views/Testing.vue'),
  },

  
  // {
  //   path: '/addgoods',
  //   name: 'addgoods',
  //   component: () => import('../views/AddGoods.vue'),
  // },
  {
    path: '/add',
    name: 'add',
    component: () => import('../testting/AddDle.vue'),
  },
  // {
  //   path: '/products',
  //   name: 'products',
  //   component: () => import('../views/Products.vue'),
  // },


  
  // 路由传参：可以选择是否传参  ？表示可选择的  可以传也可以不传,
  // 开启props接受路由参数的功能:props:true,

  {
    path: '/',
    props:true,
    name: 'home',
    component: HomeView,
    children:[
      {
        path: 'pdetails',
      
        component: () => import('../views/Pdetails.vue'),

      },
      {
        path:'index',
        component:()=>import('../views/Index.vue')
      },
      {
        path:'addgoods',
        component:()=>import('../views/AddGoods.vue')
      },
      {
        path:'products',
        component: () => import('../views/Products.vue'),
      },
      {
        path:'addment',
        component: () => import('../views/AddMent.vue'),
      },
      {
        path:'order',
        component: () => import('../views/Order.vue'),
      },
      {
        path:'xgproducts',
        name:'xgproducts',
        component: () => import('../views/Xgproducts.vue'),
      },
      {
        path:'xgadd',
        name:'xgadd',
        component: () => import('../views/XgAdd.vue'),
      }

    ]

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
