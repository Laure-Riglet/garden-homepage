<script setup>
defineProps({
	illustration: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<img :src="illustration" :alt="title" />
</template>

<style scoped>
img {
	object-fit: fill;
}
</style>
