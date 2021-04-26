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
		addNewMessage(state, payload) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			state.conversation[state.conversation.length] = payload
		}
	},
	actions: {
		async setAllMessages(context) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			await import("../mockapi.js")
				.then((api) => {
					// Do something with the module.
					context.commit("SET_ALL_MESSAGES", JSON.parse(api.conversation))
				})
				.catch((error) => {
					console.log(error)
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
		addNewMessage(context) {
			context.commit("addNewMessage")
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
