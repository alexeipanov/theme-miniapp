<script>
	import { onMount } from 'svelte';
	import { kebabCase } from 'lodash-es';
	import { on } from '@telegram-apps/sdk';

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

		MiniApp.onEvent('theme_changed', function() {
			console.log('theme changed');
		  const element = document.querySelector('html');
		  console.log(MiniApp.themeParams());
	    colors = getColors(element);
	    console.log(colors);
	    colors = Object.values(event.theme_params);
		});

		MiniApp.onEvent('ready', function() {
			console.log('ready');
		  const element = document.querySelector('html');
		  console.log(MiniApp.themeParams());
	    colors = getColors(element);
	    
		});

		on('ready', (event) => {
			console.log('ready2');
	    colors = Object.values(event.theme_params);
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
</style>
