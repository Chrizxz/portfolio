<script>
    import '$css/colors.css';
    import { onMount, onDestroy } from 'svelte';

    let emSpotEl;
    let glowEl;
    let cleanup;

    onMount(() => {
        emSpotEl = document.querySelector(".emSpot");
        glowEl = emSpotEl?.querySelector(".emSpotGlow");
        if (!emSpotEl || !glowEl) return;

        function handleMouseMove(event) {
            const rect = emSpotEl.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            emSpotEl.style.setProperty('--x', `${x}px`);
            emSpotEl.style.setProperty('--y', `${y}px`);
            glowEl.style.opacity = '1';
        }

        function handleMouseLeave() {
            glowEl.style.opacity = '0';
        }

        emSpotEl.addEventListener("mousemove", handleMouseMove);
        emSpotEl.addEventListener("mouseleave", handleMouseLeave);

        cleanup = () => {
            emSpotEl.removeEventListener("mousemove", handleMouseMove);
            emSpotEl.removeEventListener("mouseleave", handleMouseLeave);
        };
    });

    onDestroy(() => {
        if (cleanup) cleanup();
    });
</script>

<a class="emSpot" href="mailto:contact@chrizxz.com">
    <div class="emSpotGlow" aria-hidden="true"></div>
    <span class="emSpotTxt">
        <i class="fa-solid fa-envelope"></i>
        <span>Email</span>
    </span>
</a>

<style>
    .emSpot {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        /* width: 10rem;
        height: 20rem; */
        flex: 1;
        border: 1px solid var(--glass);
        border-radius: 1rem;
        overflow: hidden;
        background-color: #00000088; /* 88 */
    }
    
    .emSpotGlow {
        position: absolute;
        inset: 0;
        pointer-events: none;
        opacity: 0;
        transition: opacity 320ms ease, background-position 120ms linear;
        z-index: 1;
        background: radial-gradient(
            circle at var(--x, 50%) var(--y, 50%),
            rgba(255, 255, 255, 0.25) 40px,
            rgba(255,255,255,0) 250px
        );
    }
    
    .emSpot::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-25%, 50%);
        width: 200%;
        height: 100%;
        border-radius: 100%;
        /* background-color: var(--txt3); */
        background: linear-gradient(180deg,#ffffff59 0%, rgba(255, 255, 255, 0) 50%);
        /* backdrop-filter: blur(2px); */
    }
    
    .emSpot > *:not(.emSpotGlow) {
        position: relative;
        z-index: 2;
    }
    
    .emSpotTxt {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        font-family: 'baloo';
        color: var(--txt2);
    }

    .emSpotTxt i {
        margin-bottom: 1rem;
        font-size: 4rem;
    }
</style>