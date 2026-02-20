<title>Projects | Chriz</title>

<script>
    import '$css/global.css';
    import '$css/colors.css';
    import '$css/buttons.css';
    import '$css/projects.css';
    import LogoBannerGallery from '$lib/components/LogoBannerGallery.svelte';
    import WebsiteGallery from '$lib/components/WebsiteGallery.svelte';
	import { onMount } from 'svelte';
    
    let scroll;
    let selectedLogoFilter = null;
    let selectedWebsiteFilter = null;

    onMount(() => {
        // Check for filter in URL hash
        const hash = window.location.hash;
        if (hash.includes('logoFilter=')) {
            const logoTag = hash.split('logoFilter=')[1].split('&')[0];
            if (logoTag) {
                selectedLogoFilter = logoTag;
            }
        }
        if (hash.includes('websiteFilter=')) {
            const websiteTag = hash.split('websiteFilter=')[1].split('&')[0];
            if (websiteTag) {
                selectedWebsiteFilter = websiteTag;
            }
        }

        // Listen for hash changes
        const handleHashChange = () => {
            const hash = window.location.hash;
            selectedLogoFilter = null;
            selectedWebsiteFilter = null;
            
            if (hash.includes('logoFilter=')) {
                const logoTag = hash.split('logoFilter=')[1].split('&')[0];
                if (logoTag) {
                    selectedLogoFilter = logoTag;
                }
            }
            if (hash.includes('websiteFilter=')) {
                const websiteTag = hash.split('websiteFilter=')[1].split('&')[0];
                if (websiteTag) {
                    selectedWebsiteFilter = websiteTag;
                }
            }
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    });

    function setLogoFilter(tag) {
        selectedLogoFilter = tag;
        updateHash();
    }

    function clearLogoFilter() {
        selectedLogoFilter = null;
        updateHash();
    }

    function setWebsiteFilter(tag) {
        selectedWebsiteFilter = tag;
        updateHash();
    }

    function clearWebsiteFilter() {
        selectedWebsiteFilter = null;
        updateHash();
    }

    function updateHash() {
        let hash = '';
        if (selectedLogoFilter) {
            hash += `logoFilter=${selectedLogoFilter}`;
        }
        if (selectedWebsiteFilter) {
            hash += (hash ? '&' : '') + `websiteFilter=${selectedWebsiteFilter}`;
        }
        window.location.hash = hash;
    }
</script>

<svelte:head>
    <meta name="title" content="Projects | Chriz">
    <meta name="description" content="Explore my latest projects including logos, banners, and websites!">
    <meta name="keywords" content="chrizxzftw, projects, portfolio, logos, websites">
</svelte:head>

<svelte:window bind:scrollY={scroll} />

<h1 class="title" 
style:transform={`translate3d(0, ${scroll / 1.4}px, 0)`} style="will-change: transform;">PROJECTS</h1>
<!-- <div style="padding-top: 20vh; padding-bottom: 2vh;">
    <h3>Explore my creative work</h3>
</div> -->

<section id="logoSection" class="gallerySection">
    <div class="sectionHeader">
        <div>
            <h2>Logos & Banners</h2>
            <p1>a curated mix of logos and designs</p1>
        </div>
        <div class="secBubble"></div>
    </div>
    <LogoBannerGallery selectedFilter={selectedLogoFilter} {setLogoFilter} {clearLogoFilter} />
</section>

<div style="padding-bottom: 15vh;"></div>

<section id="websiteSection" class="gallerySection">
    <div class="sectionHeader">
        <div>
            <h2>Web Projects</h2>
            <p1>a collection of fluid responsive interfaces</p1>
        </div>
        <div class="secBubble"></div>
    </div>
    <WebsiteGallery selectedFilter={selectedWebsiteFilter} {setWebsiteFilter} {clearWebsiteFilter} />
</section>

<div style="padding-bottom: 10vh;"></div>

<svg width="0" height="0" style="position:absolute">
  <defs>
    <filter id="dissolve">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" result="noise"/>
      <feColorMatrix type="matrix" 
        values="0 0 0 0 0
                0 0 0 0 0
                0 0 0 0 0
                0 0 0 -13 6" 
        in="noise" result="mask"/>
      <feComposite in="SourceGraphic" in2="mask" operator="in"/>
    </filter>
  </defs>
</svg>
