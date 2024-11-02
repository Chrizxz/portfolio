<script>
    import { fade } from 'svelte/transition';
    export let data;
</script>


<main>
    {#key data.pathname}
        <div in:fade={{ duration: 200, delay: 400 }} out:fade={{ duration: 200 }}>
            <slot />
        </div>
    {/key}
</main>