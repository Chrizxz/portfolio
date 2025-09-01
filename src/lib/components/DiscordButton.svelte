<script>
    import '$css/colors.css';
    import { onMount, onDestroy } from 'svelte';

    let disSpotEl;
    let glowEl;
    let cleanup;

    onMount(() => {
        disSpotEl = document.querySelector(".disSpot");
        glowEl = disSpotEl?.querySelector(".disSpotGlow");
        if (!disSpotEl || !glowEl) return;

        function handleMouseMove(event) {
            const rect = disSpotEl.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            disSpotEl.style.setProperty('--x', `${x}px`);
            disSpotEl.style.setProperty('--y', `${y}px`);
            glowEl.style.opacity = '1';
        }

        function handleMouseLeave() {
            glowEl.style.opacity = '0';
        }

        disSpotEl.addEventListener("mousemove", handleMouseMove);
        disSpotEl.addEventListener("mouseleave", handleMouseLeave);

        cleanup = () => {
            disSpotEl.removeEventListener("mousemove", handleMouseMove);
            disSpotEl.removeEventListener("mouseleave", handleMouseLeave);
        };
    });

    onDestroy(() => {
        if (cleanup) cleanup();
    });
</script>

<a class="disSpot" href="https://dsc.gg/chriz   ">
    <div class="disSpotGlow" aria-hidden="true"></div>
    <span class="disSpotTxt">
        <i class="fab fa-discord"></i>
        <span>Discord</span>
    </span>
</a>

<style>
    .disSpot {
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
        background-color: #2932b088; /* 88 */
    }
    
    .disSpotGlow {
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
    
    .disSpot::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-25%, 50%);
        width: 200%;
        height: 100%;
        border-radius: 100%;
        /* background-color: var(--txt3); */
        background: linear-gradient(180deg,#5966f359 0%, rgba(255, 255, 255, 0) 50%);
        /* backdrop-filter: blur(2px); */
        
        z-index: 0;
    }
    
    .disSpot > *:not(.disSpotGlow) {
        position: relative;
        z-index: 2;
    }
    
    .disSpotTxt {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        font-family: 'baloo';
        color: var(--txt2);
    }

    .disSpotTxt i {
        margin-bottom: 1rem;
        font-size: 4rem;
    }
    
@media (max-width: 1030px) {
        .disSpot {
            height: 14rem;
        }
    }

    @media (max-width: 768px) {
        .disSpotTxt {
            font-size: 1rem;
        }

        .disSpotTxt i {
            font-size: 2.5rem;
        }

        .disSpot {
            width: 8rem;
            height: 16rem;
        }
    }
</style>