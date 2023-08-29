<template lang="pug">
div.image-block.section.has-indents
  figure.image-block__container
    img.image-block__image(:src="data.src" alt="img")
    figcaption.image-block__caption {{ data.caption }}
</template>

<script setup>
defineProps({
	data: Object,
})
</script>

<style scoped lang="scss">
.image-block {
	width: 100%;

	&__image {
		width: 100%;
		max-height: 550px;
		border-top-right-radius: 220px;
		margin-bottom: 15px;

		@media (max-width: 576px) {
			margin-bottom: 5px;
		}
	}
	&__caption {
		text-align: right;
		color: #8d959c;
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;

		@media (max-width: 576px) {
			font-size: 12px;
		}
	}
}
</style>
