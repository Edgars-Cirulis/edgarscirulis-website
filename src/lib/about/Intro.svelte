<script>
	import { onMount } from 'svelte';

	let currentAge = 0;
	const birthDate = new Date('2003-01-30');

	function calculateAge() {
		const today = new Date();
		currentAge = today.getFullYear() - birthDate.getFullYear();
	}

	onMount(() => {
		calculateAge();
	});
</script>

<div class="intro">
	<p>
		Hello! I'm <strong>Edgars Cirulis</strong>, a passionate and committed web developer and
		aspiring software engineer. Currently, I'm <strong>{currentAge} years old</strong> and have been
		honing my skills in programming and web development for one year.
	</p>
	<p>
		My journey started with an interest in C++ programming, and since then, I’ve expanded my skill
		set to include modern web technologies like <strong>Svelte</strong> and server management with
		<strong>Nginx</strong>.
	</p>
</div>

<style>
	.intro {
		margin-bottom: 2.5rem;
		padding: 1.5rem;
		background: #1a1a1a;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
		color: #cccccc;
	}
	.intro p {
		margin-top: 1rem;
		font-size: 1.1rem;
		line-height: 1.6;
	}
	strong {
		color: #1db954;
	}
</style>
