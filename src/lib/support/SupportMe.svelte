<script lang="ts">
	const platforms = [
		{
			name: 'Buy Me a Coffee',
			url: 'https://www.buymeacoffee.com/edgarscirulis',
			icon: '/icons/buymeacoffee.svg'
		},
		{
			name: 'Ko-Fi',
			url: 'https://ko-fi.com/edgarscirulis',
			icon: '/icons/ko-fi.svg'
		},
		{
			name: 'PayPal',
			url: 'https://paypal.me/cirulisedgars',
			icon: '/icons/paypal.svg'
		}
	];
	const cryptoAddresses = [
		{ name: 'BTC', address: '1LWnND9ivFJGo7mtTKx4q3BQLJR3SdyNU' },
		{ name: 'ETH | USDT', address: '0x194406f8264b4c0566fe9cb53b4cdc9eea7cc27b' }
	];

	function handleKeyDown(event: KeyboardEvent, address: string) {
		if (event.key === 'Enter' || event.key === ' ') {
			navigator.clipboard.writeText(address);
		}
	}
</script>

<section class="support-me">
	<h2>Support Me</h2>
	<p>If you enjoy my work, consider supporting me through one of these platforms:</p>

	<div class="support-links">
		{#each platforms as platform}
			<a href={platform.url} target="_blank" rel="noopener noreferrer" class="support-link">
				<img src={platform.icon} alt="{platform.name} icon" class="icon" />
				{platform.name}
			</a>
		{/each}
	</div>

	<p class="crypto-title">Or support me with cryptocurrency:</p>
	<div class="crypto-addresses">
		{#each cryptoAddresses as crypto}
			<div class="crypto-address">
				<span class="crypto-name">{crypto.name}:</span>
				<span
					class="crypto-value"
					role="button"
					tabindex="0"
					on:click={() => navigator.clipboard.writeText(crypto.address)}
					on:keydown={(event) => handleKeyDown(event, crypto.address)}
					title="Click to copy"
				>
					{crypto.address}
				</span>
			</div>
		{/each}
	</div>
</section>

<style>
	.support-me {
		text-align: center;
		padding: 3rem 1.5rem;
		background-color: #222;
		border-radius: 10px;
		box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
		color: #e0e0e0;
		max-width: 700px;
		margin: 0 auto 2rem;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.support-me:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
	}

	.support-me h2 {
		font-size: 2rem;
		color: #1db954;
		margin-bottom: 0.75rem;
		font-weight: 700;
		letter-spacing: 1px;
	}

	.support-me p {
		font-size: 1.1rem;
		color: #cccccc;
		margin-bottom: 1.5rem;
		font-weight: 400;
		line-height: 1.5;
	}

	.support-links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.support-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.6rem 1.2rem;
		font-size: 0.95rem;
		font-weight: 500;
		color: #ffffff;
		background-color: #333;
		border: 1px solid #444;
		border-radius: 8px;
		text-decoration: none;
		transition:
			background-color 0.3s,
			transform 0.1s;
	}

	.support-link:hover {
		background-color: #1db954;
		border-color: #1db954;
		color: #fff;
		transform: scale(1.05);
	}

	.icon {
		width: 18px;
		height: 18px;
	}

	.crypto-title {
		font-size: 1rem;
		color: #1db954;
		margin-top: 1.5rem;
		margin-bottom: 1rem;
		font-weight: 600;
	}

	.crypto-addresses {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
	}

	.crypto-address {
		font-size: 0.95rem;
		color: #cccccc;
		font-weight: 500;
	}

	.crypto-name {
		color: #1db954;
		font-weight: 600;
		margin-right: 0.5rem;
	}

	.crypto-value {
		color: #ffffff;
		font-family: monospace;
		background-color: #333;
		padding: 0.2rem 0.5rem;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.crypto-value:hover {
		background-color: #1db954;
		color: #000;
	}

	@media (max-width: 600px) {
		.support-me {
			padding: 2rem 1rem;
			width: 90%;
			margin: 0 auto;
			box-shadow: none;
		}

		.support-links {
			flex-direction: column;
			gap: 1rem;
		}

		.crypto-addresses {
			text-align: center;
			width: 100%;
		}

		.crypto-address {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.crypto-value {
			width: 100%;
			word-break: break-all;
			text-align: center;
		}
	}
</style>
