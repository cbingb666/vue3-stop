import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  { path: '/login', component: () => import('@/views/login/ViewLogin.vue') },
  { path: '/svg', component: () => import('@/views/svg/ViewSvg.vue') },
];
