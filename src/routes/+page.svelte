<script>
  import '$css/global.css';
  import '$css/colors.css';
  import '$css/index.css';
  import '$css/buttons.css';
  let scroll;
</script>

<svelte:window bind:scrollY={scroll} />

<div class="filler"></div>

<!-- Hero Section -->
<section id="hero">
  <div class="heroWrap">
    <div class="heroContent" style:transform={`translateY(${scroll / 1.4}px)`}>
      <div class="logo"></div>
      <h1>Ello, I'm Chriz!</h1>
      <h3>a graphics designer and web developer</h3>
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
    <h1>Home</h1>
    <h3>Home Page</h3>
  </div>
</div>