<script setup>
import ArrowShopNow from '../Icons/ArrowShopNow.vue';
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
	margin-right: calc(25 * var(--desktop-width-ratio));
	font-size: calc(17 * var(--desktop-average-ratio));
	font-weight: 600;
	letter-spacing: calc(10 * var(--desktop-average-ratio));
	text-transform: uppercase;
}

@media screen and (max-width: 500px) {
	p {
		margin-right: calc(25 * var(--mobile-width-ratio));
		font-size: calc(17 * var(--mobile-average-ratio));
		letter-spacing: calc(10 * var(--mobile-average-ratio));
	}
}
</style>
