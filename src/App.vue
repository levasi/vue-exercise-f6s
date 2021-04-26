<template>
	<div class="chat-app">
		<conversationArea>
			<messageEntry v-for="message in getAllMessages" :key="message.id" :message="message" />
		</conversationArea>
		<composeSection v-model="message" />
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
	watch: {
		message(newValue, oldValue) {
			if (newValue) {
				this.$store.commit("addNewMessage", {
					id: 1000,
					from: {
						id: 48,
						fistName: "Jack",
						lastName: "Dowager",
						thumbnail: "https://images.generated.photos/g232OgTeDpORCR483-Ko3acnrLoePZIbyMDabR64x2U/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3MDgyODAuanBn.jpg"
					},
					message: newValue,
					date: "2020-04-07 10:06:15"
				})
			}
			this.message = null
		}
	},
	computed: {
		...mapGetters(["getAllMessages", "getCurrentUser"])
	},
	methods: {
		...mapActions(["setAllMessages"])
	},
	components: {
		composeSection,
		conversationArea,
		messageEntry
	},
	mounted() {
		this.$store.commit("setCurrentUser")
		// this.$store.commit("setAllMessages")
		this.setAllMessages()
		this.currentUser = this.$store.getters.getCurrentUser
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
