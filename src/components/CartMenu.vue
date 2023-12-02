<template>
	<div class="background" @click="handleBackgroundClick">
		<section class="cart">
			<div class="cart__container">
				<div class="cart__header">
					<section-title>Корзина</section-title>
				</div>
				<div class="cart__noOrder" v-if="orderComplite === true">
					<img class="noOrders__img" src="/img/order-complite.png" />
					<h2 class="noOrders__title">Замовлення оформлено</h2>
					<p class="noOrders__text">Ваш заказ, скоро буде передано пошті</p>
					<button-ui class="noOrders__button" @click="closeCartAfterOrder">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
							<path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<span>Повернутися назад</span>
					</button-ui>
				</div>
				<div class="cart__noOrder noOrders" v-else-if="!cartItems.length">
					<img class="noOrders__img" src="/img/clearCart.png" />
					<h2 class="noOrders__title">Корзина пуста</h2>
					<p class="noOrders__text">Добавте одну пару кросівок, щоб зробити замовлення</p>
					<button-ui class="noOrders__button" @click="closeCart">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
							<path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<span>Повернутися назад</span>
					</button-ui>
				</div>
				<div class="cart__orders orders" v-else-if="cartItems.length">
					<div class="orders__items">
						<cart-item v-for="cartItem of cartItems" :key="cartItem.id" :product="cartItem"></cart-item>
					</div>
					<div class="orders__info order-info">
						<div class="order-info__items">
							<cart-info v-for="infoItem of cartInfo" :key="infoItem.label" :info="infoItem"></cart-info>
						</div>
						<button-ui class="order-info__button" @click="order">
							<span>Оформити замовлення</span>
							<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</button-ui>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import CartItem from './CartItem.vue'
import ButtonUi from './UI/ButtonUi.vue'
import CartInfo from './UI/CartInfo.vue'
import SectionTitle from './UI/SectionTitle.vue'

export default {
	name: 'CartMenu',
	components: {
		SectionTitle,
		CartItem,
		CartInfo,
		ButtonUi,
	},
	data() {
		return {}
	},
	methods: {
		handleBackgroundClick(event) {
			if (event.target.classList.contains('background')) {
				if (this.orderComplite) {
					this.closeCart()
					setTimeout(() => {
						this.$store.commit('closeCartAfterOrder')
					}, 600)
				} else {
					this.closeCart()
				}
			}
		},
		closeCart() {
			this.$store.commit('closeCart')
		},
		closeCartAfterOrder() {
			this.closeCart()
			setTimeout(() => {
				this.$store.commit('closeCartAfterOrder')
			}, 600)
		},
		order() {
			this.$store.commit('deleteCartAfterOrder', this.cartItems)
			this.$store.commit('order', this.cartItems)
		},
	},
	computed: {
		...mapState({
			cartItems: (state) => state.cart.cartItems,
			cartInfo: (state) => state.cart.cartInfo,
			isCart: (state) => state.cart.isCart,
			orderComplite: (state) => state.cart.orderComplite,
		}),
	},
}
</script>

<style lang="scss">
.background {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	width: 120%;
	height: 100%;
	background: #00000091;
	pointer-events: auto;
}
.cart {
	position: fixed;
	top: 0;
	right: 0;
	z-index: 999;
	width: 385px;
	height: 100%;
	background: #fff;
	box-shadow: -10px 4px 24px 0px rgba(0, 0, 0, 0.1);

	@media (max-width: 510px) {
		width: 100%;
	}

	// .cart__container
	&__container {
		display: grid;
		padding: 30px;
		height: 100%;
		grid-template-rows: auto 1fr;
	}
	// .cart__header
	&__header {
		margin-bottom: 30px;
	}
	// .cart__noOrder
	&__noOrder {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-self: center;
		padding: 0 20px;

		@media (max-width: 510px) {
			padding: 0;
		}
	}
	// .cart__orders
	&__orders {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 20px;
		height: calc(100vh - 129px);
	}
}
.noOrders {
	// .noOrders__img
	&__img {
		margin-bottom: 20px;
	}
	// .noOrders__title
	&__title {
		color: #000;
		font-family: Inter;
		font-size: 22px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin-bottom: 10px;
	}
	// .noOrders__text
	&__text {
		color: #000;
		text-align: center;
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 150%;
		margin-bottom: 40px;
	}

	// .noOrders__button
	&__button {
		svg {
			margin-right: 20px;
		}
	}
}

.orders {
	// .orders__items
	&__items {
		display: flex;
		flex-direction: column;
		gap: 25px;
		height: 100vh;
		overflow: auto;
	}
	// .orders__info
	&__info {
		display: flex;
		flex-direction: column;
		gap: 25px;
	}
}

.order-info {
	// .order-info__items
	&__items {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	// .order-info__button
	&__button {
		justify-content: space-between;
		svg {
			margin-left: 20px;
		}
	}
}
</style>
