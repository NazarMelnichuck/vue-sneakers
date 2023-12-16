<template>
	<section class="product">
		<div class="product__container">
			<div class="product__content product-content">
				<div class="product-content__img">
					<img :src="getImagePath(product.img)" alt="product-img" />
					<favorite-button v-model:addToFavorite="inFavorite" :inFavorite="product.inFavorite"></favorite-button>
				</div>
				<div class="product-content__info product-info">
					<h1 class="product-info__title">{{ product.title }}</h1>
					<h2 class="product-info__price">
						Ціна:
						<strong>{{ product.price }} грн</strong>
					</h2>
					<div class="product-info__sizes sizes">
						<h3 class="sizes__title">Виберіть розмір:</h3>
						<ul class="sizes__list">
							<li class="sizes__item">
								<button class="sizes__ctr-button sizes__ctr-button_active">UA</button>
							</li>
							<li class="sizes__item">
								<button class="sizes__ctr-button">UA</button>
							</li>
							<li class="sizes__item">
								<button class="sizes__ctr-button">UA</button>
							</li>
							<li class="sizes__item">
								<button class="sizes__ctr-button">UA</button>
							</li>
							<li class="sizes__item">
								<button class="sizes__ctr-button">UA</button>
							</li>
						</ul>
						<ul class="sizes__list">
							<li class="sizes__item">
								<button class="sizes__prd-button sizes__prd-button_active">41</button>
							</li>
							<li class="sizes__item">
								<button class="sizes__prd-button">41</button>
							</li>
							<li class="sizes__item">
								<button class="sizes__prd-button">41</button>
							</li>
							<li class="sizes__item">
								<button class="sizes__prd-button">41</button>
							</li>
							<li class="sizes__item">
								<button class="sizes__prd-button">41</button>
							</li>
						</ul>
					</div>
					<button-ui @click="setCart" v-if="!product.inCart">До кошику</button-ui>
					<button-ui @click="setCart" v-else>Забрати з кошику</button-ui>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import ButtonUi from '@/components/UI/ButtonUi.vue'
import FavoriteButton from '@/components/UI/FavoriteButton.vue'
import { mapState } from 'vuex'
export default {
	components: {
		FavoriteButton,
		ButtonUi,
	},
	data() {
		return {
			inFavorite: null,
		}
	},
	methods: {
		getImagePath(imgName) {
			return `/img/sneakers/${imgName}`
		},
		setCart() {
			if (!this.product.inCart) {
				this.$store.commit('addToCart', this.product)
			} else {
				this.$store.commit('deleteFromCart', this.product)
			}
		},
	},
	computed: {
		...mapState({
			product: (state) => state.products.productPage,
		}),
	},
	watch: {
		inFavorite() {
			if (!this.product.inFavorite) {
				this.$store.commit('addToFavorites', this.product)
			} else {
				this.$store.commit('deleteFromFavorites', this.product)
			}
		},
	},
	created() {
		const id = parseInt(this.$route.params.id)
		this.$store.commit('getProduct', id)
	},
}
</script>

<style lang="scss">
.product {
	padding: 40px 0;

	@media (max-width: 800px) {
		padding: 130px 0;
	}
	// .product__container
	&__container {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
	}
	// .product__content
	&__content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 40px;

		@media (max-width: 768px) {
			flex-direction: column;
			align-items: center;
		}
	}
}
.product-content {
	// .product-content__img
	&__img {
		position: relative;
		display: flex;
		justify-content: center;
		width: 100%;
		max-width: 600px;
		height: 100%;
	}
	// .product-content__info
	&__info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 20px;

		@media (max-width: 768px) {
			align-items: center;
		}
	}
}
.product-info {
	// .product-info__title
	&__title {
		font-size: 26px;
	}
	// .product-info__price
	&__price {
		font-size: 22px;
	}
	// .product-info__sizes
	&__sizes {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
}
.sizes {
	// .sizes__title
	&__title {
		margin-bottom: 10px;
	}
	// .sizes__list
	&__list {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}
	// .sizes__item
	&__item {
		width: 40px;

		button {
			width: 100%;
		}
	}
	// .sizes__ctr-button
	&__ctr-button {
		background-color: white;
		border: 1px solid #eaeaea;
		padding: 5px;
		cursor: pointer;

		// sizes__ctr-button_active
		&_active {
			background-color: red;
			color: white;
		}
	}
	// .sizes__prd-button
	&__prd-button {
		background-color: white;
		border: 1px solid #eaeaea;
		padding: 5px;
		cursor: pointer;

		// .sizes__prd-button_active
		&_active {
			background-color: blue;
			color: white;
		}
	}
}
</style>
