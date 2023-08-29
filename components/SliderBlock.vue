<template lang="pug">
div.slider-block.section
  carousel(ref="carousel")
    slide(v-for="slide in data" :key="slide")
      div.carousel__item
        img.carousel__item_slide(:src="slide" alt="slide")
    template(#addons)
      navigation
</template>

<script setup>
defineProps({
	data: Array,
})
</script>

<style lang="scss">
.slider-block {
	width: 100%;

	button {
		width: 60px;
		height: 60px;
		background-color: #1b1b1b;
	}

	.carousel__icon {
		fill: #d9d9d9;
	}

	.carousel__item_slide {
		@media (max-width: 1340px) {
			max-width: 780px;
		}

		@media (max-width: 992px) {
			max-width: 576px;
		}

		@media (max-width: 768px) {
			max-width: 100%;
		}
	}
}
</style>
