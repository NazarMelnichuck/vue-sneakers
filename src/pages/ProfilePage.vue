<template>
	<section class="profile">
		<div class="profile__container profile__container_noOrders" v-if="!myOrderItems.length">
			<div class="profile__message noOrder-message">
				<img class="noOrder-message__img" src="/img/cry-emoji.png" />
				<h2 class="noOrder-message__title">У вас немає замовлень</h2>
				<router-link :style="'text-decoration: none'" to="/">
					<button-ui class="noOrder-message__button">
						<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<span>На головну</span>
					</button-ui>
				</router-link>
			</div>
		</div>
		<div class="profile__container" v-else>
			<div class="profile__header header-page">
				<section-title>Мої замовлення</section-title>
			</div>
			<div class="profile__orders">
				<product-card v-for="myOrderItem of myOrderItems" :key="myOrderItem.id" :product="myOrderItem"></product-card>
			</div>
		</div>
	</section>
</template>

<script>
import ButtonUi from '@/components/UI/ButtonUi.vue'
import ProductCard from '@/components/UI/ProductCard.vue'
import SectionTitle from '@/components/UI/SectionTitle.vue'
import { mapState } from 'vuex'

export default {
	components: {
		ButtonUi,
		SectionTitle,
		ProductCard,
	},
	computed: {
		...mapState({
			myOrderItems: (state) => state.profile.myOrderItems,
		}),
	},
}
</script>

<style lang="scss">
.profile {
	padding: 40px 0;

	@media (max-width: 800px) {
		padding: 130px 0;
	}
	// .profile__container
	&__container {
		display: flex;
		flex-direction: column;

		// .profile__container_noOrders
		&_noOrders {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: calc(100vh - 171px - 170px);
		}
	}
	// .profile__message
	&__message {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 245px;
	}
	// .profile__header
	&__header {
	}
	// .profile__orders
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

.noOrder-message {
	// .noOrder-message__img
	&__img {
		width: 70px;
		margin-bottom: 30px;
	}
	// .noOrder-message__title
	&__title {
		color: #000;
		text-align: center;
		font-family: Inter;
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin-bottom: 40px;
	}
	// .noOrder-message__button
	&__button {
		svg {
			margin-right: 20px;
		}
	}
}
</style>
