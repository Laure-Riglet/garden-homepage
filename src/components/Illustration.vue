<script setup>
defineProps({
	imageUrl: {
		type: String,
		required: true,
	},
	imageAlt: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<img :src="imageUrl" :alt="imageAlt" />
</template>

<style scoped>
@keyframes translate {
	0% {
		transform: translateX(-100%);
	}
	100% {
		transform: translateX(0);
	}
}
img {
	object-fit: cover;
	width: 100%;
	height: 100%;
	animation: translate 1s ease-in-out;
}
</style>
