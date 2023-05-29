import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePage.vue';
import Login from './components/LoginPage.vue';
import ForgotPassword from './components/ForgotPassword.vue';
import Dashboard from './components/DashboardPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  // define routes for routes that require authentication and redirect  to login if not authenticated 
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    // meta: { requiresAuth: true },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('./components/ProfilePage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('./components/AdminPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('./components/UserPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    // component: () => import('./components/UserDetailsPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/user/:id/edit',
    name: 'UserEdit',
    // component: () => import('./components/UserEditPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/user/:id/delete',
    name: 'UserDelete',
    // component: () => import('./components/UserDeletePage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/plans',
    name: 'Plans',
    component: () => import('./components/PlansPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('./components/SettingsPage.vue'),
    meta: { requiresAuth: true },
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
