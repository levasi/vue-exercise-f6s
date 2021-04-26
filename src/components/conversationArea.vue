<template>
	<div class="conversation-wrapper">
		<div class="conversation-area">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "ConversationArea"
}
</script>

<style lang="scss">
.conversation-wrapper {
	height: 80vh;
	overflow-y: scroll;
}
.conversation-area {
	overflow: hidden;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	flex-direction: column;
	-webkit-box-pack: end;
	-ms-flex-pack: end;
	justify-content: flex-end;
	position: relative;
}
</style>
