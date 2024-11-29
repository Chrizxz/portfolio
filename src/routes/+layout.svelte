<script>
    import { fade } from 'svelte/transition';
	import BackToTopButton from '$lib/components/BackToTop.svelte';
	import NavigationBar from '$lib/components/NavigationBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
    export let data;
	import '$css/global.css';
	import '$lib/global.js';
</script>

<div class="container">
	<NavigationBar/>

	<BackToTopButton/>

	<main>
		{#key data.pathname}
			<div in:fade={{ duration: 200, delay: 400 }} out:fade={{ duration: 0 }}>
				<slot />
			</div>
		{/key}
	</main>
</div>

<Footer/>