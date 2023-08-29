import { defineStore } from 'pinia'

const API_HOST = 'https://devtwit8.ru/api/v1/page/?'

export const usePageStore = defineStore('page', {
	state: () => ({
		page: null,
	}),
	getters: {
		getPage(state) {
			return state.page
		},
	},
	actions: {
		async fetchPage(path) {
			try {
				const response = await fetch(
					API_HOST +
						new URLSearchParams({
							path,
						})
				)

				this.page = await response.json()
			} catch (e) {
				console.log(e)
			}
		},
	},
})
