import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main.vue';
import Auth from '@/pages/Auth.vue';
import Profile from '@/pages/Profile.vue';
import Company from '@/pages/Company.vue';
import Checkout from '@/pages/Checkout.vue';

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/auth',
        component: Auth,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/company/:id',
        component: Company,
    },
    {
        path: '/checkout/:id',
        component: Checkout,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
