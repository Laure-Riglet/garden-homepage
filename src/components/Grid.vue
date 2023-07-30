<script setup>
import Buttons from './Buttons.vue';
import MainContent from './MainContent.vue';
</script>

<template>
	<div class="parent">
		<div class="div1"></div>
		<div class="div2">
			<MainContent />
		</div>
		<div class="div3"></div>
		<div class="div4">
			<h3>About our garden center</h3>
			<p>
				At our garden center, we believe in the harmonious integration
				of nature into everyday life. Our collection features a range of
				trees and plants that blend form and function to suit your
				individual taste. Make your garden unique or choose a cohesive
				theme that expresses your love for the great outdoors.
			</p>
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
	grid-template-columns: repeat(2, 42fr) 16fr 44fr;
	grid-template-rows: 454fr 80fr 266fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
}

.div1 {
	grid-area: 1 / 1 / 3 / 3;
	background-image: url('./src/assets/img/desktop-image-hero-1.webp');
	background-size: cover;
	background-position: center center;
}
.div2 {
	grid-area: 1 / 3 / 2 / 5;
	padding: 120px 100px 74px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.div3 {
	grid-area: 3 / 1 / 4 / 2;
	background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
		url('./src/assets/img/image-about-dark.webp');
	background-size: cover;
	background-position: center center;
}

.div4 {
	grid-area: 3 / 2 / 4 / 4;
	padding: 65px 45px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.div4 h3 {
	font-size: 0.9rem;
	font-weight: 700;
	color: var(--color-black);
	letter-spacing: 0.3rem;
	text-transform: uppercase;
}
.div5 {
	grid-area: 3 / 4 / 4 / 5;
	background-image: linear-gradient(
			rgba(255, 255, 255, 0.3),
			rgba(255, 255, 255, 0.3)
		),
		url('./src/assets/img/image-about-light.webp');
	background-size: cover;
	background-position: center center;
}
.div6 {
	grid-area: 2 / 3 / 3 / 4;
	display: flex;
	flex-flow: row nowrap;
	justify-content: start;
	align-items: end;
}
</style>
