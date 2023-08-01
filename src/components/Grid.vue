<!-- Grid.vue -->
<script setup>
import AboutContent from './AboutContent.vue';
import Buttons from './Buttons.vue';
import Illustration from './Illustration.vue';
import MainContent from './MainContent.vue';
import { store } from '../store';
import { ref, watch } from 'vue';
import data from '../data.json';

const curImg = ref('curImg');
const prevImg = ref('prevImg');
const curCnt = ref('curCnt');
const prevCnt = ref('prevCnt');

watch(
	() => store.currentMainContent,
	(newValue, oldvalue) => {
		prevImg.value = '';
		curImg.value = '';
		prevCnt.value = '';
		curCnt.value = '';

		if (
			(oldvalue < newValue &&
				!(
					newValue === data.mainContent.length - 1 && oldvalue === 0
				)) ||
			(newValue === 0 && oldvalue === data.mainContent.length - 1)
		) {
			setTimeout(() => {
				prevImg.value = 'prevImg slideoutleft';
				curImg.value = 'curImg slideinright';
				prevCnt.value = 'prevCnt fadeout';
				curCnt.value = 'curCnt fadein';
			}, 1);
		} else if (
			oldvalue > newValue ||
			(newValue === data.mainContent.length - 1 && oldvalue === 0)
		) {
			setTimeout(() => {
				prevImg.value = 'prevImg slideoutright';
				curImg.value = 'curImg slideinleft';
				prevCnt.value = 'prevCnt fadeout';
				curCnt.value = 'curCnt fadein';
			}, 1);
		}
	}
);
</script>

<template>
	<div class="parent">
		<div class="div1">
			<!-- Display the current image with transition -->
			<Illustration
				:imageUrl="
					data.mainContent[store.currentMainContent].desktopImage
				"
				:imageAlt="data.mainContent[store.currentMainContent].imageAlt"
				:imageClass="curImg" />
			<!-- Display the previous image during transition -->
			<Illustration
				:imageUrl="
					data.mainContent[store.previousMainContent].desktopImage
				"
				:imageAlt="data.mainContent[store.previousMainContent].imageAlt"
				:imageClass="prevImg" />
		</div>
		<div class="div2">
			<MainContent :contentClass="curCnt" />
			<MainContent :contentClass="prevCnt" />
		</div>
		<div class="div3"></div>
		<div class="div4">
			<AboutContent />
		</div>
		<div class="div5"></div>
		<div class="div6">
			<Buttons />
		</div>
	</div>
</template>

<style scoped>
.parent {
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: repeat(4, auto);
	grid-template-rows: repeat(3, auto);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
}

.div1 {
	grid-area: 1 / 1 / 3 / 3;
	width: calc(840 * var(--width-ratio));
	height: calc(534 * var(--height-ratio));
	overflow: hidden;
	position: relative;
}
.div2 {
	grid-area: 1 / 3 / 2 / 5;
	width: calc(600 * var(--width-ratio));
	height: calc(454 * var(--height-ratio));
	position: relative;
}
.div3 {
	grid-area: 3 / 1 / 4 / 2;
	width: calc(420 * var(--width-ratio));
	height: calc(266 * var(--height-ratio));
	background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
		url('./src/assets/img/image-about-dark.webp');
	background-size: cover;
	background-position: center center;
}

.div4 {
	grid-area: 3 / 2 / 4 / 4;
	width: calc(580 * var(--width-ratio));
	height: calc(266 * var(--height-ratio));
}

.div5 {
	grid-area: 3 / 4 / 4 / 5;
	width: calc(440 * var(--width-ratio));
	height: calc(266 * var(--height-ratio));
	background-image: linear-gradient(
			hsla(71, 46%, 50%, 0.3),
			hsla(71, 46%, 50%, 0.3)
		),
		url('./src/assets/img/image-about-light.webp');
	background-size: cover;
	background-position: center center;
}
.div6 {
	grid-area: 2 / 3 / 3 / 4;
	width: calc(160 * var(--width-ratio));
	height: calc(80 * var(--height-ratio));
	display: flex;
	flex-flow: row nowrap;
	justify-content: start;
	align-items: end;
}
</style>
