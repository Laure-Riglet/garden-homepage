<script setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<a href="#">
		<h2>
			{{ title }}
		</h2>
		<div class="underline"></div>
	</a>
</template>

<style scoped>
a {
	position: relative;
}

h2 {
	font-size: calc(16 * var(--desktop-average-ratio));
	font-weight: 500;
	letter-spacing: 0rem;
	line-height: 1.1;
	color: var(--color-white);
}

.underline {
	display: none;
}

a:hover .underline {
	display: block;
	position: absolute;
	bottom: -5px;
	left: calc(50% - 10 * var(--desktop-width-ratio));
	width: calc(20 * var(--desktop-width-ratio));
	height: calc(2 * var(--desktop-height-ratio));
	background-color: var(--color-white);
}

@media screen and (max-width: 500px) {
	h2 {
		font-size: calc(17 * var(--mobile-average-ratio));
		font-weight: 700;
		letter-spacing: calc(-1 * var(--mobile-average-ratio));
		color: var(--color-black);
	}
}
</style>
