<template>
	<Transition name="slide-fade">
		<cart-menu v-show="isCart"></cart-menu>
	</Transition>
	<header-section></header-section>
	<div class="page">
		<div class="page__container container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import CartMenu from './components/CartMenu.vue'
import HeaderSection from './components/HeaderSection.vue'

export default {
	name: 'App',
	components: { CartMenu, HeaderSection },
	data() {
		return {}
	},
	methods: {
		openCart() {
			this.$store.commit('openCart', true)
		},
	},
	computed: {
		...mapState({
			isCart: (state) => state.cart.isCart,
		}),
	},
}
</script>

<style lang="scss">
.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	// transform: translateX(20px);
	opacity: 0;
}

.page {
	height: 100%;
}
</style>
