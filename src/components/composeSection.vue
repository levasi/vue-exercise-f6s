<template>
	<div class="compose-section">
		<textarea :value="modelValue" @input="onInput" @keydown.enter="sendMessage" />
		<button @click="sendMessage">✈</button>
	</div>
</template>

<script>
export default {
	name: "ComposeSection",
	props: ["modelValue"],
	emits: ["update:modelValue"],
	data() {
		return {
			newMessage: null
		}
	},
	methods: {
		onInput(e) {
			this.newMessage = e.target.value
		},
		sendMessage(e) {
			if (this.newMessage) {
				this.$emit("update:modelValue", this.newMessage)
				this.newMessage = null
			}
		}
	}
}
</script>

<style lang="scss">
.compose-section {
	height: 50px;
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
