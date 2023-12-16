<template>
	<button
		class="favorites-button"
		:class="{
			add: inFavorite === true,
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
</template>

<script>
export default {
	props: {
		productId: Number,
		inFavorite: Boolean,
	},
	data() {
		return {}
	},
	methods: {
		addToFavorites() {
			if (!this.inFavorite) {
				this.$emit('update:addToFavorite', true)
			} else {
				this.$emit('update:addToFavorite', false)
			}
		},
	},
}
</script>

<style lang="scss">
.favorites-button {
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
</style>
