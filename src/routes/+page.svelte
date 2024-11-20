<script>
  import '$css/global.css';
  import '$css/colors.css';
  import '$css/index.css';
  import '$css/buttons.css';
  import Swiper from 'swiper/bundle';
  import 'swiper/css/bundle';
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

        <div class="bubble bub1">
          <div class="bubble"></div>
        </div>
        <div class="bubble bub2">
          <div class="bubble"></div>
        </div>

        <div class="latestSwiperMob">
            <div class="swiperMob">
              <div class="swiper-wrapper">
                  <div class="swiper-slide" 
                  style="background-image: url('/imgs/banners/chOrg_gradient2.png')"
                  >
                  <p1>Chriz's Banner (Blue!)</p1>
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
          <h1>Latest Work</h1>
          <p1>These are some of my most recent projects</p1>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <a href="" class="bttn normBttn single" rel="noopener noreferrer" title="Button" aria-label="Button">Button</a>
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
  </div>
</div>