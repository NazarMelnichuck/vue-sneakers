<template>
	<div class="profile-orders-list__item profile-orders-list-item">
		<h2 class="profile-orders-list-item__order-info">
			<h2>Замовлення</h2>
			<p>{{ orderItem.date }}</p>
		</h2>
		<div class="profile-orders-list-item__orders">
			<product-card v-for="myOrderItem of orderItem.orders" :key="myOrderItem.id" :product="myOrderItem"></product-card>
		</div>
	</div>
</template>

<script>
import ProductCard from './UI/ProductCard.vue'

export default {
	components: {
		ProductCard,
	},
	props: {
		orderItem: Object,
	},
}
</script>

<style lang="scss">
.profile-orders-list {
	// .profile-orders-list__item
	&__item {
		&:not(:last-child) {
			padding-bottom: 30px;
			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 2px;
				background-color: #eaeaea;
			}
		}
	}
}
.profile-orders-list-item {
	position: relative;
	// .profile-orders-list-item__order-info
	&__order-info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 25px;

		h2 {
			font-size: 26px;

			@media (max-width: 425px) {
				font-size: 22px;
			}
		}

		p {
			font-size: 16px;

			@media (max-width: 425px) {
				font-size: 12px;
			}
		}
	}
	// .orders-item__orders
	&__orders {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		grid-auto-flow: row;
		gap: 40px;

		@media (max-width: 510px) {
			display: flex;
			flex-direction: column;
		}
	}
}
</style>
