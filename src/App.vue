<template>
	<div class="chat-app">
		<conversationArea>
			<messageEntry v-for="message in messages" :key="message.id" :message="message" />
		</conversationArea>
		<composeSection v-model="message" @submit="sendReply" />
	</div>
</template>

<script>
import composeSection from "@/components/composeSection"
import conversationArea from "@/components/conversationArea"
import messageEntry from "@/components/messageEntry"
import { mapActions, mapState } from "vuex"
export default {
	data() {
		return {
			setCurrentUser: {},
			message: ""
		}
	},
	computed: {
		...mapState(["getAllMessages", "getCurrentUser"]),
		messages() {
			return this.$store.getters.getAllMessages
		}
	},
	methods: {
		...mapActions(["setAllMessages", "setCurrentUser"]),
		sendReply() {
			console.log(this.message)
		}
	},
	components: {
		composeSection,
		conversationArea,
		messageEntry
	},
	mounted() {
		this.setAllMessages()
		this.setCurrentUser()
		this.currentUser = this.$store.getters.getCurrentUser
		console.log(this.currentUser)
	}
}
</script>

<style lang="scss">
.chat-app {
	max-width: 500px;
	width: 100%;
	display: block;
	margin: 0 auto;
	border: 1px solid black;
}
</style>
