<script>
	export let title;
	export let description = '';
	export let keywords = '';
	export let url = '';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<link rel="canonical" href={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Edgars Cirulis",
			"jobTitle": "Web Developer & Software Engineer",
			"description": "{description}",
			"url": "{url}",
			"sameAs": ["https://github.com/edgars-cirulis", "https://www.facebook.com/edgarsscirulis/"]
		}
	</script>
</svelte:head>
