<title>Contact | Chriz</title>

<script>
  import '$css/global.css';
  import '$css/contact.css';
  import DiscordButton from '../../lib/components/DiscordButton.svelte';
  import EmailButton from '../../lib/components/EmailButton.svelte';
</script>

<!-- <div style="padding-top: 20vh;padding-bottom: 100vh;">
  <h1>wanna contact me?</h1>
  <h2>Contact Page</h2>
</div> -->

<section>

  <span class="circleBg"></span>
  <div class="contactBgWrap">
    <div class="contactBgWords">
      <span class="bgText">
        <span class="waveLetter" style="animation-delay: 1.6s;">c</span>
        <span class="waveLetter" style="animation-delay: 1.4s;">o</span>
        <span class="waveLetter" style="animation-delay: 1.2s;">n</span>
        <span class="waveLetter" style="animation-delay: 1s;">t</span>
        <span class="waveLetter" style="animation-delay: 0.8s;">a</span>
        <span class="waveLetter" style="animation-delay: 0.6s;">c</span>
        <span class="waveLetter" style="animation-delay: 0.4s;">t</span>
        <span class="waveLetter" style="animation-delay: 0.2s;">&nbsp;</span>
        <span class="waveLetter" style="animation-delay: 0.2s;">m</span>
        <span class="waveLetter" style="animation-delay: 0s;">e</span>
      </span>
      <span class="bgText">
        <span class="waveLetter" style="animation-delay: 1.6s;">c</span>
        <span class="waveLetter" style="animation-delay: 1.4s;">o</span>
        <span class="waveLetter" style="animation-delay: 1.2s;">n</span>
        <span class="waveLetter" style="animation-delay: 1s;">t</span>
        <span class="waveLetter" style="animation-delay: 0.8s;">a</span>
        <span class="waveLetter" style="animation-delay: 0.6s;">c</span>
        <span class="waveLetter" style="animation-delay: 0.4s;">t</span>
        <span class="waveLetter" style="animation-delay: 0.2s;">&nbsp;</span>
        <span class="waveLetter" style="animation-delay: 0.2s;">m</span>
        <span class="waveLetter" style="animation-delay: 0s;">e</span>
      </span>
    </div>
  </div>

  <div class="contactParent">
    <div class="contactWrap">
      <div class="contactImg">
        <img src="/imgs/chOrg_3d.png" alt="Contact Me!" />
      </div>
      <div class="contactMe">
        <div class="contactModal">
          <h1 style:text-align={'left'}>Contact Me</h1>
          <p1>
            If you have any questions, feedback, or just want to say hi, feel free to reach out!
          </p1>
        </div>
        <div class="contactModal">
          <DiscordButton/>
          <EmailButton/>
        </div>
      </div>
    </div>
  </div>
    
    
  
</section>