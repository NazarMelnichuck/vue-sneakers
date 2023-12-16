import MainPage from '../pages/MainPage.vue'
import FavoritesPageVue from '@/pages/FavoritesPage.vue'
import ProductPageVue from '@/pages/ProductPage.vue'
import ProfilePageVue from '@/pages/ProfilePage.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: MainPage,
	},
	{
		path: '/favorites',
		component: FavoritesPageVue,
	},
	{
		path: '/profile',
		component: ProfilePageVue,
	},
	{
		path: '/product/:id',
		name: 'productPage',
		component: ProductPageVue,
	},
]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL),
})

export default router
