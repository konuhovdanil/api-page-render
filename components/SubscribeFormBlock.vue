<template lang="pug">
div.subscribe-form-block(:class="{'section': hasIndents}")
  h3.h3.subscribe-form-block__title Подпишись на рассылку
  form.subscribe-form-block__form
    custom-input.form__input(inputType="email" placeholder="Email" :value="email" @update:modelValue="value => email = value")
    custom-button.form__button(:as-link="false") Подписаться
</template>

<script setup>
defineProps({
	hasIndents: {
		type: Boolean,
		default: true,
	},
})

const email = ref('')
</script>

<style scoped lang="scss">
.subscribe-form-block {
	background-color: #1b1b1b;
	padding: 27px 30px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	@media (max-width: 576px) {
		flex-direction: column;
	}

	&__title {
		line-height: 30px;
		color: #fefefe;

		@media (max-width: 768px) and (min-width: 577px) {
			display: none;
		}

		@media (max-width: 576px) {
			margin-bottom: 10px;
		}
	}

	&__form {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 37px;

		@media (max-width: 768px) {
			width: 100%;
		}

		@media (max-width: 576px) {
			flex-direction: column;
			gap: 20px;
		}
	}
}

.form {
	&__input {
		min-width: 353px;

		@media (max-width: 992px) {
			min-width: auto;
		}

		@media (max-width: 768px) {
			width: 100%;
		}
	}
}
</style>
