import MainPage from '../pages/MainPage.vue'
import FavoritesPageVue from '@/pages/FavoritesPage.vue'
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
]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL),
})

export default router
