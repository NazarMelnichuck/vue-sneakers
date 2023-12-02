export const favoritesModule = {
	state: () => ({
		favoritesItems: [],
	}),
	getters: {},

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
