<template>
	<section class="product">
		<div class="product__container">
			<div class="product__content product-content">
				<div class="product-content__img">
					<img :src="getImagePath(product.img)" :alt="`${product.title} Image`" />
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
						<ul class="sizes__list list-country">
							<li class="sizes__item" v-for="sizeCountry in getCountrySize" :key="sizeCountry">
								<button class="sizes__ctr-button" :class="{ 'sizes__ctr-button_active': sizeCountry === currentCountry }" @click="setSizeCountry(sizeCountry)">
									{{ sizeCountry.toUpperCase() }}
								</button>
							</li>
						</ul>
						<ul class="sizes__list">
							<li class="sizes__item" v-for="size in sizes" :key="size">
								<button class="sizes__prd-button" :class="{ 'sizes__prd-button_active': size.sizeId === currentSizeId }" @click="setSize(size.sizeId)">
									{{ size.value }}
								</button>
							</li>
						</ul>
					</div>
					<div class="product-info__buttons product-buttons">
						<div class="product-buttons__items">
							<button-ui @click="setCart" v-if="!product.inCart">До кошику</button-ui>
							<button-ui @click="setCart" v-else>Забрати з кошику</button-ui>
						</div>
						<p class="product-buttons__count"><strong> В наявності:</strong> {{ productSizeCount }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import ButtonUi from '@/components/UI/ButtonUi.vue'
import FavoriteButton from '@/components/UI/FavoriteButton.vue'
import { mapGetters, mapState } from 'vuex'

export default {
	components: {
		FavoriteButton,
		ButtonUi,
	},
	data() {
		return {
			inFavorite: null,
			currentCountry: null,
			currentSizeId: 1,
			productSizeCount: null,
			sizes: [],
		}
	},
	methods: {
		getImagePath(imgName) {
			return `/img/sneakers/${imgName}`
		},
		setSizeCountry(sizeCountry) {
			this.sizes = this.product.size[sizeCountry]
			this.currentCountry = sizeCountry
			// console.log(sizeCountry)
			// console.log(this.getProductSize(sizeCountry))
		},
		setSize(sizeId) {
			this.currentSizeId = sizeId
		},
		setCart() {
			if (!this.product.inCart) {
				this.$store.commit('addToCartList', this.product)
				this.$store.commit('addCart', this.product.id)
				// console.log(this.product)
			} else {
				this.$store.commit('deleteFromCartList', this.product)
				this.$store.commit('deleteCart', this.product.id)
			}
		},
	},
	computed: {
		...mapState({
			product: (state) => state.products.productPage,
		}),
		...mapGetters(['getCountrySize', 'getProductSize', 'getProductSizeCount']),
	},
	watch: {
		inFavorite() {
			if (!this.product.inFavorite) {
				this.$store.commit('addToFavorites', this.product)
			} else {
				this.$store.commit('deleteFromFavorites', this.product)
			}
		},
		currentSizeId() {
			this.sizes.forEach((el) => {
				if (el.sizeId === this.currentSizeId) {
					this.productSizeCount = el.count
				}
			})
		},
	},
	created() {
		const id = parseInt(this.$route.params.id)
		this.$store.commit('getProduct', id)
		this.sizes = this.product.size['ua']

		const country = Object.keys(this.product.size)
		const defaultSizeCountry = this.product.size[country[0]]

		this.currentCountry = country[0]
		this.productSizeCount = defaultSizeCountry[0].count
	},
}
</script>

<style lang="scss">
.product {
	padding: 40px 0;

	@media (max-width: 800px) {
		padding: 90px 0;
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

		@media (max-width: 900px) {
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
		min-width: 320px;

		@media (max-width: 900px) {
			align-items: center;
			min-width: auto;
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
	// .product-info__buttons
	&__buttons {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 20px;
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
		flex-wrap: wrap;
		gap: 10px;
	}
	// .sizes__item
	&__item {
		width: 45px;

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

.list-country {
	flex-wrap: nowrap;
}

.product-buttons {
	// .product-buttons__items
	&__items {
	}
	// .product-buttons__count
	&__count {
	}
}
</style>
