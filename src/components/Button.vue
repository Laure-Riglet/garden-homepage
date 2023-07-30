<script setup>
import ArrowLeft from './icons/ArrowLeft.vue';
import ArrowRight from './icons/ArrowRight.vue';

// Define the props and their types
const prop = defineProps({
	type: {
		type: String,
		required: true,
	},
});

// Define the icon variable
let icon;

// Set the value of icon based on the type prop
if (prop.type === 'next') {
	icon = ArrowRight;
} else if (prop.type === 'prev') {
	icon = ArrowLeft;
} else {
	console.log('Unknown button type');
}
</script>

<template>
	<div class="button">
		<!-- Render the icon component dynamically based on the type -->
		<component :is="icon" />
	</div>
</template>

<style scoped>
.button {
	width: 80px;
	height: 80px;
	background-color: var(--color-black);
	display: flex;
	justify-content: center;
	align-items: center;
}

.button:hover {
	background-color: var(--color-very-dark-gray);
}
</style>
