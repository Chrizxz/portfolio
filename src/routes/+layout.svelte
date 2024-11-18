<script>
    import { fade } from 'svelte/transition';
	import BackToTopButton from '$lib/components/BackToTop.svelte';
	import NavigationBar from '$lib/components/NavigationBar.svelte';
    export let data;
	import '$css/global.css';
	import '$lib/global.js';
</script>

<div class="container">
	<NavigationBar/>

	<BackToTopButton/>

	<main>
		{#key data.pathname}
			<div in:fade={{ duration: 200, delay: 400 }} out:fade={{ duration: 200 }}>
				<slot />
			</div>
		{/key}
	</main>
</div>