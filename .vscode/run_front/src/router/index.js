import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import LoginPage from '../views/LoginPage.vue';
import SignupPage from '../views/SignupPage.vue';
import TestPage from '../views/TestPage.vue';
import ButtonPage from '../views/ButtonPage.vue';
import ComuPage from '../views/ComuPage.vue';
import SolutionPage from '../views/SolutionPage.vue';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: SignupPage
  },
  {
    path: '/test',
    name: 'TestPage',
    component: TestPage
  },
  {
    path: '/button',
    name: 'ButtonPage',
    component: ButtonPage
  },
  {
    path: '/comu',
    name: 'ComuPage',
    component: ComuPage
  },
  {
    path: '/solution',
    name: 'SolutionPage',
    component: SolutionPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;