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
import { mapActions, mapGetters } from "vuex"
export default {
	data() {
		return {
			setCurrentUser: {},
			message: ""
		}
	},
	computed: {
		...mapGetters(["getAllMessages", "getCurrentUser"]),
		messages() {
			return this.getAllMessages
		}
	},
	methods: {
		...mapActions(["setAllMessages"]),
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
		this.$store.commit("setCurrentUser")
		this.$store.commit("setAllMessages")
		this.setAllMessages()
		this.currentUser = this.$store.getters.getCurrentUser
		console.log(this.currentUser)
	}
}
</script>

<style lang="scss">
body {
	margin: 0;
}
#app {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	overflow: hidden;
}
.chat-app {
	max-width: 500px;
	width: 100%;
	display: block;
	margin: 0 auto;
	border: 1px solid black;
}
</style>
