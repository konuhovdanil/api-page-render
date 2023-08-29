<template lang="pug">
div
	the-header
	main.content-container
		slot
	the-footer
</template>

<style scoped lang="scss">
.content-container {
	max-width: 1340px;
	margin: 0 auto;
	background-color: #fff;

	@media (max-width: 1340px) {
		max-width: 992px;
	}

	@media (max-width: 992px) {
		max-width: 768px;
	}

	@media (max-width: 768px) {
		max-width: 576px;
	}

	@media (max-width: 576px) {
		max-width: 320px;
	}
}
</style>
