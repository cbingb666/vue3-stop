import { createApp } from 'vue';
import App from './App.vue';
import { applyRouter } from './router';
import '@/styles/global.scss';
import 'virtual:svg-icons-register';

const app = createApp(App);
applyRouter(app);
app.mount('#app');
