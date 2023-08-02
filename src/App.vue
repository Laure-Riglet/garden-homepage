<script setup>
import Logo from './components/Logo.vue';
import Navbar from './components/Navbar.vue';
import Grid from './components/Grid.vue';
import Hamburger from './components/icons/Hamburger.vue';
import { store } from './store';
import { computed } from 'vue';

const headClass = computed(() => {
	return store.navOpen ? 'blurred' : 'unblurred';
});

const logoClass = computed(() => {
	return store.navOpen ? 'fade-out' : 'fade-in';
});

const navClass = computed(() => {
	return store.navOpen ? '' : 'hidden';
});

const mainClass = computed(() => {
	return store.navOpen ? 'fixed' : '';
});
</script>

<template>
	<header :class="headClass">
		<Hamburger />
		<Logo :class="logoClass" />
		<nav :class="navClass">
			<Navbar />
		</nav>
	</header>

	<main :class="mainClass">
		<Grid />
	</main>
</template>

<style scoped>
header {
	position: absolute;
}

nav {
	position: absolute;
	z-index: 2;
	top: calc(40 * var(--desktop-height-ratio));
	left: 0;
	background-color: var(--color-green-transluscent);
	height: calc(100 * var(--desktop-height-ratio));
	width: calc(475 * var(--desktop-width-ratio));
	border-radius: 0 calc(5 * var(--desktop-average-ratio))
		calc(5 * var(--desktop-average-ratio)) 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

@media screen and (max-width: 1350px) {
	nav {
		width: calc(570 * var(--desktop-width-ratio));
	}
}

@media screen and (max-width: 950px) {
	nav {
		width: calc(800 * var(--desktop-width-ratio));
	}
}

@media screen and (max-width: 500px) {
	header {
		z-index: 5;
		width: 100vw;
	}

	nav {
		z-index: 6;
		top: 0;
		background-color: var(--color-white);
		height: calc(110 * var(--mobile-height-ratio));
		width: 100vw;
		border-radius: 0;
		justify-content: space-around;
		transition: 1s ease-in-out;
	}

	.hidden {
		transform: translateX(-100vw);
	}

	.fade-in {
		opacity: 1;
		filter: blur(0px);
		transition: all 0.5s ease-in-out 0.5s;
	}

	.fade-out {
		opacity: 0;
		filter: blur(10px);
		transition: all 0.5s ease-in-out;
	}

	.blurred {
		height: 100vh;
		backdrop-filter: blur(10px);
		background-color: var(--color-green-transluscent);
		transition: backdrop-filter 1s ease-in-out, height 0.01s ease-in-out,
			background-color 1s ease-in-out;
	}

	.unblurred {
		height: 0;
		backdrop-filter: blur(0px);
		background-color: transparent;
		transition: backdrop-filter 1s ease-in-out,
			height 0.01s ease-in-out 0.99s, background-color 1s ease-in-out;
	}

	.fixed {
		overflow: hidden;
	}
}
</style>
