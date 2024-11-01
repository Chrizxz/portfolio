<script>
	import { fade } from 'svelte/transition';

	export let data;
</script>

{#key data.pathname}
	<div in:fade={{ duration: 200, delay: 600 }} out:fade={{ duration: 200 }}>
		<slot />
	</div>
{/key}