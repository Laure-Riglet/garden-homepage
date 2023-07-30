<script setup>
import ArrowShopNow from './icons/ArrowShopNow.vue';
</script>

<template>
	<div>
		<p>shop</p>
		<p>now</p>
		<ArrowShopNow />
	</div>
</template>

<style scoped>
div {
	display: flex;
	align-items: center;
	color: var(--color-black);
}

div:hover {
	color: var(--color-dark-gray);
}

p {
	margin-right: 30px;
	font-size: 0.9rem;
	font-weight: 600;
	letter-spacing: 0.7rem;
	text-transform: uppercase;
}
</style>
