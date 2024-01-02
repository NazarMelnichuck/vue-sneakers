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

	getters: {
		getCartElLenght: (state) => {
			return state.cartItems.length
		},
	},

	mutations: {
		openCart(state) {
			state.isCart = true
			body.style = 'overflow: hidden'
		},
		closeCart(state) {
			state.isCart = false
			body.style = 'overflow: auto'
		},
		addToCartList(state, { product, sizeId, sizeValue }) {
			const newOreder = { ...product }
			newOreder.orderedSizeId = sizeId
			newOreder.sizeValue = sizeValue
			state.cartItems.unshift(newOreder)
			state.totalPrice = state.totalPrice + product.price

			state.cartInfo[0].value = state.totalPrice
			state.cartInfo[1].value = (state.totalPrice / 100) * 5
		},
		deleteFromCartList(state, product) {
			state.cartItems = state.cartItems.filter((item) => item.id !== product.id)
			state.totalPrice = state.totalPrice - product.price

			state.cartInfo[0].value = state.totalPrice
			state.cartInfo[1].value = (state.totalPrice / 100) * 5
		},
		order(state) {
			state.cartItems.forEach((el) => {
				this.commit('minusCountProductSize', { id: el.id, sizeId: el.orderedSizeId })
			})
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
