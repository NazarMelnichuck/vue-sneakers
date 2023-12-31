export const favoritesModule = {
	state: () => ({
		favoritesItems: [],
	}),
	getters: {
		getFavoritesElLenght: (state) => {
			return state.favoritesItems.length
		},
	},

	mutations: {
		addToFavorites(state, product) {
			state.favoritesItems.unshift(product)
		},
		deleteFromFavorites(state, product) {
			state.favoritesItems = state.favoritesItems.filter((item) => item.id !== product.id)
		},
	},

	actions: {},
}
