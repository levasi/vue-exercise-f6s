import { createStore } from "vuex"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export default createStore({
	state: {
		conversation: [],
		currentUser: {}
	},
	mutations: {
		SET_ALL_MESSAGES(state, payload) {
			state.conversation = payload
		},
		SET_CURRENT_USER(state, payload) {
			state.currentUser = payload
		},
		ADD_NEW_MESSAGE(state, payload) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			state.conversation[state.conversation.length] = payload
		}
	},
	actions: {
		async setAllMessages(context) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore

			const conversation = await import("../mockapi.js")
				.then((api) => {
					// Do something with the module.
					context.commit("SET_ALL_MESSAGES", JSON.parse(api.conversation))
					return JSON.parse(api.conversation)
				})
				.catch((error) => {
					console.log(error)
				})
			return new Promise((resolve, reject) => {
				resolve(conversation)
			})
		},
		async setCurrentUser(context) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			await import("../mockapi.js")
				.then((api) => {
					context.commit("SET_CURRENT_USER", JSON.parse(api.currentUser))
				})
				.catch((error) => {
					console.log(error)
				})
		},
		addNewMessage(context, payload) {
			return new Promise((resolve, reject) => {
				context.commit("ADD_NEW_MESSAGE", payload)
				resolve(payload)
			})
		}
	},
	getters: {
		getAllMessages(context) {
			return context.conversation
		},
		getCurrentUser(context) {
			return context.currentUser
		}
	},
	modules: {}
})
