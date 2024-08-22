<script>
	import '/src/app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
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