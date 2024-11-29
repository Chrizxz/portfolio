<title>ChrizxzFTW</title>

<script>
  import '$css/global.css';
  import '$css/colors.css';
  import '$css/index.css';
  import '$css/buttons.css';
  import Swiper from 'swiper/bundle';
  import 'swiper/css/bundle';
  import Bubbles from '../lib/components/Bubbles.svelte';
  let scroll;
  import { onMount } from 'svelte';

  onMount(() => {
    const swiperDes = new Swiper('.swiperDes', {
      direction: 'vertical',
      loop: true,
      effect: "fade",
    
      pagination: {
        el: '.swiperPageDes',
        clickable: true,
      },
    
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      
      mousewheel: true,
    });

    const swiperMob = new Swiper('.swiperMob', {
      direction: 'horizontal',
      loop: true,
      effect: "fade",
    
      pagination: {
        el: '.swiperPageMob',
        clickable: true,
      },
    
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  });
</script>

<svelte:window bind:scrollY={scroll} />

<div class="filler"></div>

<svelte:head>
  <meta name="title" content="ChrizxzFTW">
  <meta name="description" content="See all my creations, and latest work on this website!">
  <meta name="keywords" content="chrizxzftw, chriz, art, chris, chrizxz, graphics, websites">
</svelte:head>

<!-- Hero Section -->
<section id="hero">
  <div class="heroWrap">
    <div class="heroContent" style:transform={`translateY(${scroll / 1.4}px)`}>
      <div class="logo"></div>
      <h1>Ello, I'm Chriz!</h1>
      <h3>a graphic designer and web developer</h3>
      <div class="bttnWrap titleBttnWrap">
        <a href="/contact" class="bttn titleBttn" rel="noopener noreferrer" title="Contacts" aria-label="Contacts">Contacts</a>
        <a href="/about" class="bttn titleBttn" rel="noopener noreferrer" title="About Me" aria-label="About Me">About Me</a>
      </div>
    </div>
  </div>
    <span class="heroSea">
      <div class="img2"></div>
      <div class="img4"></div>
      <div class="img3"></div>
    </span>
</section> 

<!-- Wave Separator -->
<div class="img1"></div>

<div class="wrapper">
  <div class="miniWrapper">

    <div class="space"></div>

    <section id="latest">
      <div class="latestWrap">

        <div class="bubbleAmbient bub1">
          <div class="bubbleAmbient"></div>
        </div>
        <div class="bubbleAmbient bub2">
          <div class="bubbleAmbient"></div>
        </div>

        <h1 class="latestHeaderMob">Latest Works</h1>

        <div class="latestSwiperMob">
            <div class="swiperMob">
              <div class="swiper-wrapper">
                  <div class="swiper-slide" 
                    style="background-image: url('/imgs/banners/chOrg_gradient2.png')"
                  >
                  <p1>Chriz's Banner (Blue)</p1>
                  </div>
                  <div class="swiper-slide" 
                    style="background-image: url('/imgs/banners/chOrg_gradientYellow.png')"
                  >
                  <p1>Chriz's Banner (Yellow)</p1>
                  </div>
                  <div class="swiper-slide" 
                    style="background-image: url('/imgs/banners/chOrg_gradientRed.png')"
                  >
                  <p1>Chriz's Banner (Red)</p1>
                  </div>
                  <div class="swiper-slide" 
                    style="background-image: url('/imgs/banners/chOrg_gradientGreen.png')"
                  >
                  <p1>Chriz's Banner (Green)</p1>
                  </div>
              </div>
            </div>
            <div class="swiper-pagination swiperPageMob"></div>
        </div>

        <span class="latestContent">
          <h1 class="latestHeaderDes">Latest Works</h1>
          <p1>These are some of my most recent projects I've been working on!</p1>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <!-- <a href="" class="bttn normBttn single" rel="noopener noreferrer" title="Button" aria-label="Button">Button</a> -->
            <div class="availability">
              <span class="status idle"></span><b>Idle:</b>&nbsp;Busy, but still available!
            </div>
        </span>

        <div class="latestSwiperDes">
          <div class="swiper-pagination swiperPageDes"></div>
          <div class="swiperDes">
            <div class="swiper-wrapper">
              <div class="swiper-slide" 
                style="background-image: url('/imgs/banners/chOrg_gradient2.png')"
              >
              <p1>Chriz's Banner (Blue)</p1>
              </div>
              <div class="swiper-slide" 
                style="background-image: url('/imgs/banners/chOrg_gradientYellow.png')"
              >
              <p1>Chriz's Banner (Yellow)</p1>
              </div>
              <div class="swiper-slide" 
                style="background-image: url('/imgs/banners/chOrg_gradientRed.png')"
              >
              <p1>Chriz's Banner (Red)</p1>
              </div>
              <div class="swiper-slide" 
                style="background-image: url('/imgs/banners/chOrg_gradientGreen.png')"
              >
              <p1>Chriz's Banner (Green)</p1>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <div class="space"></div>

    <section id="projects">
      <div class="projectsWrap">

        <div class="bubbleAmbient bub3"></div>
        <div class="bubbleAmbient bub4">
          <div class="bubbleAmbient"></div>
        </div>

        <h1 class="projectsHeaderMob">More Projects!</h1>

        <Bubbles/>
        
        <div class="projectsContent">
          <h1 class="projectsHeaderDes">More Projects!</h1>
          <p1>I work on various graphic designs, websites, and other projects for commissions and friends, or just for fun. Click a bubble to learn more!</p1>
          <h3 id="skills">Some of my skills:</h3>
          <div class="skillsWrap">

            <div class="bubbleAmbient bubMob">
              <div class="bubbleAmbient"></div>
            </div>

            <span>
              <div class="skill" data-tooltip="Photoshop"></div>
              <div class="skill" data-tooltip="Illustrator"></div>
              <div class="skill" data-tooltip="HTML"></div>
            </span>
            <span>
              <div class="skill" data-tooltip="CSS"></div>
              <div class="skill" data-tooltip="JavaScript"></div>
              <div class="skill" data-tooltip="Node.js"></div>
            </span>
          </div>
        </div>

      </div>
    </section>

    <div class="space"></div>
    
    <section id="connect">
      <div class="connectWrap">

        <div class="bubbleAmbient bub5">
          <div class="bubbleAmbient"></div>
        </div>
        <div class="bubbleAmbient bub6">
          <div class="bubbleAmbient"></div>
        </div>
        
        <h1 class="connectHeader">Let's get connected :D</h1>

        <div class="connectContent">
          <a href="/contact" aria-label="Connect" title="Connect">
            <h2>Connect</h2>
            <div class="connectSquare"></div>
            <div class="connectSquare"></div>
          </a>
        </div>

      </div>
    </section>

  </div>
</div>