<template lang="pug">
nuxt-layout(name="default" v-if="page !== null")
	div.container
		div.block(v-for="(block, index) in page.body" :key="block.id")
			dynamic-component(:name="block.type" :data="block.data")
</template>

<script setup>
import { usePageStore } from '/stores/page.js'

const route = useRoute()
const router = useRouter()
const store = usePageStore()

const pathname = computed(() => route.path)
const page = computed(() => store.page)

const { fetchPage } = store

const initComponent = async () => {
	await fetchPage(pathname.value)

	if (!page?.value?.meta) return router.push({ path: '/' })

	const { title, description, slug } = page.value.meta

	useHead({
		title,
		meta: [
			{
				name: 'description',
				content: description,
			},
			{
				name: 'slug',
				content: slug,
			},
		],
	})
}

await initComponent()
</script>

<style scoped lang="scss">
.container {
	.block {
		display: flex;
	}
}
</style>
