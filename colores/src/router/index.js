import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue';
import VueGaleria from '../components/VueGaleria.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: VueGaleria,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
