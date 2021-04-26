<template>
	<div class="compose-section">
		<textarea v-model="newMessage" />
		<button @click="sendMessage">✈</button>
	</div>
</template>

<script>
export default {
	name: "ComposeSection",
	props: ["value"],
	data() {
		return {
			newMessage: null
		}
	},
	methods: {
		onInput(e) {
			console.log(e.target.value)
			this.$emit("input", e.target.value)
		},
		sendMessage(e) {
			this.$emit("submit", e.target.value)
			this.$store.commit("addNewMessage", {
				id: 1000,
				from: {
					id: 48,
					fistName: "Jack",
					lastName: "Dowager",
					thumbnail: "https://images.generated.photos/g232OgTeDpORCR483-Ko3acnrLoePZIbyMDabR64x2U/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3MDgyODAuanBn.jpg"
				},
				message: this.newMessage,
				date: "2020-04-07 10:06:15"
			})
			this.newMessage = null
			this.$store.commit("setAllMessages")
		}
	}
}
</script>

<style lang="scss">
.compose-section {
	display: flex;
	textarea {
		width: 100%;
	}
	button {
		width: 60px;
		margin-left: 12px;
	}
}
</style>
