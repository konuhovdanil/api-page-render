<template lang="pug">
label.custom-input 
	input.custom-input__field.text(:value="value"
	:placeholder="placeholder" :type="inputType" @input="$emit('update:modelValue', $event.currentTarget.value)")
</template>

<script setup>
defineProps({
	inputType: {
		type: String,
		required: true,
	},
	placeholder: {
		type: String,
		default: '',
	},
	value: {
		type: [String, Number],
	},
})
</script>

<style scoped lang="scss">
.custom-input {
	&__field {
		width: 100%;
		line-height: 26px;
		height: 30px;
		color: #fefefe;
		background-color: transparent;
		border: none;
		border-bottom: 1px solid;
		border-color: #8d959c;
		padding: 2px 8px;
		transition: all 0.3s;

		&:focus {
			border-color: #3657d3;
		}
	}
}
</style>
