<script lang="ts">
	let name = '';
	let email = '';
	let message = '';
	let formSubmitted = false;

	async function handleSubmit(event: Event) {
		event.preventDefault();

		const formData = new FormData();
		formData.append('name', name);
		formData.append('email', email);
		formData.append('message', message);

		try {
			const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
				method: 'POST',
				headers: { Accept: 'application/json' },
				body: formData
			});

			if (response.ok) {
				formSubmitted = true;
				resetForm();
			} else {
				alert('Oops! There was a problem submitting your form.');
			}
		} catch (error) {
			alert('An error occurred. Please try again.');
			console.error(error);
		}
	}

	function resetForm() {
		name = '';
		email = '';
		message = '';
	}
</script>

<section class="contact">
	<h2>Contact Me</h2>
	{#if !formSubmitted}
		<form on:submit={handleSubmit}>
			<div class="form-group">
				<label for="name">Name</label>
				<input type="text" id="name" bind:value={name} placeholder="Your name" required />
			</div>

			<div class="form-group">
				<label for="email">Email</label>
				<input type="email" id="email" bind:value={email} placeholder="Your email" required />
			</div>

			<div class="form-group">
				<label for="message">Message</label>
				<textarea id="message" bind:value={message} placeholder="Your message" required></textarea>
			</div>

			<button type="submit" class="submit-button">Send Message</button>
		</form>
	{:else}
		<div class="thank-you-message">
			<p>Thank you for reaching out! I'll get back to you soon.</p>
			<button on:click={() => (formSubmitted = false)} class="submit-button"
				>Send Another Message</button
			>
		</div>
	{/if}
</section>

<style>
	.contact {
		text-align: center;
		padding: 3rem 1rem;
		max-width: 500px;
		margin: 0 auto;
		background-color: #222;
		border-radius: 10px;
		box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
		color: #e0e0e0;
	}

	.contact h2 {
		font-size: 2rem;
		color: #1db954;
		margin-bottom: 1.5rem;
	}

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.form-group {
		width: 100%;
		margin-bottom: 1.5rem;
		text-align: left;
	}

	label {
		font-weight: bold;
		color: #ffffff;
		margin-bottom: 0.5rem;
		display: block;
	}

	input,
	textarea {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid #444;
		border-radius: 5px;
		font-size: 1rem;
		background-color: #333;
		color: #ffffff;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: #1db954;
		box-shadow: 0 0 5px rgba(29, 185, 84, 0.5);
	}

	.submit-button {
		padding: 0.75rem 1.5rem;
		background-color: #1db954;
		color: #ffffff;
		border: none;
		border-radius: 5px;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		transition: background-color 0.3s;
		width: 100%;
		max-width: 200px;
	}

	.submit-button:hover {
		background-color: #17a64a;
	}

	.thank-you-message {
		margin-top: 2rem;
		font-size: 1.25rem;
		color: #1db954;
	}

	@media (min-width: 600px) {
		.contact {
			padding: 4rem;
		}

		.submit-button {
			width: auto;
		}
	}
</style>
