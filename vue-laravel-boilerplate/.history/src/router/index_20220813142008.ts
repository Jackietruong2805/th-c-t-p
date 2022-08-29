import { HOME_ROUTE } from '@/views/home/HomeView.route';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //
    HOME_ROUTE,
  ],
});

export default router;
