<template>
	<div v-if="fromCurrentUser" class="message-entry" :class="{ ['message-entry-from-current-user']: fromCurrentUser }">
		<div class="thumb"></div>
		<img :src="$store.getters.getCurrentUser.thumbnail" alt="" />
		{{ message.message }}
	</div>
	<div v-else class="message-entry" :class="{ ['message-entry-from-current-user']: fromCurrentUser }">
		<div class="thumb"></div>
		<img :src="'https://images.generated.photos/g232OgTeDpORCR483-Ko3acnrLoePZIbyMDabR64x2U/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3MDgyODAuanBn.jpg'" alt="" />
		{{ message.message }}
	</div>
</template>

<script>
export default {
	name: "MessageEntry",
	data() {
		return {
			fromCurrentUser: false
		}
	},
	props: {
		message: {}
	},
	mounted() {
		this.fromCurrentUser = this.message.from.id === this.$store.getters.getCurrentUser.id
	}
}
</script>

<style lang="scss">
.message-entry {
	word-break: break-all;
	padding: 8px;
	border-radius: 8px;
	max-width: 60%;
	background-color: rgb(213, 206, 206);
	font-size: 18px;
	padding: 10px 20px;
	border-radius: 25px;
	color: #000;
	background-color: #e6e7ec;
	width: -webkit-fit-content;
	width: -moz-fit-content;
	width: fit-content;
	position: relative;
	margin: 15px 0;
	word-break: break-all;
	direction: ltr;
	display: flex;
	align-items: flex-enduj;
	img {
		max-width: 48px;
		border-radius: 50%;
	}
}
.message-entry-from-current-user {
	text-align: right;
	color: #fff;
	margin-left: auto;
	background-color: #00a9de;
	display: flex;
	align-items: flex-end;
	flex-direction: row-reverse;
	img {
		margin-left: 12px;
	}
}
</style>
