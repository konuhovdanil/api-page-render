<template lang="pug">
div.article-list-block.section.has-indents
  h2.h2.article-list-block__title {{data.title}}
  div.article-list-block__list
    div.list-item(v-for="article in data.articles" :key="`${article.image}_${article.link}_${article.title}`")
      img.list-item__image(:src="article.image" alt="img")
      h3.h3.list-item__title {{ article.title }}
      nuxt-link(:to="article.link")
        custom-button.list-item__link Читать
</template>

<script setup>
defineProps({
	data: Object,
})
</script>

<style scoped lang="scss">
.article-list-block {
	width: 100%;

	&__title {
		margin-bottom: 50px;
		color: #1b1b1b;

		@media (max-width: 992px) {
			margin-bottom: 25px;
		}
	}

	&__list {
		display: grid;
		grid-template-columns: repeat(3, calc(33% - 15px));
		gap: 30px;

		@media (max-width: 992px) {
			grid-template-columns: repeat(1, 1fr);
			gap: 20px;
		}
	}
}

.list-item {
	&__image {
		max-width: 100%;
		width: 100%;
		height: 320px;
		margin-bottom: 20px;

		@media (max-width: 576px) {
			height: 220px;
		}
	}

	&__title {
		margin-bottom: 30px;
		line-height: 30px;
		color: #1b1b1b;

		@media (max-width: 992px) {
			margin-bottom: 15px;
		}
	}
}
</style>
