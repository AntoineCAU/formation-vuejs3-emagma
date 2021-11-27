import { createRouter, createWebHistory } from 'vue-router';
import Category from '@/views/Category.vue';
import Home from '@/views/Home.vue';
import Product from '@/views/Product.vue';

const routes = [
  { path: '/', component: Home, name: 'homepage' },
  { path: '/categories/:id', component: Category, name: 'category', props: true },
  { path: '/products/:id', component: Product, name: 'product', props: true },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
