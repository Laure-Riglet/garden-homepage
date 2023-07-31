<template>
	<svg
		width="40px"
		height="13px"
		viewBox="0 0 40 13"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" />
	</svg>
</template>

<style scoped>
@keyframes move {
	0% {
		transform: translateX(calc(0 * var(--average-ratio)));
	}
	50% {
		transform: translateX(calc(10 * var(--average-ratio)));
	}
	100% {
		transform: translateX(calc(0 * var(--average-ratio)));
	}
}
svg {
	animation: move 1.5s infinite;
	height: calc(13 * 1.2 * var(--average-ratio));
	width: calc(40 * 1.2 * var(--average-ratio));
}
</style>
