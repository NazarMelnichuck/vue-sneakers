<template>
	<Transition>
		<div class="card">
			<!-- ard__like card__like_add -->
			<button
				class="card__like"
				:class="{
					add: product.inFavorite === true,
				}"
				@click="addToFavorites">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
					<path
						d="M13.8609 2.07455C13.5204 1.73389 13.1161 1.46365 12.6711 1.27927C12.2261 1.0949 11.7492 1 11.2675 1C10.7859 1 10.3089 1.0949 9.86396 1.27927C9.41898 1.46365 9.0147 1.73389 8.67419 2.07455L7.96753 2.78122L7.26086 2.07455C6.57307 1.38676 5.64022 1.00036 4.66753 1.00036C3.69484 1.00036 2.76199 1.38676 2.07419 2.07455C1.3864 2.76235 1 3.69519 1 4.66788C1 5.64057 1.3864 6.57342 2.07419 7.26122L2.78086 7.96788L7.96753 13.1546L13.1542 7.96788L13.8609 7.26122C14.2015 6.92071 14.4718 6.51643 14.6561 6.07145C14.8405 5.62648 14.9354 5.14954 14.9354 4.66788C14.9354 4.18623 14.8405 3.70929 14.6561 3.26431C14.4718 2.81934 14.2015 2.41505 13.8609 2.07455Z"
						stroke="#d3d3d3"
						stroke-width="1.2"
						stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
			</button>
			<div class="card__img">
				<router-link :to="{ name: 'productPage', params: { id: product.id } }">
					<img :src="getImagePath(product.img)" alt="product image" />
				</router-link>
			</div>
			<router-link class="card__title" :to="{ name: 'productPage', params: { id: product.id } }"> {{ product.title }} </router-link>
			<div class="card__price price">
				<div class="price__text">
					<span>Ціна:</span>
					<strong>{{ product.price }} грн.</strong>
				</div>
				<button class="price__cart" @click="setCart" v-show="product.inCart === false"></button>
				<button class="price__cart-added" @click="setCart" v-show="product.inCart === true">
					<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
						<g clip-path="url(#clip0_60_202)">
							<g filter="url(#filter0_d_60_202)">
								<path
									d="M9.6567 1.62069C9.83936 1.43633 10.0876 1.33177 10.3471 1.32986C10.6066 1.32795 10.8563 1.42884 11.0416 1.61049C11.227 1.79214 11.3329 2.03977 11.3362 2.29927C11.3395 2.55877 11.24 2.80903 11.0594 2.99536L5.83271 9.52936C5.74292 9.62603 5.63456 9.70362 5.51412 9.75749C5.39368 9.81136 5.26362 9.84041 5.1317 9.8429C4.99979 9.84539 4.86872 9.82127 4.74633 9.77198C4.62394 9.72269 4.51274 9.64924 4.41937 9.55602L0.954039 6.09202C0.76989 5.90779 0.666472 5.65794 0.666534 5.39746C0.666597 5.13697 0.770135 4.88717 0.954372 4.70302C1.13861 4.51888 1.38845 4.41546 1.64894 4.41552C1.90943 4.41558 2.15922 4.51912 2.34337 4.70336L5.08404 7.44469L9.6307 1.65136C9.63897 1.64082 9.64787 1.6308 9.65737 1.62136L9.6567 1.62069Z"
									fill="white" />
							</g>
						</g>
						<defs>
							<filter id="filter0_d_60_202" x="0.666534" y="1.32983" width="10.6698" height="10.5132" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
								<feFlood flood-opacity="0" result="BackgroundImageFix" />
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
								<feOffset dy="2" />
								<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
								<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_202" />
								<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_202" result="shape" />
							</filter>
							<clipPath id="clip0_60_202">
								<rect width="10.6667" height="10.6667" fill="white" transform="translate(0.666718 0.666687)" />
							</clipPath>
						</defs>
					</svg>
				</button>
			</div>
		</div>
	</Transition>
</template>

<script>
import store from '@/store/store'

