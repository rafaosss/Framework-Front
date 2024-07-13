import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import MainAppView from '../views/MainAppView.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/app', component: MainAppView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
