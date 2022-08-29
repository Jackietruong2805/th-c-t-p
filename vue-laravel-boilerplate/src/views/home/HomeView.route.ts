import type { RouteRecordRaw } from 'vue-router';

export const HOME_ROUTE: RouteRecordRaw = {
  path: '/',
  component: () => import('./HomeView.vue'),
};
