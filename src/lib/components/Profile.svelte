<script>
  import { onMount } from 'svelte';  
  import '$css/colors.css';
  let rotateX = 0;
  let rotateY = 0;

  const layerSpacing = 3;

  onMount(() => {
    const handleMouseMove = (event) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (event.clientX - w / 2) / w * 2.5;
      const y = (event.clientY - h / 2) / h * 2.5;
  
      rotateY = x * 30;
      rotateX = -y * 30;
    };
  
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });
</script>
  
<style>
  .card-container {
    position: relative;
    width: 25rem;
    height: 25rem;
    perspective: 1000px;
  }

  .card-stack {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.1s ease;
  }
    
  .card-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 2.5rem;
    backface-visibility: visible;
  }

  .card-layer-1 {
    background: url('imgs/banners/chOrg_gradient2.png');
    background-size: cover;
    background-position: center;
    transform: translateZ(calc(var(--layer-spacing) * 2 * 1rem));
    z-index: 3;
  }

  .card-layer-2 {
    background-color: #36b2ffbf;
    box-shadow: inset 0 0 0 .4rem #36b2ff;
    transform: translateZ(calc(var(--layer-spacing) * 1 * 1rem));
    z-index: 2;
    /* filter: blur(5px);
    opacity: .7; */
  }
  
  .card-layer-3 {
    background-color: #009afabf;
    box-shadow: inset 0 0 0 .4rem #009afc; 
    transform: translateZ(0);
    z-index: 1;
    /* filter: blur(10px); */
  }

  @media only screen and (max-width: 700px) {
    .card-container {
      position: relative;
      width: 60vw;
      height: 60vw;
      perspective: 1000px;
    }

    .card-stack {
      transform: rotateX(20deg) rotateY(0deg) !important;
    }

  }
  </style>
  
<div class="card-container">
  <div class="card-stack" style="transform: rotateX({rotateX + 25}deg) rotateY({rotateY-20}deg); --layer-spacing: {layerSpacing};">
    <div class="card-layer card-layer-1"></div>
    <div class="card-layer card-layer-2"></div>
    <div class="card-layer card-layer-3"></div>
  </div>
</div>