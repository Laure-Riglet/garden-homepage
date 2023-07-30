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
	</a>
</template>

<style scoped>
a {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20px;
	height: 25px;
	border-bottom: 2px solid transparent;
}

a:hover {
	border-bottom: 2px solid var(--color-white);
}

h2 {
	font-size: 1rem;
	font-weight: 5;
	letter-spacing: 0rem;
	line-height: 1.1;
	color: var(--color-white);
}
</style>
