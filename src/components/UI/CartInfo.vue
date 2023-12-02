<template>
	<div class="order-info__item">
		<dt class="order-info__label">
			<span>{{ info.label }}</span>
		</dt>
		<dd class="order-info__value">{{ info.value }} грн</dd>
	</div>
</template>

<script>
export default {
	props: {
		info: Object,
	},
}
</script>

<style lang="scss">
.order-info {
	// .order-info__item
	&__item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	// .order-info__label
	&__label {
		display: inline-block;
		position: relative;
		color: #000;
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		width: 100%;
		position: relative;
		display: inline-block;
		z-index: 1;

		&::after {
			content: '';
			position: absolute;
			bottom: 3px;
			left: 0;
			width: 100%;
			border: 1px dashed #dfdfdf;
		}

		span {
			position: relative;
			display: inline-block;
			padding-right: 5px;
			background-color: #fff;
			z-index: 1;
		}
	}
	// .order-info__value
	&__value {
		color: #000;
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		white-space: nowrap;
		color: #2c2c35;
		padding-left: 5px;
	}
}
</style>
