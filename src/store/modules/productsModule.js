export const productsModule = {
	state: () => ({
		DB: [
			{
				id: 1,
				title: 'Чоловічі кросівки Nike Blazer Mid Suede',
				img: 'nike_blazer_mid_suede.jpg',
				price: 6000,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 2,
				title: 'Чоловічі кросівки Nike Air Max 270',
				img: 'nike_air_max_270.jpg',
				price: 6000,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 3,
				title: 'Чоловічі кросівки Nike Blazer Mid Suede',
				img: 'nike_blazer_mid_suede_white.jpg',
				price: 3500,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 4,
				title: 'Кросівки Puma X Aka Boku Future Rider',
				img: 'puma_x_aka_boku_future_rider.jpg',
				price: 4000,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 5,
				title: 'Чоловічі кросівки Under Armour Curry 8',
				img: 'under_armour_curry_8.jpg',
				price: 7200,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 6,
				title: 'Чоловічі кросівки Nike Kyrie 7',
				img: 'nike_kyrie_7.jpg',
				price: 5000,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 7,
				title: 'Чоловічі кросівки Jordan Air Jordan 11',
				img: 'nike_air_jordan_11.jpg',
				price: 6000,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 8,
				title: 'Чоловічі кросівки Nike LeBron XVIII',
				img: 'nike_leborn_8.jpg',
				price: 8000,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 9,
				title: 'Чоловічі кросівки Nike Lebron XVIII Low',
				img: 'nike_leborn_8_low.jpg',
				price: 6500,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 10,
				title: 'Чоловічі кросівки Nike Blazer Mid Suede',
				img: 'nike_blazer_mid_suede_v2.jpg',
				price: 4000,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 11,
				title: 'Чоловічі кросівки Puma X Aka Boku Future Rider',
				img: 'puma_x_aka_boku_future_rider_v2.jpg',
				price: 4200,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 11,
				title: 'Чоловічі кросівки Nike Kyrie Flytrap IV',
				img: 'nike_kyrie_flytrap_4.jpg',
				price: 5000,
				inFavorite: false,
				inCart: false,
			},
		],
		sneakers: [
			{
				id: 1,
				title: 'Чоловічі кросівки Nike Blazer Mid Suede',
				img: 'nike_blazer_mid_suede.jpg',
				price: 6000,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 2,
				title: 'Чоловічі кросівки Nike Air Max 270',
				img: 'nike_air_max_270.jpg',
				price: 6000,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 3,
				title: 'Чоловічі кросівки Nike Blazer Mid Suede',
				img: 'nike_blazer_mid_suede_white.jpg',
				price: 3500,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 4,
				title: 'Кросівки Puma X Aka Boku Future Rider',
				img: 'puma_x_aka_boku_future_rider.jpg',
				price: 4000,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 5,
				title: 'Чоловічі кросівки Under Armour Curry 8',
				img: 'under_armour_curry_8.jpg',
				price: 7200,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 6,
				title: 'Чоловічі кросівки Nike Kyrie 7',
				img: 'nike_kyrie_7.jpg',
				price: 5000,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 7,
				title: 'Чоловічі кросівки Jordan Air Jordan 11',
				img: 'nike_air_jordan_11.jpg',
				price: 6000,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 8,
				title: 'Чоловічі кросівки Nike LeBron XVIII',
				img: 'nike_leborn_8.jpg',
				price: 8000,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 9,
				title: 'Чоловічі кросівки Nike Lebron XVIII Low',
				img: 'nike_leborn_8_low.jpg',
				price: 6500,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 10,
				title: 'Чоловічі кросівки Nike Blazer Mid Suede',
				img: 'nike_blazer_mid_suede_v2.jpg',
				price: 4000,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 11,
				title: 'Чоловічі кросівки Puma X Aka Boku Future Rider',
				img: 'puma_x_aka_boku_future_rider_v2.jpg',
				price: 4200,
				inFavorite: false,
				inCart: false,
			},
			{
				id: 11,
				title: 'Чоловічі кросівки Nike Kyrie Flytrap IV',
				img: 'nike_kyrie_flytrap_4.jpg',
				price: 5000,
				inFavorite: false,
				inCart: false,
			},
		],
	}),
	getters: {},

	mutations: {
		setSneakers(state, newSneaker) {
			state.sneakers = newSneaker
		},
		addToFavorites(state, product) {
			product.inFavorite = true
		},
		deleteFromFavorites(state, product) {
			product.inFavorite = false
		},
		addToCart(state, product) {
			product.inCart = true
		},
		deleteFromCart(state, product) {
			product.inCart = false
		},
		searchProduct(state, searchValue) {
			if (searchValue.length === 0) {
				state.sneakers = [...state.DB]
			} else {
				state.sneakers = state.DB.filter((el) => el.title.toLowerCase().includes(searchValue))
			}
		},
		deleteCartAfterOrder(state, cartItems) {
			cartItems.forEach((cartItem) => {
				state.sneakers.forEach((storeItem) => {
					if (storeItem.id === cartItem.id) {
						storeItem.inCart = false
					}
				})
			})
		},
	},
}
