<template>
	<div class="container">
		<div class="header">
			<img src="../assets/img/logo/logo-600x600.webp" alt="logo" />
			<h3>About our garden center</h3>
		</div>
		<p>
			At <span class="arboretum">arboretum</span>, we believe in the
			harmonious integration of nature into everyday life. Our collection
			features a range of trees and plants that blend form and function to
			suit your individual taste. Make your garden unique or choose a
			cohesive theme that expresses your love for the great outdoors.
		</p>
	</div>
</template>

<style scoped>
.container {
	width: 100%;
	height: 100%;
	padding: calc(20 * var(--height-ratio)) calc(30 * var(--width-ratio))
		calc(40 * var(--height-ratio));
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.header {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

@keyframes zoom {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.1);
	}
	100% {
		transform: scale(1);
	}
}

.header img {
	margin: 0 calc(15 * var(--width-ratio)) calc(15 * var(--height-ratio)) 0;
	height: calc(80 * var(--average-ratio));
	width: calc(80 * var(--average-ratio));
	animation: zoom 3.5s ease-in-out infinite;
}

h3 {
	font-size: calc(17 * var(--average-ratio));
	font-weight: 700;
	color: var(--color-black);
	letter-spacing: calc(5 * var(--average-ratio));
	text-transform: uppercase;
}
</style>
