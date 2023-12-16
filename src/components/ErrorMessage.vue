<template>
	<div class="message">
		<slot class="message__img" name="emoji"></slot>
		<h2 class="message__title"><slot name="title"></slot></h2>
		<router-link :style="'text-decoration: none'" to="/">
			<slot name="button"></slot>
		</router-link>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.message {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 245px;
	height: calc(100vh - 171px - 170px);
	margin: 0 auto;
	gap: 20px;

	@media (max-width: 510px) {
		display: flex;
		flex-direction: column;
	}
	// .message__img
	img {
		width: 70px;
	}
	// .message__title
	&__title {
		color: #000;
		text-align: center;
		font-family: Inter;
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}
}
</style>
