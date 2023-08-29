<template lang="pug">
defined-component(:data="data")
</template>

<script setup>
const props = defineProps({
	name: String,
	data: [Object, String],
})

const componentName = computed(() =>
	props.name
		.split('_')
		.map(string => string.charAt(0).toUpperCase() + string.slice(1))
		.join('')
)

const definedComponent = defineAsyncComponent(() =>
	import(`../components/${componentName.value}.vue`)
)
</script>
