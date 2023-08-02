<script setup>
import { store } from '../../store';

const action = () => store.switchNav();
</script>

<template>
	<svg
		width="16"
		height="16"
		xmlns="http://www.w3.org/2000/svg"
		@click="action">
		<path
			d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
			fill="#000"
			fill-rule="evenodd"
			opacity=".201" />
	</svg>
</template>

<style scoped>
svg {
	display: none;
}
@media screen and (max-width: 500px) {
	svg {
		display: block;
		margin-right: calc(30 * var(--mobile-width-ratio));
	}
}
</style>
