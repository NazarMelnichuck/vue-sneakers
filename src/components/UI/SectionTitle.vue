<template>
	<h1>
		<slot></slot>
	</h1>
</template>

<script>
export default {
	name: 'SectionTitle',

	data() {
		return {}
	},
	methods: {},
	mounted() {},
}
</script>

<style lang="scss" scoped>
h1 {
	color: #000;
	font-family: Inter;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
}
</style>
