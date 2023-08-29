<template lang="pug">
div.cta-form-block.section
  img.cta-form-block__image(src="../assets/img/cta.png" alt="cta")
  form.cta-form-block__form
    h2.h2.form__title Стань участником проекта
    div.form__fields-group
      custom-input.form__field(inputType="text" placeholder="Имя" :value="formData.name" @update:modelValue="value => formData.name = value")

      custom-input.form__field(inputType="email" placeholder="Телефон" :value="formData.phone" @update:modelValue="value => formData.phone = value")

      custom-input.form__field(inputType="tel" placeholder="Email" :value="formData.email" @update:modelValue="value => formData.email = value")
    custom-button.form__btn(:as-link="false") Присоединиться
</template>

<script setup>
const formData = ref({
	name: '',
	phone: '',
	email: '',
})
</script>

<style scoped lang="scss">
.cta-form-block {
	width: 100%;
	padding: 60px;
	display: grid;
	gap: 60px;
	grid-template-columns: repeat(2, calc(50% - 30px));
	background-color: #1b1b1b;
	align-items: center;

	@media (max-width: 992px) {
		grid-template-columns: repeat(1, 1fr);
		gap: 30px;
	}

	@media (max-width: 576px) {
		padding: 30px;
	}

	&__image {
		max-width: 100%;
		width: 100%;
	}

	&__form {
		@media (max-width: 992px) {
			text-align: center;
		}
	}
}

.form {
	&__title {
		color: #fefefe;
		line-height: 46px;
		margin-bottom: 50px;

		@media (max-width: 992px) {
			margin-bottom: 25px;
		}
	}

	&__fields-group {
		max-width: 353px;
		margin-bottom: 50px;

		@media (max-width: 992px) {
			margin: 0 auto 25px;
		}
	}

	&__field:not(:last-child) {
		margin-bottom: 25px;
		display: block;
	}
}
</style>
