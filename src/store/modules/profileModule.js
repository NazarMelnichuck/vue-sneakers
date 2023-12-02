export const profileModule = {
	state: () => ({
		myOrderItems: [],
	}),

	getters: {},

	mutations: {
		order(state, orderItems) {
			state.myOrderItems = orderItems
		},
	},

	actions: {},
}
