<script>
	import { onMount } from 'svelte';
	import { kebabCase } from 'lodash-es';
	import { on, postEvent } from '@telegram-apps/sdk';

	let colors = [];

	let themeColorNames = [
		'accentTextColor',
	  'bgColor',
	  'buttonColor',
	  'buttonTextColor',
	  'destructiveTextColor',
	  'headerBgColor',
	  'hintColor',
	  'linkColor',
	  'secondaryBgColor',
	  'bottomBarBgColor',
	  'sectionBgColor',
	  'sectionHeaderTextColor',
	  'subtitleTextColor',
	  'textColor'
	];

	const getColors = (element) => {
		return themeColorNames
			.map((token) => getComputedStyle(element).getPropertyValue(`--tg-theme-${kebabCase(token)}`));
	}

	let MiniApp;

	onMount(async () => {
		await import('@twa-dev/sdk');
		MiniApp = window.Telegram.WebApp;
		MiniApp.ready();
		MiniApp.expand();

		const element = document.querySelector('html');
		colors = getColors(element);

		on('theme_changed', () => {
	    postEvent('web_app_ready');
	  });
	});

	const copy = (color) => {
		navigator.clipboard.writeText(color);
	}
</script>

<div class="list">
	{#each colors as color, index}
		<div class="thumb" style="background-color: {color};"></div>
		<!-- svelte-ignore a11y-interactive-supports-focus -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div>{themeColorNames[index]}
			<br>
			<div title="click to copy" role="button" class="color" on:click={copy(color)}>{color}</div>
		</div>
	{/each}
</div>
<footer><a href="https://github.com/alexeipanov/theme-miniapp" style="color: var(--tg-theme-link-color);">https://github.com/alexeipanov/theme-miniapp</a></footer>

<style>
	.thumb {
		width: 1.5rem;
		height: 1.5rem;
		border: 1px solid #eee;
	}

	.color {
		font-family: monospace;
		color: #999;
	}

	footer {
		text-align: center;
	  padding: 1rem 0;
	}
</style>
