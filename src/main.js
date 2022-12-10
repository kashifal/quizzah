import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import VueApexCharts from "vue3-apexcharts";
import store from './store/index';


import './style.css'
import App from './App.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path:'/',
        component: Home
    }
  ],
});

createApp(App).use(router).use(VueApexCharts).use(store).mount("#app");
