// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import  VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)
import  Home from './Home.vue'
import  Category from './Category.vue'
import  Me from './Me.vue'
import  ShoppingCart from './Cart.vue'
import BookDetails from './books/details.vue'
import  Main from   './Main.vue'


Vue.config.productionTip = false
const router =new VueRouter({
  mode:'history',
  base:__dirname,
  linkActiveClass:'active',
  routes:[
    {name:'Main',path:'/',component:Main,children:[
      {name:'Home',path:'/',component:Home},
      {name:'Categories',path:'/categories',component:Category},
      {name:'ShoppingCart',path:'/ShoppingCart',component:ShoppingCart},
      {name:'Me',path:'/me',component:Me},
      {name:'BookDetails',path:'/books/:id',component:BookDetails}
    ]},

  ],
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App),
  http:{
    root:'/api',
    headers:{

    }
  }
})
