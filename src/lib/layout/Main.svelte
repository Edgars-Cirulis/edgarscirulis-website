<script>
	import Nav from '$lib/main/Nav.svelte';
	import Footer from '$lib/main/Footer.svelte';
</script>

<Nav />
<main>
	<slot />
</main>
<Footer />

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		height: 100%;
		font-family: 'Inter', sans-serif;
		background-color: #000000;
		color: #ffffff;
		scroll-behavior: smooth;
	}

	main {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		padding: 2rem 1rem;
		max-width: 800px;
		margin: 0 auto;
		opacity: 0;
		animation: fadeIn 1s ease-in-out forwards;
	}

	main::before,
	main::after {
		content: '';
		display: block;
		width: 100%;
		height: 1px;
		background-color: rgba(255, 255, 255, 0.5);
		margin: 1.5rem 0;
	}

	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}
</style>
