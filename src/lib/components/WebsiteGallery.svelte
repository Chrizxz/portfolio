<script>

    export let selectedFilter = null;
    export let setWebsiteFilter = () => {};
    export let clearWebsiteFilter = () => {};

    // Website gallery data
    const websites = [
        {
            id: 1,
            title: 'Modern Portfolio',
            description: 'Responsive portfolio website',
            image: 'https://images.unsplash.com/vector-1738312919533-2bdd58425783?q=80&w=2320&auto=format&fit=crop',
            url: '/',
            tags: ['portfolio', 'design']
        },
        {
            id: 2,
            title: 'E-Commerce Platform',
            description: 'Full-featured online store',
            image: 'https://images.unsplash.com/vector-1761645078994-e7aa36f349a8?q=80&w=1212&auto=format&fit=crop',
            url: '/',
            tags: ['ecommerce', 'shop']
        },
        {
            id: 3,
            title: 'SaaS Dashboard',
            description: 'Business analytics interface',
            image: 'https://images.unsplash.com/vector-1761645078994-e7aa36f349a8?q=80&w=1212&auto=format&fit=crop',
            url: '/',
            tags: ['dashboard', 'app']
        },
        {
            id: 4,
            title: 'Creative Agency',
            description: 'Visual storytelling website',
            image: 'https://images.unsplash.com/vector-1738312919533-2bdd58425783?q=80&w=2320&auto=format&fit=crop',
            url: '/',
            tags: ['agency', 'creative']
        }
    ];

    // Extract unique tags from websites
    $: uniqueTags = [...new Set(websites.flatMap(site => site.tags))].sort();

    // Filter items based on selected tag
    $: filteredItems = selectedFilter 
        ? websites.filter(site => site.tags.includes(selectedFilter))
        : websites;

    function openWebsite(url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
</script>

<div class="websiteGalleryContainer">
    <!-- Filter Bar -->
    <div class="filterBarWrapper">
        <div class="filterBarScroll">
            <div class="filterBarContent">
                <button 
                    class="filterBtn {selectedFilter === null ? 'active' : ''}"
                    on:click={clearWebsiteFilter}
                >
                    ALL
                </button>
                {#each uniqueTags as tag (tag)}
                    <button 
                        class="filterBtn {selectedFilter === tag ? 'active' : ''}"
                        on:click={() => setWebsiteFilter(tag)}
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
            <p>No websites found with the tag "<strong>{selectedFilter}</strong>"</p>
        </div>
    {:else}
        <div class="websiteGrid">
            {#each filteredItems as site (site.id)}
                <div 
                class="websiteCard"
                on:click={() => openWebsite(site.url)}
                on:keydown={(e) => e.key === 'Enter' && openWebsite(site.url)}
                role="button"
                tabindex="0"
            >
                <div class="cardImageWrapper">
                    <img src={site.image} alt={site.title} loading="lazy" />
                    <div class="cardOverlay">
                        <i class="fa-solid fa-arrow-up-right"></i>
                    </div>
                </div>
                <div class="cardInfo">
                    <h3>{site.title}</h3>
                    <p>{site.description}</p>
                    <div class="cardTags">
                        {#each site.tags as tag}
                            <span class="smallTag">{tag}</span>
                        {/each}
                    </div>
                </div>
            </div>
        {/each}
    </div>
    {/if}
</div>

<style>
    .websiteGalleryContainer {
        width: 96%;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        align-items: center;
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
        font-weight: 400;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.3s ease;
        white-space: nowrap;
        text-transform: capitalize;
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

    .websiteGrid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2.5rem;
        width: 100%;
        max-width: 100%;
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

    .websiteCard {
        cursor: pointer;
        border-radius: 1.5rem;
        overflow: hidden;
        background: var(--glass);
        border: 1px solid var(--glassBord);
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .websiteCard:hover {
        border-color: var(--altColor);
        box-shadow: 0 10px 28px rgba(128, 204, 253, 0.15);
        transform: translateY(-6px);
    }

    .cardImageWrapper {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
    }

    .cardImageWrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .websiteCard:hover .cardImageWrapper img {
        transform: scale(1.05);
    }

    .cardOverlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 58, 146, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        font-size: 2.5rem;
        color: white;
        backdrop-filter: blur(4px);
    }

    .websiteCard:hover .cardOverlay {
        opacity: 1;
    }

    .cardInfo {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        flex-grow: 1;
    }

    .cardInfo h3 {
        margin: 0;
        color: var(--txt);
        font-size: 1.2rem;
        text-align: left;
    }

    .cardInfo p {
        margin: 0;
        color: var(--txt3);
        font-size: 0.95rem;
        line-height: 1.4;
    }

    .cardTags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: auto;
    }

    .smallTag {
        background: rgba(128, 204, 253, 0.2);
        color: var(--altColor);
        padding: 0.3rem 0.65rem;
        border-radius: 1rem;
        font-size: 0.7rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.3px;
    }

    /* Mobile Responsive */
    @media screen and (max-width: 900px) {
        .websiteGalleryContainer {
            max-width: 98%;
        }

        .websiteGrid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
        }
    }

    @media screen and (max-width: 600px) {
        .websiteGalleryContainer {
            max-width: 90%;
            padding: 0 0.5rem;
        }

        .websiteGrid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .cardInfo {
            padding: 1.2rem;
        }

        .cardInfo h3 {
            font-size: 1.1rem;
        }

        .cardInfo p {
            font-size: 0.9rem;
        }

        .cardOverlay {
            font-size: 2rem;
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
