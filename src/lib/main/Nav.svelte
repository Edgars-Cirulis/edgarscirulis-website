<script>
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	const currentPath = derived(page, ($page) => $page.url.pathname);
</script>

<nav>
	<a href="/" class={$currentPath === '/' ? 'active' : ''}>Home</a>
	<a href="/about" class={$currentPath === '/about' ? 'active' : ''}>About</a>
</nav>

<style>
	nav {
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 2rem;
		padding: 1rem 0;
		background-color: #000;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		position: sticky;
		top: 0;
		z-index: 10;
	}

	nav a {
		color: #cccccc;
		text-decoration: none;
		font-weight: 500;
		padding: 0.5rem 1rem;
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 4px;
		background-color: #111;
		transition:
			background-color 0.3s ease,
			color 0.3s ease,
			border-color 0.3s ease;
	}

	nav a.active {
		background-color: #333;
		border-color: rgba(255, 255, 255, 0.4);
		color: #ffffff;
	}

	nav a:hover {
		background-color: #222;
		border-color: rgba(255, 255, 255, 0.3);
		color: #ffffff;
		transform: translateY(-2px);
		box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
	}
</style>
