import { createStore } from "vuex"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default createStore({
	state: {
		conversation: [],
		currentUser: {}
	},
	mutations: {
		async SET_ALL_MESSAGES(state) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			await import("../mockapi.js")
				.then((api) => {
					// Do something with the module.
					state.conversation = JSON.parse(api.conversation)
				})
				.catch((error) => {
					console.log(error)
				})
		},
		async SET_CURRENT_USER(state) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			await import("../mockapi.js")
				.then((api) => {
					// Do something with the module.
					state.currentUser = JSON.parse(api.currentUser)
				})
				.catch((error) => {
					console.log(error)
				})
		},
		addNewMessage(state, payload) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			state.conversation[state.conversation.length] = payload
		}
	},
	actions: {
		setAllMessages(context) {
			context.commit("SET_ALL_MESSAGES")
		},
		setCurrentUser(context) {
			context.commit("SET_CURRENT_USER")
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
