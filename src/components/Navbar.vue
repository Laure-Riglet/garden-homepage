<script setup>
import NavLinks from './NavLinks.vue';
</script>

<template>
	<div>
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
	margin-right: calc(50 * var(--width-ratio));
}
</style>
