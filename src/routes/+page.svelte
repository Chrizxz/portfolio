<script>
  import '$css/global.css';
  import '$css/colors.css';
  let scroll;
</script>

<svelte:window bind:scrollY={scroll} />

<section class="hero">
  <div class="img1" ></div>
  <span class="heroWrap">
    <div class="logo" style:transform={`translateY(${scroll / 1.8}px)`}></div>
    <div class="img2" ></div>
    <div class="img4" ></div>
    <div class="img3" ></div>
  </span>

  <style>
    .hero {
      position: relative;
      height: 95vh;
      width: 100%;
      overflow: hidden;
    }

    .heroWrap {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      height: 100vh;
      width: 100vw;
      position: relative;
      overflow: hidden !important;
      transform: scale(1.1);
      transform-origin: bottom center;
      position: fixed;
      z-index: -1;
    }

    .logo {
      background-image: url('imgs/chlogo.svg');
      background-size: contain;
      background-repeat: no-repeat;
      margin-top:50px;
      width: 450px;
      height: 450px;
      z-index: -2;
      /* border: 5px solid green; */
    }

    .img1 {
      background-image: url('imgs/bgSea1.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: bottom;
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      animation: wave1 8s ease-in-out infinite;
      /* border: 5px solid purple; */
    }
    
    .img2 {
      background-image: url('imgs/bgSea2.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: bottom;
      position: absolute;
      z-index: -3;
      width: 100%;
      height: 100%;
      animation: wave2 10s ease-in-out infinite;
      /* border: 5px solid cyan; */
    }

    .img3 {
      background-image: url('imgs/bgSea3.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: bottom;
      position: absolute;
      z-index: -4;
      width: 100%;
      height: 100%;
      animation: wave3 12s ease-in-out infinite;
      /* border: 5px solid yellow; */
    }

    .img4 {
      background-image: url('imgs/bgSea4.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: bottom;
      position: absolute;
      z-index: -5;
      width: 100%;
      height: 100%;
      animation: wave4 15s ease-in-out infinite;
      /* border: 5px solid pink; */
    }

    @keyframes wave1 {
      0% {
        transform: translateY(1px);
      }
      25% {
        transform: translateY(1vw);
      }
      50% {
        transform: translateY(1px); 
      }
      75% {
        transform: translateY(1vw);
      }
      100% {
        transform: translateY(1px);
      }
    }

    @keyframes wave2 {
      0% {
        transform: translateY(0) translateX(0) rotate(0deg);
      }
      25% {
        transform: translateY(20px) translateX(30px) rotate(3deg);
      }
      50% {
        transform: translateY(0) translateX(40px) rotate(0deg);
      }
      75% {
        transform: translateY(30px) translateX(-30px) rotate(2deg); 
      }
      100% {
        transform: translateY(0) translateX(0) rotate(0deg);
      }
    }

    @keyframes wave3 {
      0% {
        transform: translateY(0) translateX(0) rotate(0deg);
      }
      25% {
        transform: translateY(20px) translateX(-30px) rotate(3deg);
      }
      50% {
        transform: translateY(0) translateX(40px) rotate(0deg);
      }
      75% {
        transform: translateY(30px) translateX(20px) rotate(3deg); 
      }
      100% {
        transform: translateY(0) translateX(0) rotate(0deg);
      }
    }

    @keyframes wave4 {
      0% {
        transform: translateY(0) translateX(0);
      }
      25% {
        transform: translateY(50px) translateX(-20px);
      }
      50% {
        transform: translateY(0) translateX(0px);
      }
      75% {
        transform: translateY(50px) translateX(-20px); 
      }
      100% {
        transform: translateY(0) translateX(0);
      }
    }

    .wrapper {
      padding-top: 0vh;
      padding-bottom: 100vh;
      background-color:var(--bg2);
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  </style>
</section>

<div class="wrapper">
  <h1>Home</h1>
  <h2>Home Page</h2>
</div>