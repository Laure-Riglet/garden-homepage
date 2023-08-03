<template>
	<div class="logo">
		<span>arboretum</span>
	</div>
</template>

<style scoped>
.logo {
	position: absolute;
	z-index: 4;
	top: calc(20 * var(--desktop-height-ratio));
	left: 0;
	width: auto;
	height: calc(80 * var(--desktop-height-ratio));
	display: flex;
	align-items: center;
	color: var(--color-white);
	font-size: calc(28 * var(--desktop-average-ratio));
	font-weight: 500;
	letter-spacing: 0;
	margin: 0 calc(50 * var(--desktop-width-ratio));
}

@media screen and (max-width: 1350px) {
	.logo {
		margin: 0 calc(30 * var(--desktop-width-ratio));
	}
}

@media screen and (max-width: 500px) {
	.logo {
		top: calc(35 * var(--mobile-height-ratio));
		width: 100vw;
		height: calc(40 * var(--mobile-height-ratio));
		justify-content: center;
		font-size: calc(30 * var(--mobile-average-ratio));
		font-weight: 400;
		margin: 0;
	}
	span {
		filter: drop-shadow(
				calc(2 * var(--mobile-average-ratio))
					calc(2 * var(--mobile-average-ratio))
					calc(5 * var(--mobile-average-ratio)) var(--color-green)
			)
			drop-shadow(
				calc(-2 * var(--mobile-average-ratio))
					calc(-2 * var(--mobile-average-ratio))
					calc(5 * var(--mobile-average-ratio)) var(--color-green)
			)
			drop-shadow(
				calc(2 * var(--mobile-average-ratio))
					calc(-2 * var(--mobile-average-ratio))
					calc(5 * var(--mobile-average-ratio)) var(--color-green)
			)
			drop-shadow(
				calc(-2 * var(--mobile-average-ratio))
					calc(2 * var(--mobile-average-ratio))
					calc(5 * var(--mobile-average-ratio)) var(--color-green)
			);
	}
}
</style>
