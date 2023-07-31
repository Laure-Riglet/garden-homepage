<script setup>
import { ref, computed, watch } from 'vue';
import { store } from '../store';
import data from '../data.json';
import ShopNow from './ShopNow.vue';

const title = ref(data.mainContent[store.currentMainContent].title);

const balancedTitle = computed(() => {
	const splitText = title.value.split(' ');
	const wordCount = splitText.length;
	const half = Math.ceil(wordCount / 2);
	const firstHalf = splitText.slice(0, half).join(' ');
	const secondHalf = splitText.slice(half).join(' ');
	return `${firstHalf} <br /> ${secondHalf}`;
});

const text = ref(data.mainContent[store.currentMainContent].description);

const highlightedDescription = computed(() => {
	const splitText = text.value.split(' ');
	splitText.forEach((word, index) => {
		if (word.includes('arboretum')) {
			splitText[index] = word.replace(
				'arboretum',
				'<span class="arboretum">arboretum</span>'
			);
		}
	});
	return splitText.join(' ');
});

watch(
	() => store.currentMainContent,
	(newValue) => {
		text.value = data.mainContent[newValue].description;
		title.value = data.mainContent[newValue].title;
	}
);
</script>

<template>
	<div class="container">
		<h1 v-html="balancedTitle"></h1>
		<p v-html="highlightedDescription"></p>
		<ShopNow />
	</div>
</template>

<style scoped>
.container {
	width: 100%;
	height: 100%;
	padding: calc(100 * var(--height-ratio)) calc(60 * var(--width-ratio))
		calc(60 * var(--height-ratio));
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
h1 {
	font-size: calc(46 * var(--average-ratio));
	font-weight: 700;
	letter-spacing: calc(-2 * var(--average-ratio));
	line-height: 1;
	color: var(--color-black);
}

@media screen and (max-width: 1430px) {
	h1 {
		font-size: calc(42 * var(--average-ratio));
	}
}
</style>
