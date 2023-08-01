<!-- Illustration.vue -->
<script setup>
const props = defineProps({
	imageUrl: {
		type: String,
		required: true,
	},
	imageAlt: {
		type: String,
		required: true,
	},
	imageClass: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<img :src="imageUrl" :alt="imageAlt" :class="imageClass" />
</template>

<style scoped>
img {
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

@keyframes slideinleft {
	0% {
		transform: translateX(-100%);
	}
	100% {
		transform: translateX(0);
	}
}

@keyframes slideinright {
	0% {
		transform: translateX(100%);
	}
	100% {
		transform: translateX(0);
	}
}

@keyframes slideoutleft {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-100%);
	}
}

@keyframes slideoutright {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(100%);
	}
}

.curImg {
	z-index: 99;
}

.slideinleft {
	animation: slideinleft 1s ease-in-out;
}

.slideinright {
	animation: slideinright 1s ease-in-out;
}

.slideoutleft {
	animation: slideoutleft 1s ease-in-out;
}

.slideoutright {
	animation: slideoutright 1s ease-in-out;
}
</style>
