import { createStore } from "vuex"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { conversation, currentUser } from "../mockapi.js"
export default createStore({
	state: {
		conversation: [],
		currentUser: {}
	},
	mutations: {
		setAllMessages(state, payload) {
			state.conversation = JSON.parse(conversation)
		},
		setCurrentUser(state, payload) {
			state.currentUser = JSON.parse(currentUser)
		},
		addNewMessage(state, payload) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore

			state.conversation[state.conversation.length] = payload
			console.log(state.conversation)
		}
	},
	actions: {
		setAllMessages(context) {
			context.commit("setAllMessages")
		},
		setCurrentUser(context) {
			context.commit("setCurrentUser")
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
