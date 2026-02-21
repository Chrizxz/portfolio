<script>
    import { onMount } from 'svelte';

    export let selectedFilter = null;
    export let setLogoFilter = () => {};
    export let clearLogoFilter = () => {};
    
    /*
    tags
    ---
    branding
    gaming
    logo
    banner
    combination
    abstract
    lettermark
    wordmark
    pictorial
    emblem
    illustrative
    other
    */

    // Gallery data structure
    const galleryItems = [
        {
            id: 1,
            src: 'imgs/logos/wavifyLight.png',
            alt: 'Wavify Music Logo (Light)',
            title: 'Wavify Music Light Logo',
            tags: ['branding', 'logo', 'lettermark']
        },
        {
            id: 2,
            src: 'imgs/banners/localVineRetail.png',
            alt: 'Local Vine Retail Design',
            title: 'Local Vine Retail Design',
            tags: ['branding', 'banner', 'combination']
        },
        {
            id: 3,
            src: 'imgs/logos/arkLogo.png',
            alt: 'Ark User Logo',
            title: 'Ark User Logo',
            tags: ['branding', 'logo', 'combination']
        },
        {
            id: 4,
            src: 'imgs/logos/atnipLogoRedPrint2.png',
            alt: 'Atnip Construction Redprint Design',
            title: 'Atnip Construction Redprint Design',
            tags: ['branding', 'logo', 'combination']
        },
        {
            id: 5,
            src: 'imgs/banners/managerMonopoly_redone_Banner.png',
            alt: 'Manager Monopoly Server Banner',
            title: 'Manager Monopoly Server Banner',
            tags: ['gaming', 'banner', 'combination']
        },
        {
            id: 6,
            src: 'imgs/logos/sys8_blue.png',
            alt: 'SystemEight User Logo',
            title: 'System8 User Logo',
            tags: ['branding', 'logo', 'lettermark']
        },
        {
            id: 7,
            src: 'imgs/logos/stellapen2.png',
            alt: 'Stellapen Geometric Design',
            title: 'Stellapen Geometric Design',
            tags: ['other', 'abstract']
        },
        {
            id: 8,
            src: 'imgs/logos/dwaaLogo2.png',
            alt: 'DWAA User Logo',
            title: 'DWAA User Logo',
            tags: ['branding', 'logo', 'combination']
        },
        {
            id: 9,
            src: 'imgs/banners/pulsBanner.png',
            alt: 'Puls. Discord Banner',
            title: 'Puls. Discord Banner',
            tags: ['other', 'banner', 'combination']
        },
        {
            id: 10,
            src: 'imgs/logos/poopsmp.png',
            alt: 'PoopSMP Server Logo',
            title: 'PoopSMP Server Logo',
            tags: ['gaming', 'logo', 'pictorial']
        },
        {
            id: 11,
            src: 'imgs/logos/wordlerDiscord.png',
            alt: 'Wordler Discord Logo',
            title: 'Wordler Discord Logo',
            tags: ['gaming', 'logo', 'pictorial']
        },
        {
            id: 12,
            src: 'imgs/logos/chOrg_vaporwave.png',
            alt: 'Vaporwave Logo',
            title: 'Vaporwave Logo',
            tags: ['branding', 'logo', 'lettermark']
        },
        {
            id: 13,
            src: 'imgs/logos/gxGmail.png',
            alt: 'Gmail Logo Stylized',
            title: 'Gmail Logo Stylized',
            tags: ['other', 'logo', 'lettermark']
        },
        {
            id: 14,
            src: 'imgs/banners/bapSauceBanner.png',
            alt: 'Bapplesauce Discord Banner',
            title: 'Bapplesauce Discord Banner',
            tags: ['gaming', 'banner', 'combination']
        },
        {
            id: 15,
            src: 'imgs/banners/poetryXmas_banner2.png',
            alt: 'Art of Poetry Discord Banner',
            title: 'Art of Poetry Discord Banner',
            tags: ['other', 'banner', 'combination']
        },
        {
            id: 16,
            src: 'imgs/illustrative/wordlerLogo.png',
            alt: 'Wordler Logo',
            title: 'Wordler Logo',
            tags: ['gaming', 'logo', 'illustrative']
        },
        {
            id: 17,
            src: 'imgs/illustrative/cltLogo_blueRedGun_draft.png',
            alt: 'Lasertag Logo Design',
            title: 'Charged Lasertag Design',
            tags: ['gaming', 'logo', 'illustrative']
        },
        {
            id: 18,
            src: 'imgs/illustrative/lunesAstroObjects.png',
            alt: 'Lunes Astronaut Design',
            title: 'Lunes Astronaut Design',
            tags: ['other', 'illustrative']
        },
        {
            id: 19,
            src: 'imgs/illustrative/shadowEmblem.png',
            alt: 'Lord Shadow Design',
            title: 'Lord Shadow Design',
            tags: ['gaming', 'logo', 'illustrative', 'pictorial']
        },
        {
            id: 20,
            src: 'imgs/illustrative/yousif.png',
            alt: 'Yousif User Logo',
            title: 'Yousif User Logo',
            tags: ['branding', 'logo', 'illustrative', 'pictorial']
        }
    ];

    let selectedItem = null;
    let scrollContainer;

    // Extract unique tags from gallery items
    $: uniqueTags = [...new Set(galleryItems.flatMap(item => item.tags))].sort();

    // Filter items based on selected tag
    $: filteredItems = selectedFilter 
        ? galleryItems.filter(item => item.tags.includes(selectedFilter))
        : galleryItems;

    onMount(() => {
        const handleKeydown = (e) => {
            if (e.key === 'Escape' && selectedItem) {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    });

    function openModal(item) {
        selectedItem = item;
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        selectedItem = null;
        document.body.style.overflow = 'auto';
    }

    function handleBackdropClick(e) {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }

    function scrollGallery(direction) {
        if (scrollContainer) {
            const scrollAmount = 320; // card width + gap
            scrollContainer.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    }
</script>

<div class="logoBannerGalleryContainer">
    <!-- Filter Bar -->
    <div class="filterBarWrapper">
        <div class="filterBarScroll">
            <div class="filterBarContent">
                <button 
                    class="filterBtn {selectedFilter === null ? 'active' : ''}"
                    on:click={clearLogoFilter}
                >
                    All
                </button>
                {#each uniqueTags as tag (tag)}
                    <button 
                        class="filterBtn {selectedFilter === tag ? 'active' : ''}"
                        on:click={() => setLogoFilter(tag)}
                    >
                        {tag.toUpperCase()}
                    </button>
                {/each}
            </div>
        </div>
    </div>

    {#if filteredItems.length === 0}
        <div class="noResults">
            <i class="fa-solid fa-magnifying-glass"></i>
            <p>No items found with the tag "<strong>{selectedFilter}</strong>"</p>
        </div>
    {:else}
        <div class="galleryWrapper">
            {#if filteredItems.length > 3}
                <button class="scrollBtn scrollBtn-left" on:click={() => scrollGallery('left')} aria-label="Scroll left">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
            {/if}
            
            <div class="galleryScroll" bind:this={scrollContainer}>
                <div class="galleryGrid">
                    {#each filteredItems as item (item.id)}
                        <div 
                            class="galleryItem" 
                            on:click={() => openModal(item)}
                            on:keydown={(e) => e.key === 'Enter' && openModal(item)}
                            role="button"
                            tabindex="0"
                        >
                        <div class="itemImageWrapper">
                            <img src={item.src} alt={item.alt} loading="lazy" />
                            <div class="itemOverlay">
                                <div class="overlayContent">
                                    <h3>{item.title}</h3>
                                    <div class="tagsList">
                                        {#each item.tags as tag}
                                            <span class="tag">{tag}</span>
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
                </div>
            </div>

            {#if filteredItems.length > 3}
                <button class="scrollBtn scrollBtn-right" on:click={() => scrollGallery('right')} aria-label="Scroll right">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            {/if}
        </div>
    {/if}

    {#if selectedItem}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div 
            class="modalBackdrop" 
            on:click={handleBackdropClick}
            role="button"
            tabindex="-1"
        >
            <div class="modalContent">
                <button class="closeBtn" on:click={closeModal} aria-label="Close modal">
                    <i class="fa-sharp fa-solid fa-xmark"></i>
                </button>
                <img src={selectedItem.src} alt={selectedItem.alt} />
                <div class="modalInfo">
                    <h2>{selectedItem.title}</h2>
                    <div class="tagsList">
                        {#each selectedItem.tags as tag}
                            <span class="tag">{tag}</span>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div><style>
    .logoBannerGalleryContainer {
        width: 96%;
        max-width: 1200px;
    }

    .filterBarWrapper {
        width: 100%;
        margin-bottom: 2rem;
    }

    .filterBarScroll {
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: thin;
        scrollbar-color: var(--txt2) transparent;
    }

    .filterBarScroll::-webkit-scrollbar {
        height: 4px;
    }

    .filterBarScroll::-webkit-scrollbar-track {
        background: transparent;
    }

    .filterBarScroll::-webkit-scrollbar-thumb {
        background: var(--txt2);
        border-radius: 2px;
    }

    .filterBarContent {
        display: flex;
        gap: 0.75rem;
        min-width: min-content;
        padding: 0.5rem 0;
    }

    .filterBtn {
        padding: 0.5rem 1.2rem;
        background: rgba(128, 204, 253, 0.1);
        border: 1px solid var(--glassBord);
        border-radius: 1.5rem;
        color: var(--txt);
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.3s ease;
        white-space: nowrap;
        text-transform: capitalize;
        backdrop-filter: blur(5px);
    }

    .filterBtn:hover {
        background: var(--glassHov);
        transform: translateY(-2px);
    }

    .filterBtn.active {
        background: var(--txt2);
        color: var(--bg);
        border-color: var(--txt2);
    }

    .galleryWrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
        position: relative;
    }

    .galleryScroll {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        -ms-overflow-style: none;
        flex: 1;
    }

    .galleryScroll::-webkit-scrollbar {
        display: none;
    }

    .galleryGrid {
        display: grid;
        grid-auto-flow: column;
        grid-template-rows: 1fr;
        gap: 2rem;
        padding: 0.5rem 0;
        width: fit-content;
    }

    .noResults {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 4rem 2rem;
        text-align: center;
        color: var(--txt3);
    }

    .noResults i {
        font-size: 3rem;
        margin-bottom: 1rem;
        opacity: 0.5;
    }

    .noResults p {
        font-size: 1.1rem;
    }

    .noResults strong {
        color: var(--altColor);
    }

    .galleryItem {
        cursor: pointer;
        border-radius: 1.5rem;
        overflow: hidden;
        background: var(--glass);
        border: 1px solid var(--glassBord);
        transition: all 0.3s ease;
        position: relative;
        flex-shrink: 0;
        width: 280px;
        height: 280px;
    }

    .galleryItem:hover {
        transform: translateY(-8px);
        border-color: var(--primColor);
        box-shadow: 0 12px 32px rgba(0, 154, 252, 0.2);
    }

    .itemImageWrapper {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .itemImageWrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .galleryItem:hover .itemImageWrapper img {
        transform: scale(1.08);
    }

    .itemOverlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(0, 58, 146, 0.85) 0%, rgba(0, 135, 255, 0.7) 100%);
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        padding: 1.5rem;
        backdrop-filter: blur(4px);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .galleryItem:hover .itemOverlay {
        opacity: 1;
    }

    .overlayContent {
        width: 100%;
    }

    .overlayContent h3 {
        color: white;
        margin: 0 0 0.75rem 0;
        font-size: 1.2rem;
        word-wrap: break-word;
        text-align: left;
    }

    .tagsList {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .scrollBtn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid var(--glassBord);
        color: var(--txt);
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        z-index: 10;
        backdrop-filter: blur(5px);
        flex-shrink: 0;
    }

    .scrollBtn:hover {
        background: var(--glassHov);
        transform: translateY(-50%) scale(1.1);
    }

    .scrollBtn-left {
        left: 0;
    }

    .scrollBtn-right {
        right: 0;
    }

    .tag {
        background: rgba(255, 255, 255, 0.2);
        color: var(--txt3);
        padding: 0.35rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    /* Modal Styles */
    .modalBackdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 11, 32, 0.75);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
        padding: 1rem;
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .modalContent {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
        background: rgba(0, 52, 146, 0.3);
        border: 1px solid var(--glassBord);
        border-radius: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        backdrop-filter: blur(16px);
        box-shadow: 0 8px 50px 8px rgba(0, 154, 252, 0.15);
        animation: slideUp 0.3s ease;
    }

    @keyframes slideUp {
        from {
            transform: translateY(30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .modalContent img {
        max-width: 100%;
        max-height: 60vh;
        border-radius: 1.5rem;
        object-fit: contain;
    }

    .modalInfo {
        text-align: center;
        width: 100%;
    }

    .modalInfo h2 {
        color: var(--txt);
        margin-bottom: 1rem;
    }

    .modalInfo .tagsList {
        justify-content: center;
    }

    .closeBtn {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background: rgba(191, 216, 255, .15);
        border: 1px solid var(--txt3);
        color: var(--txt3);
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        z-index: 101;
        backdrop-filter: blur(5px);
    }

    .closeBtn:hover {
        background: rgba(191, 216, 255, .3);
        transform: scale(1.1);
    }

    /* Mobile Responsive */
    @media screen and (max-width: 900px) {
        .logoBannerGalleryContainer {
            max-width: 98%;
        }

        .galleryItem {
            width: 240px;
            height: 240px;
        }

        .scrollBtn {
            width: 2.2rem;
            height: 2.2rem;
            font-size: 0.9rem;
        }

        .modalContent {
            padding: 1.5rem;
            border-radius: 1.5rem;
        }

        .modalContent img {
            max-height: 50vh;
        }

        .closeBtn {
            width: 2.5rem;
            height: 2.5rem;
            font-size: 1.2rem;
            top: 1rem;
            right: 1rem;
        }
    }

    @media screen and (max-width: 600px) {
        .logoBannerGalleryContainer {
            max-width: 90%;
        }

        .galleryItem {
            width: 200px;
            height: 200px;
        }

        .galleryGrid {
            gap: 1rem;
        }

        .itemOverlay {
            padding: 1rem;
        }

        .overlayContent h3 {
            font-size: 1rem;
            margin-bottom: 0.5rem;
        }

        .tag {
            padding: 0.25rem 0.5rem;
            font-size: 0.65rem;
        }

        .scrollBtn {
            width: 2rem;
            height: 2rem;
            font-size: 0.8rem;
        }

        .modalBackdrop {
            padding: 0.5rem;
        }

        .modalContent {
            padding: 1rem;
            gap: 1rem;
        }

        .modalContent img {
            max-height: 40vh;
        }

        .modalInfo h2 {
            font-size: 1.2rem;
            margin-bottom: 0.75rem;
        }

        .noResults {
            padding: 3rem 1rem;
        }

        .noResults i {
            font-size: 2rem;
        }

        .noResults p {
            font-size: 1rem;
        }
    }
</style>
