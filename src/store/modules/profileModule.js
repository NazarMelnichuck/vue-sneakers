export const profileModule = {
	state: () => ({
		myOrderItems: [
			// {
			// 	id: 1,
			// 	date: '12 грудня 2023',
			// 	orders: [
			// 		{
			// 			id: 1,
			// 			title: 'Чоловічі кросівки Nike Blazer Mid Suede',
			// 			img: 'nike_blazer_mid_suede.jpg',
			// 			price: 6000,
			// 			inFavorite: false,
			// 			inCart: false,
			// 		},
			// 		{
			// 			id: 2,
			// 			title: 'Чоловічі кросівки Nike Air Max 270',
			// 			img: 'nike_air_max_270.jpg',
			// 			price: 6000,
			// 			inFavorite: false,
			// 			inCart: false,
			// 		},
			// 		{
			// 			id: 3,
			// 			title: 'Чоловічі кросівки Nike Blazer Mid Suede',
			// 			img: 'nike_blazer_mid_suede_white.jpg',
			// 			price: 3500,
			// 			inFavorite: false,
			// 			inCart: false,
			// 		},
			// 	],
			// },
		],
	}),

	mutations: {
		order(state, orderItems) {
			const date = new Date()
			state.myOrderItems.unshift({
				id: 3,
				date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
				orders: [...orderItems],
			})
		},
	},

	actions: {},
}
