import { createStore } from 'vuex'
import { productsModule } from './modules/productsModule'
import { favoritesModule } from './modules/favoritesModule'
import { cartModule } from './modules/cartModule'
import { profileModule } from './modules/profileModule'

export default createStore({
	modules: {
		products: productsModule,
		favorites: favoritesModule,
		cart: cartModule,
		profile: profileModule,
	},
})
