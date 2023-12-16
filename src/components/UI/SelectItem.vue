<template>
	<select class="select" name="select" v-model="selected">
		<option class="select__value" v-for="filterItem of filterItems" :key="filterItem.value" :value="filterItem.value">{{ filterItem.text }}</option>
	</select>
</template>

<script>
export default {
	props: {
		filterItems: Array,
	},
	data() {
		return {
			selected: 'popular',
		}
	},
	watch: {
		selected() {
			this.$emit('update:selected', this.selected)
		},
	},
}
</script>

<style lang="scss">
.select {
	max-width: 200px;
	width: 100%;
	border-radius: 10px;
	border: 1px solid #f3f3f3;
	padding: 14px;
	color: black;
	font-family: Inter;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	transition: 0.2s;
	outline: none;
	cursor: pointer;
	// .select__value
	&__value {
		font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		cursor: pointer;
	}
}
</style>
