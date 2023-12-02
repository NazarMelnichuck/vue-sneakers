<template>
	<button class="cart-button" @click="closeCart">
		<slot></slot>
	</button>
</template>

<script>
export default {}
</script>

<style lang="scss">
.cart-button {
	display: flex;
	flex-direction: row;
	align-items: center;
	border-radius: 18px;
	border: none;
	padding: 18px 30px;
	background: #9dd458;
	cursor: pointer;
	transition: 0.2s;

	color: #fff;
	text-align: center;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;

	&:hover {
		background: #a2db5b;
		transition: 0.2s;
	}
}
</style>
