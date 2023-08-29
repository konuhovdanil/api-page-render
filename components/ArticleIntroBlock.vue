<template lang="pug">
div.article-intro-block.has-indents
  img.article-intro-block__image(:src="data.image" alt="img")
  div.article-intro-block__info
    h1.h1.info__title {{ data.title }}
    div.info__data
      div.info__data_time {{ data.reading_time }} мин время чтения
      div.info__data_views {{ data.views_count }} прочитали статью
    div.info__text.text {{ data.short_description }}
</template>

<script setup>
defineProps({
	data: Object,
})
</script>

<style scoped lang="scss">
.article-intro-block {
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: 30px;
	margin: 30px 0 50px;
	align-items: center;
	justify-content: center;

	@media (max-width: 992px) {
		flex-direction: column;
		margin: 15px 0 25px;
	}

	@media (max-width: 576px) {
		margin: 10px 0 18px;
	}

	&__image {
		width: 40%;
		border-top-right-radius: 220px;
		max-height: 580px;

		@media (max-width: 992px) {
			width: 100%;
		}

		@media (max-width: 576px) {
			border-top-right-radius: 50%;
		}
	}
}

.info {
	&__title {
		line-height: 66px;
		margin-bottom: 30px;
		color: #1b1b1b;

		@media (max-width: 992px) {
			line-height: 44px;
		}

		@media (max-width: 576px) {
			line-height: 26px;
			margin-bottom: 15px;
		}
	}

	&__data {
		color: #8d959c;
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		margin-bottom: 50px;

		@media (max-width: 992px) {
			margin-bottom: 25px;
		}

		@media (max-width: 576px) {
			margin-bottom: 15px;
		}

		&_time::before,
		&_views::before {
			content: '';
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 0;
			width: 16px;
			height: 16px;
		}

		&_time {
			position: relative;
			padding-left: 24px;

			&::before {
				content: url(../assets/img/clock.svg);
			}
		}

		&_views {
			position: relative;
			padding-left: 24px;

			&::before {
				content: url(../assets/img/eye.svg);
			}
		}
	}

	&__text {
		line-height: 26px;
		color: #1b1b1b;

		@media (max-width: 576px) {
			line-height: 18px;
		}
	}
}
</style>
