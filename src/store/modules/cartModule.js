const body = document.body
export const cartModule = {
	state: () => ({
		cartItems: [],
		totalPrice: 0,
		cartInfo: [
			{
				label: 'Всього',
				value: 0,
			},
			{
				label: 'Налог 5%',
				value: 0,
			},
		],
		isCart: false,
		orderComplite: false,
	}),

	getters: {},

	mutations: {
		openCart(state) {
			state.isCart = true
			body.style = 'overflow: hidden'
		},
		closeCart(state) {
			state.isCart = false
			body.style = 'overflow: auto'
		},
		addToCart(state, product) {
			state.cartItems.unshift(product)
			state.totalPrice = state.totalPrice + product.price

			state.cartInfo[0].value = state.totalPrice
			state.cartInfo[1].value = (state.totalPrice / 100) * 5
		},
		deleteFromCart(state, product) {
			state.cartItems = state.cartItems.filter((item) => item.id !== product.id)
			state.totalPrice = state.totalPrice - product.price

			state.cartInfo[0].value = state.totalPrice
			state.cartInfo[1].value = (state.totalPrice / 100) * 5
		},
		order(state) {
			state.orderComplite = true
			state.totalPrice = 0
			state.cartItems = []
		},
		closeCartAfterOrder(state) {
			state.orderComplite = false
		},
	},

	actions: {},
}
