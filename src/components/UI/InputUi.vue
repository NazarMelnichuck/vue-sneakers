<template>
	<div class="input">
		<svg
			class="input__icon"
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
		>
			<path
				d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
				stroke="#E4E4E4"
				stroke-width="2"
				stroke-linecap="round"
			/>
		</svg>
		<input
			class="input__item"
			type="text"
			:value="inputValue"
			@input="$emit('update:inputValue', $event.target.value)"
			@keyup.enter="$emit('search')"
			placeholder="Пошук..."
		/>
	</div>
</template>

<script>
export default {
	props: {
		inputValue: {
			type: String,
			require: false,
			default: '',
		},
	},

	emits: {
		'update:inputValue': (value) => value,
		search: null,
	},
}
</script>

<style lang="scss">
.input {
	position: relative;

	@media (max-width: 550px) {
		width: 100%;
	}
	// .input__icon
	&__icon {
		position: absolute;
		top: 33%;
		left: 0;
		margin-left: 18px;
	}
	// .input__item
	&__item {
		border-radius: 10px;
		border: 1px solid #f3f3f3;
		max-width: 250px;
		width: 100%;
		padding: 14px 0 14px 45px;
		color: black;
		font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		transition: 0.2s;

		@media (max-width: 550px) {
			width: 100%;
			font-size: 16px;
		}

		&::placeholder {
			color: #c4c4c4;
			font-family: Inter;
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}

		&:focus {
			outline: none;
			border-color: #dadada;
			transition: 0.2s;
		}
	}
}
</style>
