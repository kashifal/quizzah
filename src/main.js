import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; 

import Home from './pages/Home.vue';
import Dashboard from './pages/Dashboard.vue';  
import Leaderboard from "./pages/Leaderboard.vue";  
import Authenticate from "./pages/Authenticate.vue";   
import store from './store/index';


import './style.css'
import App from './App.vue'

 
let router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/dashboard",
      component: Dashboard,
    },
    {
      path: "/leaders",
      component: Leaderboard,
    },

    {
      path: "/auth",
      component: Authenticate,
    }, 
  ],
});

createApp(App).use(store).use(router).mount("#app");
