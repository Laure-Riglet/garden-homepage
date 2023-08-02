<script setup>
import { store } from '../store';
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
let action;

// Set the value of icon based on the type prop
if (prop.type === 'next') {
	icon = ArrowRight;
	action = () => store.increment();
} else if (prop.type === 'prev') {
	icon = ArrowLeft;
	action = () => store.decrement();
} else {
	console.log('Unknown button type');
}
</script>

<template>
	<div class="button" @click="action">
		<!-- Render the icon component dynamically based on the type -->
		<component :is="icon" />
	</div>
</template>

<style scoped>
.button {
	width: calc(80 * var(--desktop-width-ratio));
	height: calc(80 * var(--desktop-height-ratio));
	background-color: var(--color-black);
	border: 5px solid var(--color-black);
	display: flex;
	justify-content: center;
	align-items: center;
}

.button:hover {
	background-color: var(--color-green);
	border: 5px solid var(--color-green);
}

.button svg {
	display: inline-block;
	transition: 0.5s ease-in-out;
	fill: var(--color-white);
	width: calc(30 * var(--desktop-average-ratio));
	height: calc(30 * var(--desktop-average-ratio));
}

.button:hover svg {
	transform: scale(1.2);
	transition: 0.5s ease-in-out;
}

@media screen and (max-width: 500px) {
	.button {
		width: calc(56 * var(--mobile-width-ratio));
		height: calc(56 * var(--mobile-height-ratio));
	}

	.button svg {
		width: calc(20 * var(--mobile-average-ratio));
		height: calc(20 * var(--mobile-average-ratio));
	}
}
</style>
