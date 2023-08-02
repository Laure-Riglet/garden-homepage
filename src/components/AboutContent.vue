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
	padding: calc(20 * var(--desktop-height-ratio))
		calc(30 * var(--desktop-width-ratio))
		calc(40 * var(--desktop-height-ratio));
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
	margin: 0 calc(15 * var(--desktop-width-ratio))
		calc(15 * var(--desktop-height-ratio)) 0;
	height: calc(100 * var(--desktop-average-ratio));
	width: calc(100 * var(--desktop-average-ratio));
	animation: zoom 3.5s ease-in-out infinite;
}

h3 {
	font-size: calc(17 * var(--desktop-average-ratio));
	font-weight: 700;
	color: var(--color-black);
	letter-spacing: calc(5 * var(--desktop-average-ratio));
	text-transform: uppercase;
}

@media screen and (max-width: 500px) {
	.container {
		padding: calc(20 * var(--mobile-height-ratio))
			calc(30 * var(--mobile-width-ratio))
			calc(40 * var(--mobile-height-ratio));
	}

	.header img {
		margin: 0 calc(5 * var(--mobile-width-ratio))
			calc(10 * var(--mobile-height-ratio))
			calc(-10 * var(--mobile-height-ratio));
		height: calc(70 * var(--mobile-average-ratio));
		width: calc(70 * var(--mobile-average-ratio));
	}

	h3 {
		font-size: calc(14 * var(--mobile-average-ratio));
		letter-spacing: calc(2 * var(--mobile-average-ratio));
	}
}
</style>
