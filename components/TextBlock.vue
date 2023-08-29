<template lang="pug">
div.text-block.section.has-indents(v-html="data")
</template>

<script setup>
defineProps({
	data: String,
})
</script>

<style scoped lang="scss">
.text-block {
	color: #1b1b1b;
	width: 100%;

	:deep(h2) {
		font-weight: 800;
		font-size: 34px;
		line-height: 46px;
		margin-bottom: 50px;

		@media (max-width: 992px) {
			font-size: 28px;
			margin-bottom: 25px;
		}

		@media (max-width: 768px) {
			font-size: 22px;
		}

		@media (max-width: 576px) {
			font-size: 18px;
			line-height: 18px;
		}
	}

	:deep(p) {
		font-weight: 400;
		font-size: 18px;
		line-height: 26px;

		@media (max-width: 992px) {
			font-size: 16px;
		}

		@media (max-width: 768px) {
			font-size: 14px;
		}

		@media (max-width: 576px) {
			font-size: 12px;
			line-height: 18px;
		}

		&:not(:first-of-type) {
			margin-top: 20px;

			@media (max-width: 576px) {
				margin-top: 10px;
			}
		}
	}

	:deep(blockquote) {
		margin-top: 40px;
		padding-left: 116px;
		position: relative;

		@media (max-width: 576px) {
			padding-left: 0;
			margin-top: 20px;
		}

		&::before {
			content: url(../assets/img/blockquote.svg);
			position: absolute;
			top: 0;
			left: 0;

			@media (max-width: 576px) {
				display: none;
			}
		}

		p {
			font-size: 18px;
			font-style: italic;
			font-weight: 300;
			line-height: 26px;

			@media (max-width: 992px) {
				font-size: 16px;
			}

			@media (max-width: 768px) {
				font-size: 14px;
			}

			@media (max-width: 576px) {
				font-size: 12px;
				line-height: 18px;
			}
		}

		footer {
			margin-top: 15px;
			color: #8d959c;

			@media (max-width: 992px) {
				font-size: 16px;
			}

			@media (max-width: 768px) {
				font-size: 14px;
			}

			@media (max-width: 576px) {
				font-size: 12px;
				line-height: 18px;
				margin-top: 8px;
			}
		}
	}

	:deep(ul) {
		margin-top: 15px;
		padding-left: 115px;
		list-style-type: '\25C6';

		@media (max-width: 576px) {
			padding-left: 20px;
		}

		li {
			padding-left: 10px;
			font-size: 18px;
			font-weight: 400;
			line-height: 26px;

			@media (max-width: 992px) {
				font-size: 16px;
			}

			@media (max-width: 768px) {
				font-size: 14px;
			}

			@media (max-width: 576px) {
				font-size: 12px;
				line-height: 18px;
			}

			&:not(:last-child) {
				margin-bottom: 5px;
			}
		}
	}
}
</style>
