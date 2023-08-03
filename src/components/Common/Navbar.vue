<script setup>
import CloseCross from '../Icons/CloseCross.vue';
import NavLinks from './Elements/NavLinks.vue';
</script>

<template>
	<div>
		<CloseCross />
		<NavLinks title="home" />
		<NavLinks title="shop" />
		<NavLinks title="about" />
		<NavLinks title="contact" />
	</div>
</template>

<style scoped>
div {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-right: calc(50 * var(--desktop-width-ratio));
	margin-left: calc(225 * var(--desktop-width-ratio));
}

@media screen and (max-width: 1350px) {
	div {
		margin-right: calc(50 * var(--desktop-width-ratio));
	}
}

@media screen and (max-width: 950px) {
	div {
		margin-left: calc(350 * var(--desktop-width-ratio));
	}
}

@media screen and (max-width: 500px) {
	div {
		justify-content: space-between;
		margin-right: 0;
		margin-left: 0;
		padding: 0 calc(25 * var(--mobile-height-ratio));
	}
}
</style>
