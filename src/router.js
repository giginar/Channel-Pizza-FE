import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Pizzas from './components/Pizzas.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Pizzas
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./components/Profile.vue')
    },
    {
      path: '/pizzas',
      name: 'pizzas',
      component: () => import('./components/Pizzas.vue')
    }
  ]
});
