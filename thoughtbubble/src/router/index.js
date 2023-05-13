import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/Create.vue'
import Bank from '../views/Bank.vue'
import Err from '../views/Err.vue'
import Article from '../views/Article.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create-post',
    name: 'create',
    component: Create
  },
  {
    path: '/bank',
    name: 'bank',
    component: Bank
  },
  {
    path: '/thought/:id',
    name: 'articles',
    component: Article
  },
  {
    path: '*', 
    component: Err
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
