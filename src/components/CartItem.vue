<template>
	<div class="order">
		<img class="order__img" :src="getImagePath(product.img)" alt="product img" />
		<div class="order__info info">
			<h4 class="info__title">{{ product.title }}</h4>
			<strong class="info__price">{{ product.price }} грн.</strong>
		</div>
		<button class="order__button" @click="deleteFromCart">
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
				<rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
				<path
					d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
					fill="#D3D3D3" />
			</svg>
		</button>
	</div>
</template>

<script>
import store from '@/store/store'

export default {
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
		deleteFromCart() {
			store.commit('deleteFromCart', this.product)
		},
	},
	computed: {},
}
</script>

<style lang="scss">
.order {
	display: flex;
	flex-direction: row;
	align-items: center;
	background: #fff;
	border: 1px solid #f3f3f3;
	border-radius: 20px;
	padding: 20px;
	position: relative;

	// .order__img
	&__img {
		width: 70px;
		height: 70px;
		margin-right: 20px;
	}
	// .order__info
	&__info {
		display: flex;
		flex-direction: column;
	}
	// .order__button
	&__button {
		position: absolute;
		background: none;
		bottom: 20px;
		right: 20px;
		width: 32px;
		height: 32px;
		border: none;
		padding: 0;
		cursor: pointer;
		transition: 0.2s;

		svg {
			rect {
				transition: 0.2s;
			}
			path {
				transition: 0.2s;
			}
		}

		&:hover {
			svg {
				rect {
					stroke: #dbdbdb;
					transition: 0.2s;
				}
				path {
					fill: #b5b5b5;
					transition: 0.2s;
				}
			}
		}
	}
}
.info {
	// .info__title
	&__title {
		color: #000;
		font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin-bottom: 10px;
	}
	// .info__price
	&__price {
		color: #000;
		font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		margin-bottom: 10px;
	}
}
</style>
