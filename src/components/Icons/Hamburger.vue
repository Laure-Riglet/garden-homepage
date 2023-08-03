<script setup>
import { store } from '../../store';

const action = () => store.switchNav();
</script>

<template>
	<svg
		width="20"
		height="14"
		xmlns="http://www.w3.org/2000/svg"
		@click="action">
		<path
			d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
			fill="#FFF"
			fill-rule="evenodd" />
	</svg>
</template>

<style scoped>
svg {
	display: none;
}

@media screen and (max-width: 500px) {
	svg {
		position: absolute;
		top: calc(48 * var(--mobile-height-ratio));
		left: calc(25 * var(--mobile-height-ratio));
		z-index: 5;
		display: block;
	}
}
</style>
