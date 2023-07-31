<script setup>
import ArrowShopNow from './icons/ArrowShopNow.vue';
</script>

<template>
	<a href="#">
		<p>shop</p>
		<p>now</p>
		<ArrowShopNow />
	</a>
</template>

<style scoped>
a {
	display: flex;
	align-items: center;
	color: var(--color-black);
	fill: var(--color-black);
}

a:hover {
	color: var(--color-dark-gray);
	fill: var(--color-dark-gray);
}

p {
	margin-right: calc(25 * var(--width-ratio));
	font-size: calc(17 * var(--average-ratio));
	font-weight: 600;
	letter-spacing: calc(10 * var(--average-ratio));
	text-transform: uppercase;
}
</style>
