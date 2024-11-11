<script>
	import SEO from '$lib/main/SEO.svelte';
	import AboutIntro from '$lib/about/Intro.svelte';
	import AboutHighlights from '$lib/about/Highlights.svelte';
	import CareerGoals from '$lib/about/CareerGoals.svelte';
	import NotableProjects from '$lib/about/NotableProjects.svelte';
	import Skills from '$lib/about/Skills.svelte';
</script>

<SEO title="Edgars Cirulis - About" url="https://edgarscirulis.lv/about" />

<section class="about-me">
	<h2>About Me</h2>
	<AboutIntro />
	<AboutHighlights />
	<CareerGoals />
	<NotableProjects />
	<Skills />
</section>

<style>
	.about-me {
		max-width: 800px;
		margin: 0 auto;
		padding: 3rem 1rem;
		color: #ffffff;
		animation: fadeIn 0.5s ease-in-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	h2 {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 2rem;
		border-bottom: 2px solid #ffffff;
		padding-bottom: 0.5rem;
	}
</style>
