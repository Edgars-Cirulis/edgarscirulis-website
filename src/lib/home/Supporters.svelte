<script lang="ts">
	import { supporters } from '$lib/data/supporters';
	import { onMount } from 'svelte';

	let totalSupported: number = 0;
	let avatarUrls: { [key: string]: string } = {};

	$: totalSupported = supporters.reduce((sum, supporter) => sum + supporter.amount, 0);

	onMount(async () => {
		for (const supporter of supporters) {
			const githubAvatarUrl = supporter.githubUsername
				? `https://github.com/${supporter.githubUsername}.png`
				: '';
			const customAvatarUrl = `/avatars/${supporter.name.toLowerCase().replace(/ /g, '-')}.png`;
			const placeholderAvatarUrl = '/avatars/placeholder.png';

			try {
				if (githubAvatarUrl) {
					avatarUrls[supporter.name] = githubAvatarUrl;
				} else {
					const customResponse = await fetch(customAvatarUrl, { method: 'HEAD' });
					if (customResponse.ok) {
						avatarUrls[supporter.name] = customAvatarUrl;
					} else {
						avatarUrls[supporter.name] = placeholderAvatarUrl;
					}
				}
			} catch (error) {
				console.error(`Error fetching avatar for ${supporter.name}`, error);
				avatarUrls[supporter.name] = placeholderAvatarUrl;
			}
		}
	});

	function onImageError(event: Event) {
		const imgElement = event.target as HTMLImageElement;
		const supporterName = imgElement.alt.replace("'s avatar", '');

		const customAvatarUrl = `/avatars/${supporterName.toLowerCase().replace(/ /g, '-')}.png`;
		const placeholderAvatarUrl = '/avatars/placeholder.png';

		if (imgElement.src !== customAvatarUrl) {
			imgElement.src = customAvatarUrl;
		} else {
			imgElement.src = placeholderAvatarUrl;
		}
	}
</script>

<section class="supporters">
	<h2>Supporters</h2>
	<p class="total-supported">Total Supported: <span>$ {totalSupported}</span></p>
	<div class="supporter-list">
		{#each supporters as supporter}
			<div class="supporter-card">
				<div class="supporter-info">
					<img
						class="supporter-avatar"
						src={avatarUrls[supporter.name] || '/avatars/placeholder.png'}
						alt="{supporter.name}'s avatar"
						on:error={onImageError}
					/>
					<div class="supporter-details">
						<h3>{supporter.name}</h3>
						<p class="supporter-amount">$ {supporter.amount}</p>
					</div>
					<div class="social-links">
						{#if supporter.socialLinks?.x}
							<a href={supporter.socialLinks.x} target="_blank" aria-label="X (formerly Twitter)">
								<img src="/icons/x.svg" alt="X icon" class="social-icon" />
							</a>
						{/if}
						{#if supporter.socialLinks?.facebook}
							<a href={supporter.socialLinks.facebook} target="_blank" aria-label="Facebook">
								<img src="/icons/facebook.svg" alt="Facebook icon" class="social-icon" />
							</a>
						{/if}
						{#if supporter.socialLinks?.github}
							<a href={supporter.socialLinks.github} target="_blank" aria-label="GitHub">
								<img src="/icons/github.svg" alt="GitHub icon" class="social-icon" />
							</a>
						{/if}
						{#if supporter.socialLinks?.linkedin}
							<a href={supporter.socialLinks.linkedin} target="_blank" aria-label="LinkedIn">
								<img src="/icons/linkedin.svg" alt="LinkedIn icon" class="social-icon" />
							</a>
						{/if}
					</div>
				</div>
				<p class="supporter-message">"{supporter.message}"</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.supporters {
		text-align: center;
		padding: 4rem 1rem;
	}

	h2 {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 1.5rem;
		color: #ffffff;
	}

	.total-supported {
		font-size: 1.5rem;
		font-weight: bold;
		color: #1db954;
		margin-bottom: 2rem;
	}

	.total-supported span {
		background: rgba(29, 185, 84, 0.1);
		padding: 0.25rem 0.5rem;
		border-radius: 5px;
	}

	.supporter-list {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		justify-content: center;
	}

	.supporter-card {
		background: #1a1a1a;
		padding: 1.5rem;
		border-radius: 12px;
		width: 280px;
		text-align: left;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.supporter-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
	}

	.supporter-info {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.75rem;
	}

	.supporter-avatar {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		object-fit: cover;
		border: 2px solid #1db954;
	}

	.supporter-details {
		flex-grow: 1;
	}

	.supporter-card h3 {
		font-size: 1.25rem;
		color: #ffffff;
		margin: 0;
	}

	.supporter-amount {
		color: #1db954;
		font-weight: bold;
		font-size: 1.15rem;
	}

	.supporter-message {
		color: #cccccc;
		font-size: 1rem;
		font-style: italic;
		margin-top: 0.5rem;
	}

	.social-links {
		display: flex;
		gap: 0.5rem;
	}

	.social-icon {
		width: 25px;
		height: 25px;
		opacity: 0.8;
		transition: opacity 0.3s;
	}

	.social-icon:hover {
		opacity: 1;
	}
</style>
