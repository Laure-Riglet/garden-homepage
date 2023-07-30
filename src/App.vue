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
	top: 0;
	left: 0;
	height: 140px;
	width: 33%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
