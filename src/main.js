import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; 

import Home from './pages/Home.vue';
import Dashboard from './pages/Dashboard.vue'; 
import store from './store/index';


import './style.css'
import App from './App.vue'


console.log(Dashboard);
let router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/deshboard",
      component: Dashboard,
    },
  ],
});

createApp(App).use(store).use(router).mount("#app");
