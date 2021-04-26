<template>
	<div class="conversation-area">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "ConversationArea"
}
</script>

<style lang="scss">
.conversation-area {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	flex-direction: column;
	-webkit-box-pack: end;
	-ms-flex-pack: end;
	justify-content: flex-end;
	position: relative;
	overflow-y: scroll;
}
</style>
