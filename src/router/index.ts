import { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes';

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export const applyRouter = (app: App<Element>) => {
  app.use(router);
};
