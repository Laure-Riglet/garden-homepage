<script setup>
import { ref, computed, watch } from 'vue';
import { store } from '../store';
import data from '../data.json';
import ShopNow from './ShopNow.vue';

const props = defineProps({
	contentClass: {
		type: String,
		required: true,
	},
});

let title;
let text;

if (props.contentClass === 'prevCnt') {
	title = ref(data.mainContent[store.previousMainContent].title);
	text = ref(data.mainContent[store.previousMainContent].description);
} else if (props.contentClass === 'curCnt') {
	title = ref(data.mainContent[store.currentMainContent].title);
	text = ref(data.mainContent[store.currentMainContent].description);
} else {
	console.log('Unknown content class');
}

const balancedTitle = computed(() => {
	const splitText = title.value.split(' ');
	const wordCount = splitText.length;
	const half = Math.ceil(wordCount / 2);
	const firstHalf = splitText.slice(0, half).join(' ');
	const secondHalf = splitText.slice(half).join(' ');
	return `${firstHalf} <br /> ${secondHalf}`;
});

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
	(newValue, oldValue) => {
		if (props.contentClass.includes('prevCnt')) {
			text.value = data.mainContent[oldValue].description;
			title.value = data.mainContent[oldValue].title;
		} else if (props.contentClass.includes('curCnt')) {
			text.value = data.mainContent[newValue].description;
			title.value = data.mainContent[newValue].title;
		}
	}
);
</script>

<template>
	<div class="container" :class="props.contentClass">
		<h1 v-html="balancedTitle"></h1>
		<p v-html="highlightedDescription"></p>
		<ShopNow />
	</div>
</template>

<style scoped>
.container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: calc(100 * var(--height-ratio)) calc(60 * var(--width-ratio))
		calc(60 * var(--height-ratio));
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

@keyframes fadein {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes fadeout {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}

.prevCnt {
	opacity: 0;
}
.curCnt {
	z-index: 99;
}

.fadein {
	animation: fadein 1s ease-in-out;
}

.fadeout {
	animation: fadeout 1s ease-in-out;
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