export default {
	name: 'ProductCard',
	props: {
		product: Object,
	},
	data() {
		return {}
	},
	methods: {
		getImagePath(imgName) {
			return `/img/sneakers/${imgName}`
		},
		addToFavorites() {
			if (!this.product.inFavorite) {
				store.commit('addToFavorites', this.product)
			} else {
				store.commit('deleteFromFavorites', this.product)
			}
		},
		setCart() {
			if (!this.product.inCart) {
				store.commit('addToCart', this.product)
			} else {
				store.commit('deleteFromCart', this.product)
			}
		},
	},
	computed: {},
}
</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

.card {
	display: flex;
	flex-direction: column;
	gap: 15px;
	border-radius: 40px;
	border: 1px solid #f3f3f3;
	background: #fff;
	padding: 20px 30px 35px 33px;
	position: relative;
	transition: 0.2s;

	&:hover {
		border: 1px solid #f8f8f8;
		box-shadow: 0px 14px 30px 0px rgba(0, 0, 0, 0.05);
		transform: translateY(-10px);
		transition: 0.2s;
	}
	// .card__like
	&__like {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 30px;
		left: 30px;
		width: 32px;
		height: 32px;
		padding: 0;

		border-radius: 7px;
		border: 2px solid #f2f2f2;
		background: #fff;
		cursor: pointer;
		transition: 0.2s;

		@media (max-width: 510px) {
			width: 40px;
			height: 40px;
		}

		svg {
			path {
				transition: 0.2s;
			}
		}

		&:hover {
			border: 1px solid #ff8585;
			transition: 0.2s;

			svg {
				path {
					stroke: #ff8585;
					transition: 0.2s;
				}
			}
		}
	}
	// .card__img
	&__img {
		width: 135px;

		@media (max-width: 510px) {
			width: 100%;
		}
	}
	// .card__title
	&__title {
		color: #000;
		font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin-bottom: 14px;
		text-decoration: none;

		@media (max-width: 510px) {
			font-size: 24px;
		}
	}
	// .card__price
	&__price {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
}

.add {
	background: #fef0f0;
	border-color: #fef0f0;

	svg {
		path {
			stroke: #ff8585;
			fill: #ff8585;
		}
	}
}

.price {
	// .price__text
	&__text {
		display: flex;
		flex-direction: column;

		span {
			color: #bdbdbd;
			font-family: Inter;
			font-size: 11px;
			font-style: normal;
			font-weight: 500;
			line-height: normal;
			text-transform: uppercase;

			@media (max-width: 510px) {
				font-size: 21px;
			}
		}
		strong {
			color: #000;
			font-family: Inter;
			font-size: 14px;
			font-style: normal;
			font-weight: 700;
			line-height: normal;

			@media (max-width: 510px) {
				font-size: 24px;
			}
		}
	}
	// .price__cart
	&__cart {
		width: 32px;
		height: 32px;
		padding: 0;
		position: relative;

		background: none;
		border: 2px solid #f2f2f2;
		border-radius: 8px;
		cursor: pointer;
		transition: 0.2s;

		@media (max-width: 510px) {
			width: 40px;
			height: 40px;
		}

		&::before,
		&::after {
			content: '';
			position: absolute;
			top: 48%;
			left: 33%;
			width: 10px;
			height: 2px;
			background: #d3d3d3;
			transition: 0.2s;
		}

		&::before {
			transform: rotate(90deg);
		}

		&:hover {
			border-color: #89f09c;
			transition: 0.2s;

			&::before,
			&::after {
				background: #89f09c;
				transition: 0.2s;
			}
		}

		@media (max-width: 510px) {
			&::before,
			&::after {
				width: 11px;
				height: 3px;
			}
		}
	}

	// .price__cart-added
	&__cart-added {
		width: 32px;
		height: 32px;
		background: linear-gradient(180deg, #89f09c 0%, #3cc755 100%);
		padding: 0;
		border-radius: 8px;
		border: none;
		cursor: pointer;

		@media (max-width: 510px) {
			width: 40px;
			height: 40px;
		}
	}
}
</style>
