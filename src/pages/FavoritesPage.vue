<template>
	<div class="favorites">
		<div class="favorites__container" v-if="!favoritesItems.length">
			<error-message>
				<template v-slot:emoji><img src="/img/sad-emoji.png" /></template>
				<template v-slot:title>Закладок немає :(</template>
				<template v-slot:button>
					<button-ui class="favorites__button">
						<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<span>На головну</span>
					</button-ui>
				</template>
			</error-message>
		</div>
		<div class="favorites__container" v-else>
			<div class="favorites__header header-page">
				<section-title>Мої закладки</section-title>
			</div>
			<div class="favorites__orders">
				<TransitionGroup>
					<product-card v-for="favoritesItem of favoritesItems" :key="favoritesItem.id" :product="favoritesItem"></product-card>
				</TransitionGroup>
			</div>
		</div>
	</div>
</template>

<script>
import ErrorMessage from '@/components/ErrorMessage.vue'
import ButtonUi from '@/components/UI/ButtonUi.vue'
import ProductCard from '@/components/UI/ProductCard.vue'
import SectionTitle from '@/components/UI/SectionTitle.vue'
import { mapState } from 'vuex'

export default {
	name: 'FavoritesPage',
	components: {
		SectionTitle,
		ProductCard,
		ButtonUi,
		ErrorMessage,
	},
	data() {
		return {}
	},
	computed: {
		...mapState({
			favoritesItems: (state) => state.favorites.favoritesItems,
		}),
	},
}
</script>

<style lang="scss">
.list-move, /* застосувати перехід до рухомих елементів */
.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}

.list-leave-active {
	position: absolute;
}

.favorites {
	padding: 40px 0;

	@media (max-width: 800px) {
		padding: 130px 0;
	}
	// .favorites__container
	&__container {
		display: flex;
		flex-direction: column;
	}
	// .favorites__message
	&__message {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 245px;
	}
	// .favorites__header
	&__header {
	}

	// .favorites__button
	&__button {
		svg {
			margin-right: 20px;
		}
	}
	// .favorites__orders
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
