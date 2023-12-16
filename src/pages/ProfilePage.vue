<template>
	<section class="profile">
		<div class="profile__container" v-if="!myOrderItems.length">
			<error-message>
				<template v-slot:emoji><img src="/img/cry-emoji.png" /></template>
				<template v-slot:title>У вас немає замовлень</template>
				<template v-slot:button>
					<button-ui class="profile__massage-button">
						<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<span>На головну</span>
					</button-ui>
				</template>
			</error-message>
		</div>
		<div class="profile__container" v-else>
			<div class="profile__header header-page">
				<section-title>Мої замовлення</section-title>
			</div>
			<div class="profile__orders profile-orders-list">
				<order-list v-for="myOrderItem of myOrderItems" :key="myOrderItem.id" :orderItem="myOrderItem"></order-list>
			</div>
		</div>
	</section>
</template>

<script>
import ButtonUi from '@/components/UI/ButtonUi.vue'
import SectionTitle from '@/components/UI/SectionTitle.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
import { mapState } from 'vuex'
import OrderList from '@/components/OrderList.vue'

export default {
	components: {
		ButtonUi,
		SectionTitle,
		ErrorMessage,
		OrderList,
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
	}
	// .profile__message
	&__message {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 245px;
	}

	// .profile__orders
	&__orders {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	// .profile__massage-button
	&__massage-button {
		svg {
			margin-right: 20px;
		}
	}
	// .profile__header
	&__header {
	}
}
</style>
