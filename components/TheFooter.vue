<template lang="pug">
footer.footer
	div.footer__container
		div.footer__info.has-indents
			div.info__about
				img.about__logo(src="../assets/img/logo.png" alt="logo")
				div.about__text Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
			div.info__contacts
				div.contacts__email 
					span.contacts__email_head email
					nuxt-link.contacts__email_link.text(to="mailto:testblogsupport@gmail.com") testblogsupport@gmail.com
				div.contacts__links
					nuxt-link.contacts__link(v-for="social in socialWebsites" :key="social.id" :to="social.link")
						img(:src="social.icon" alt="icon")
		subscribe-form-block(:has-indents="false")
</template>

<script setup>
import fbIcon from '../assets/img/fb.svg'
import igIcon from '../assets/img/ig.svg'
import tgIcon from '../assets/img/tg.svg'
import vkIcon from '../assets/img/vk.svg'

const socialWebsites = [
	{
		id: 1,
		icon: fbIcon,
		link: 'https://facebook.com/',
	},
	{
		id: 2,
		icon: vkIcon,
		link: 'https://vk.com/',
	},
	{
		id: 3,
		icon: igIcon,
		link: 'https://instagram.com/',
	},
	{
		id: 4,
		icon: tgIcon,
		link: 'https://telegram.org/',
	},
]
</script>

<style scoped lang="scss">
.footer {
	border-top: 1px solid #8d959c;
	padding-top: 50px;
	background-color: #fff;
	margin-top: 150px;
	width: 100%;

	&__container {
		max-width: 1340px;
		margin: 0 auto;
	}

	&__info {
		margin-bottom: 70px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		@media (max-width: 1340px) {
			padding: 0 30px;
		}

		@media (max-width: 576px) {
			flex-direction: column;
			margin-bottom: 30px;
		}
	}
}

.about {
	&__logo {
		margin-bottom: 20px;
	}

	&__text {
		max-width: 350px;
		color: #8d959c;
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;

		@media (max-width: 576px) {
			margin-bottom: 20px;
		}
	}
}

.contacts {
	&__email {
		display: flex;
		flex-direction: column;
		margin-bottom: 24px;

		&_head {
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
			color: #8d959c;
		}

		&_link {
			font-family: 'Ubuntu', sans-serif;
			line-height: 22px;
			color: #1b1b1b;
			text-decoration: none;
		}
	}

	&__links {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 20px;
	}
}
</style>
