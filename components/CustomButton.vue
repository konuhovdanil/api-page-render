<template lang="pug">
button.custom-button.text(@click="$emit('click')" :class="{'as-link': asLink}")
  slot
</template>

<script setup>
defineProps({
	asLink: {
		type: Boolean,
		default: true,
	},
})
</script>

<style scoped lang="scss">
.custom-button {
	background-color: #1b1b1b;
	color: #fff;
	border: 1px solid;
	border-color: #1b1b1b;
	border-radius: 2px;
	cursor: pointer;
	padding: 10px 50px;
	transition: all 0.3s;

	&:hover {
		background-color: #3657d3;
		border-color: #3657d3;
	}

	&:not(.as-link) {
		background-color: #3657d3;
		border-color: #3657d3;

		&:hover {
			background-color: transparent;
		}
	}
}
</style>
