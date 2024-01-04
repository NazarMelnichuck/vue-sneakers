<template>
	<section class="products">
		<div class="products__header header-page">
			<section-title>Всі кросівки</section-title>
			<select-item v-model:selected="selected" :filterItems="filterItems"></select-item>
			<input-ui v-model:inputValue="searchValue" @search="handleSearch"></input-ui>
		</div>
		<div class="products-message" v-if="sneakers.length < 1">
			<error-message>
				<template v-slot:emoji><img src="/img/clearCart.png" /></template>
				<template v-slot:title>Тавару не знайдено</template>
			</error-message>
		</div>
		<div class="products__store" v-else>
			<TransitionGroup>
				<product-card
					v-for="sneaker in sneakers"
					:key="sneaker.id"
					:product="sneaker"
					@setFavoritesStatus="setFavoritesStatus"
				></product-card>
			</TransitionGroup>
		</div>
	</section>
</template>

<script>
import SelectItem from '@/components/UI/SelectItem.vue'
import ProductCard from '@/components/UI/ProductCard.vue'
import SectionTitle from '@/components/UI/SectionTitle.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
import InputUi from '@/components/UI/InputUi.vue'

import { mapState } from 'vuex'

export default {
	name: 'MainPage',
	components: {
		SectionTitle,
		ProductCard,
		SelectItem,
		ErrorMessage,
		InputUi,
	},
	data() {
		return {
			searchValue: '',
			selected: null,
		}
	},
	methods: {
		handleSearch() {
			this.$store.commit('searchProduct', this.searchValue)
		},
		setFavoritesStatus({ id, inFavorite }) {
			this.$store.commit('setFavoritesStatus', { id, inFavorite })
		},
	},
	computed: {
		...mapState({
			sneakers: (state) => state.products.sneakers,
			filterItems: (state) => state.products.filterItems,
		}),
	},
	watch: {
		selected() {
			this.$store.commit('filterProducts', this.selected)
		},
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

.products-message {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.products {
	padding: 40px 0;

	@media (max-width: 800px) {
		padding: 130px 0;
	}
	// .products__header
	&__header {
	}
	// .products__store
	&__store {
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
