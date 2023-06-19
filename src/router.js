import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('./views/home/HomePage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./views/auth/LoginPage.vue'),
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('./views/auth/ForgotPassword.vue'),
  },
  // define routes for routes that require authentication and redirect  to login if not authenticated 
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('./views/dashboard/DashboardPage.vue'),
    // meta: { requiresAuth: true },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('./views/profile/ProfilePage.vue'),
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
    component: () => import('./views/user/UserListPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/user/register',
    name: 'UserRegister',
    component: () => import('./views/user/UserDetailsPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    component: () => import('./views/user/UserDetailsPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/user/:id/edit',
    name: 'UserEdit',
    component: () => import('./views/user/UserDetailsPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/user/:id/delete',
    name: 'UserDelete',
    component: () => import('./views/user/UserDetailsPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/plans',
    name: 'Plans',
    component: () => import('./views/plan/PlansListPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('./views/settings/SettingsPage.vue'),
    meta: { requiresAuth: true },
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
