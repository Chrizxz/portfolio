<script>
import '$css/colors.css';
import '$css/navbar.css';
import { onMount } from 'svelte';

const updateBubbleProperties = () => {
    const screenWidth = window.innerWidth;
    const container = document.querySelector(".bubbleWrap");
    const bubbles = document.querySelectorAll(".bubble");

    if (screenWidth <= 700) {
        container.style.width = "85vw";
        container.style.height = "80vw";

        bubbles.forEach(bubble => {
            const originalSize = parseInt(bubble.dataset.size, 10);
            const originalX = parseInt(bubble.dataset.x, 10);
            const originalY = parseInt(bubble.dataset.y, 10);

            const newSize = (originalSize / 600) * 100;
            const newX = (originalX / 500) * 85;
            const newY = (originalY / 500) * 85;

            bubble.style.width = `${newSize}vw`;
            bubble.style.height = `${newSize}vw`;
            bubble.style.left = `${newX}vw`;
            bubble.style.top = `${newY}vw`;
        });
    } else {
        container.style.width = "500px";
        container.style.height = "500px";

        bubbles.forEach(bubble => {
            const originalSize = parseInt(bubble.dataset.size, 10);
            const originalX = parseInt(bubble.dataset.x, 10);
            const originalY = parseInt(bubble.dataset.y, 10);

            bubble.style.width = `${originalSize}px`;
            bubble.style.height = `${originalSize}px`;
            bubble.style.left = `${originalX}px`;
            bubble.style.top = `${originalY}px`;
        });
    }
};

const setupBubbleInteractions = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 700) return;

    const bubbles = document.querySelectorAll(".bubble");

    bubbles.forEach(bubble => {
        bubble.addEventListener("mouseenter", () => {
            bubble.style.transform = "scale(1.1)";
            bubble.style.zIndex = "10";

            bubbles.forEach(otherBubble => {
                if (otherBubble !== bubble) {
                    const rect1 = bubble.getBoundingClientRect();
                    const rect2 = otherBubble.getBoundingClientRect();

                    const center1 = {
                        x: rect1.left + rect1.width / 2,
                        y: rect1.top + rect1.height / 2,
                    };
                    const center2 = {
                        x: rect2.left + rect2.width / 2,
                        y: rect2.top + rect2.height / 2,
                    };

                    const distance = Math.hypot(
                        center2.x - center1.x,
                        center2.y - center1.y
                    );

                    const combinedRadius = (rect1.width / 2) + (rect2.width / 2) + 25;

                    if (distance < combinedRadius) {
                        const angle = Math.atan2(center2.y - center1.y, center2.x - center1.x);

                        otherBubble.style.transform = `translate(${Math.cos(angle) * 20}px, ${
                            Math.sin(angle) * 20
                        }px)`;
                    }
                }
            });
        });

        bubble.addEventListener("mouseleave", () => {
            bubble.style.transform = "scale(1)";
            bubble.style.zIndex = "1";

            bubbles.forEach(otherBubble => {
                otherBubble.style.transform = "translate(0, 0)";
            });
        });
    });
};

onMount(() => {
    updateBubbleProperties();
    setupBubbleInteractions();

    window.addEventListener("resize", updateBubbleProperties);
});

</script>

<div class="bubbleWrap">
    <!-- <a href="/" style="background-image:;" aria-label="Bubble"><div class="bubble" data-x="60" data-y="90" data-size="80"></div></a> -->
    <a href="/" style="background-image:;" aria-label="Bubble"><div class="bubble" data-x="50" data-y="50" data-size="250"></div></a>
    <a href="/" style="background-image:;" aria-label="Bubble"><div class="bubble" data-x="310" data-y="40" data-size="150"></div></a>
    <!-- <a href="/" style="background-image:;" aria-label="Bubble"><div class="bubble" data-x="0" data-y="190" data-size="150"></div></a> -->
    <a href="/" style="background-image:;" aria-label="Bubble"><div class="bubble" data-x="60" data-y="310" data-size="80"></div></a>
    <a href="/" style="background-image:;" aria-label="Bubble"><div class="bubble" data-x="170" data-y="310" data-size="150"></div></a>
    <a href="/" style="background-image:;" aria-label="Bubble"><div class="bubble" data-x="300" data-y="210" data-size="125"></div></a>
</div>
  
<style>
.bubbleWrap {
    position: relative;
    margin: 0 30px;
}

.bubble {
    position: absolute;
    background-color: #fff;
    border-radius: 100%;
    transition: transform 0.3s ease, z-index 0.3s ease;
    border: 4px solid var(--altColor);
}

@media screen and (max-width: 700px) {
    .bubbleWrap {
        margin: 0 1rem;
    }
}
</style>