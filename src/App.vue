<script setup>
import Logo from './components/Logo.vue';
import Navbar from './components/Navbar.vue';
import Grid from './components/Grid.vue';
</script>

<template>
	<header>
		<nav>
			<Logo />
			<Navbar />
		</nav>
	</header>

	<main>
		<Grid />
	</main>
</template>

<style scoped>
nav {
	position: absolute;
	z-index: 999;
	top: calc(40 * var(--height-ratio));
	left: 0;
	background-color: var(--color-green-transluscent);
	height: calc(100 * var(--height-ratio));
	width: calc(570 * var(--width-ratio));
	border-radius: 0 calc(5 * var(--average-ratio))
		calc(5 * var(--average-ratio)) 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

@media screen and (max-width: 800px) {
	nav {
		width: calc(700 * var(--width-ratio));
	}
}
</style>
