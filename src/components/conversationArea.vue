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
	-ms-flex-direction: column-reverse;
	flex-direction: column-reverse;
	-webkit-box-pack: end;
	-ms-flex-pack: end;
	justify-content: flex-end;
}
</style>
