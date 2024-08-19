<script>
	import '/src/app.css';
</script>

<div class="wrapper">
	<span class="title">Current theme colors</span>
	<slot />
</div>

<style>
	.wrapper {
		height: calc(100vh - 2rem);
		margin: 1rem;
	}

	.title {
		font-size: 1.5rem;
		font-weight: bold;
	}
</style>