<title>About Me | Chriz</title>

<script>
  import '$css/global.css';
  import '$css/colors.css';
  import '$css/buttons.css';
  import '$css/about.css';
  import Profile from '$lib/components/Profile.svelte'
  import CarouselSmall from '$lib/components/CarouselSmall.svelte'
  import { onMount } from 'svelte';
  let scroll2 = 0;
  let opacity = 0;
</script>

<svelte:head>
  <meta name="title" content="About Me | Chriz">
  <meta name="description" content="See all my creations, and latest work on this website!">
  <meta name="keywords" content="chrizxzftw, chriz, art, chris, chrizxz, graphics, websites">
</svelte:head>

<svelte:window bind:scrollY={scroll2} />

<div class="headFiller"></div>

<section id="about">
  <div class="aboutWrap">
    <div>
      <h2>ChrizxzFTW</h2>
      <p1>
        I'm a passionate graphic designer and web developer with a
        keen eye for detail and a love for creating visually
        stunning and user-friendly designs.
      </p1>
      <CarouselSmall/>
    </div>
    <Profile/>
  </div>
</section>

<section id="more">
  <div class="moreWrap">
    <div class="stickyContainer">
      <div class="logoBg">
        <img src="imgs/logoBg.svg" alt="logobg">
      </div>
    </div>
  
    <div class="contentContainer">
      <div class="contentBlock">
        <h2>My Design Philosophy</h2>
        <p>I believe in creating designs that not only look beautiful but also serve a purpose. Every element in my designs is carefully considered, ensuring a perfect balance between aesthetics and functionality.</p>
      </div>
  
      <div class="contentBlock">
        <h2>Technical Skills</h2>
        <p>With expertise in various design tools and programming languages, I'm capable of bringing ideas to life from concept to completion. My toolkit includes Adobe Creative Suite, HTML/CSS, JavaScript, Svelte, and more.</p>
      </div>
  
      <div class="contentBlock">
        <h2>Work Experience</h2>
        <p>Throughout my career, I've collaborated with diverse clients, from startups to established companies. Each project has enriched my skills and broadened my perspective on effective design solutions.</p>
      </div>
  
      <div class="contentBlock">
        <h2>My Approach</h2>
        <p>I approach each project with enthusiasm and dedication, focusing on understanding client needs and delivering solutions that exceed expectations. Communication and collaboration are at the heart of my work process.</p>
      </div>
    </div>
  </div>
</section>

<section id="prof">
  <h1>Profiles</h1>
  <div class="profWrap">
    <div class="profContainer">
      <div class="diagProf">
        <!-- <img src="imgs/chlogo.svg" alt="logo"/> -->
        <div class="circle"></div>
        <p1>
          idk bro
        </p1>
      </div>
      <div class="diagProf">
        <!-- <img src="imgs/chlogo.svg" alt="logo"/> -->
        <div class="circle"></div>
        <p1>
          idk bro idk bro
        </p1>
      </div>
      <div class="diagProf">
        <!-- <img src="imgs/chlogo.svg" alt="logo"/> -->
        <div class="circle"></div>
        <p1>
          idk bro idk bro
        </p1>
      </div>
    </div>
    <div class="profContainer">
      <div class="diagProf">
        <!-- <img src="imgs/chlogo.svg" alt="logo"/> -->
        <div class="circle"></div>
        <p1>
          idk bro idk bro
        </p1>
      </div>
      <div class="diagProf">
        <!-- <img src="imgs/chlogo.svg" alt="logo"/> -->
        <div class="circle"></div>
        <p1>
          idk bro idk bro
        </p1>
      </div>
      <div class="diagProf">
        <!-- <img src="imgs/chlogo.svg" alt="logo"/> -->
        <div class="circle"></div>
        <p1>
          idk bro idk bro
        </p1>
      </div>
    </div>
  </div>
</section>

<div class="space sp1"></div>
