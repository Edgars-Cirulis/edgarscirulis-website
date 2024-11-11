<script lang="ts">
	import { Blogs } from '$lib/data/blogs';
</script>

<section class="Blogs">
	<h2>Blog & Blogs</h2>
	<div class="Blog-list">
		{#each Blogs as Blog}
			<div class="Blog-card">
				<h3>{Blog.title}</h3>
				<p>{Blog.summary}</p>
				<a href={Blog.link} target="_blank" class="read-more">Read more</a>
			</div>
		{/each}
	</div>
</section>

<style>
	.Blogs {
		text-align: center;
		padding: 4rem 1rem;
	}

	.Blogs h2 {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 1.5rem;
		color: #ffffff;
	}

	.Blog-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		align-items: center;
	}

	.Blog-card {
		background: #1a1a1a;
		padding: 1.5rem;
		border-radius: 8px;
		width: 100%;
		max-width: 600px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		text-align: left;
	}

	.Blog-card h3 {
		font-size: 1.5rem;
		color: #ffffff;
		margin-bottom: 0.5rem;
	}

	.Blog-card p {
		color: #cccccc;
		font-size: 1rem;
		margin-bottom: 1rem;
	}

	.read-more {
		color: #1db954;
		font-weight: bold;
		text-decoration: none;
	}

	.read-more:hover {
		color: #17a64a;
		text-decoration: underline;
	}
</style>
