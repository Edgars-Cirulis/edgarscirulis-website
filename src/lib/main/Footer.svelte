<footer class="footer">
	<div class="copyright">
		<p>&copy; {new Date().getFullYear()} Edgars Cirulis. All rights reserved.</p>
		<p>
			This content is licensed under a
			<a
				href="https://creativecommons.org/licenses/by/4.0/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Creative Commons Attribution 4.0 International License
			</a>.
		</p>
	</div>
</footer>

<style>
	.footer {
		background-color: #000;
		color: #cccccc;
		padding: 2rem 1rem;
		text-align: center;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.copyright {
		font-size: 0.875rem;
		color: #bbbbbb;
		margin-top: 1rem;
		opacity: 0;
		animation: fadeIn 1.5s ease forwards 0.5s;
	}

	.copyright a {
		color: #1db954;
		text-decoration: none;
	}

	.copyright a:hover {
		color: #ffffff;
		text-decoration: underline;
	}

	@keyframes fadeInUp {
		from {
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
