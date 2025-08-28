<div class="techCarouselContainer">
    <div class="techCarousel">
        <div class="carouselTrack">
        {#each ['JavaScript', 'Svelte', 'Node.js', 'Python', 'CSS', 'HTML', 'TailwindCSS', 'MongoDB', 'Illustrator', 'Photoshop', 'Figma'] as tech}
            <div class="carouselItem">
            <span>{tech}</span>
            </div>
        {/each}
        <!-- dupe items for infinite scroll -->
        {#each ['JavaScript', 'Svelte', 'Node.js', 'Python', 'CSS', 'HTML', 'TailwindCSS', 'MongoDB', 'Illustrator', 'Photoshop', 'Figma'] as tech}
            <div class="carouselItem">
            <span>{tech}</span>
            </div>
        {/each}
        </div>
    </div>
</div>

<style>
    .techCarouselContainer {
        width: 35rem;
        overflow: hidden;
        margin: 2rem 0;
        position: relative;
    }
  
    .techCarouselContainer::before,
    .techCarouselContainer::after {
        content: "";
        position: absolute;
        top: 0;
        width: 4rem;
        height: 100%;
        z-index: 2;
        pointer-events: none;
    }
  
    .techCarouselContainer::before {
        left: 0;
        background: linear-gradient(to right, #000b20 0%, #000b2000 100%);
    }

    .techCarouselContainer::after {
        right: 0;
        background: linear-gradient(to left, #000b20 0%, #000b2000 100%);
    }

    .techCarousel {
        position: relative;
    }
  
    .carouselTrack {
        display: flex;
        animation: scroll 30s linear infinite;
        width: fit-content;
    }
  
    .carouselItem {
        flex-shrink: 0;
        margin: 1.5rem 0.3rem;
        padding: .4rem 1.7rem;
        /* background-color: var(--primColor2); */
        color: var(--primColor);
        border-radius: 1.5rem;
        border: .1rem solid var(--primColor);
        background: rgba(255, 255, 255, 0.1);
        border-radius: 20rem;
        /* box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2), 
                    inset 0 4px 20px rgba(38, 111, 246, 0.2); */
        /* box-shadow: inset 0 4px 20px rgba(38, 111, 246, 0.5); */
        white-space: nowrap;
    }
  
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
  
    .carouselTrack:hover {
        animation-play-state: paused;
    }

    @media only screen and (max-width: 700px) {
        .techCarouselContainer {
            width: 80vw;
            overflow: hidden;
            margin: 2rem 0;
            position: relative;
        }
    }
</style>