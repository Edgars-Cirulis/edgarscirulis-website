<section class="intro">
	<div class="icon">👋</div>
	<h1 class="fade-in">Hi, I'm <span class="name">Edgars</span></h1>
	<p class="intro-text">
		A passionate web developer and aspiring full-stack engineer focused on creating impactful
		digital experiences.
	</p>
	<a class="button" href="/about">Learn More About Me</a>
</section>

<style>
	.intro {
		text-align: center;
		padding: 4rem 1rem;
		max-width: 800px;
		margin: 0 auto;
		color: #e0e0e0;
	}

	.icon {
		font-size: 3.5rem;
		margin-bottom: 1rem;
		animation: popIn 0.6s ease-out forwards;
	}

	.intro h1 {
		font-size: 2.8rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
		animation: fadeIn 1s forwards;
		color: #ffffff;
	}

	.name {
		color: #1db954;
	}

	.intro-text {
		font-size: 1.3rem;
		color: #cccccc;
		margin-bottom: 2rem;
		max-width: 600px;
		line-height: 1.6;
		margin: 0 auto 2rem;
	}

	.button {
		display: inline-block;
		padding: 0.8rem 1.6rem;
		border: 2px solid #1db954;
		color: #1db954;
		border-radius: 8px;
		font-weight: 600;
		text-decoration: none;
		transition:
			background-color 0.3s ease,
			color 0.3s ease,
			transform 0.2s ease;
		font-size: 1rem;
	}

	.button:hover {
		background-color: #1db954;
		color: #ffffff;
		transform: translateY(-3px);
		box-shadow: 0 8px 16px rgba(29, 185, 84, 0.2);
	}

	/* Animations */
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes popIn {
		0% {
			opacity: 0;
			transform: scale(0.8);
		}
		70% {
			opacity: 1;
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
