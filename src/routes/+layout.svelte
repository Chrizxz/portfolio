<script>
    import { fade } from 'svelte/transition';
    export let data;
	import '$css/navbar.css';
	import '$css/global.css';
	import '$lib/global.js';
	import '$css/btt.css';
	import { onMount } from 'svelte';

	onMount(() => {
		const backToTopButton = document.getElementById("bttBtn");
		// let lastScrollPosition = window.scrollY;
		const navbar = document.getElementById('navbar');
		const revealElements = document.querySelectorAll('.reveal');

		window.addEventListener('scroll', () => {
			// when they scroll down 20px from the top
			if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
				backToTopButton.style.display = "block";
			} else {
				backToTopButton.style.display = "none";
			}
			// scrolling down
			if (window.scrollY > 50) {
				navbar.classList.add('fixed');
				// if (middleLogo) middleLogo.style.visibility = "visible";
				return;
			}
			// scrolling up
			navbar.classList.remove('fixed');
			// if (middleLogo) middleLogo.style.visibility = "hidden";
		});

        const dropcheck = document.getElementById('dropcheck');
        const dropdownContent = document.querySelector('.dropdown-content');
        const fries = document.querySelector('.fries');

        dropcheck.addEventListener('change', function() {
            if (this.checked) {
                dropdownContent.classList.add('slide-down');
                dropdownContent.classList.remove('slide-up');
                fries.classList.add('open');
            } else {
                dropdownContent.classList.add('slide-up');
                dropdownContent.classList.remove('slide-down');
                fries.classList.remove('open');
            }
        });
    });

	function backToTop() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
</script>

<div class="container">

	<!--Navbar-->
	<nav id="navbar">
		<!--mobile view-->
		<div class="dropdown">
			<input id="dropcheck" class="dropcheck" type="checkbox"/>
			<h1>
				<div class="dropbtnWrap">
					<div class="mobileLogo">
						<!-- svelte-ignore a11y_invalid_attribute -->
						<a href="#" title="Logo" class="mobileLogoWrap">
						<img class="logoImg" src="imgs/navWording.svg" alt="Logo"/>
						</a>
					</div>
					<label for="dropcheck" class="dropbtn2">
						<!-- svelte-ignore a11y_missing_attribute -->
						<a class="dropbtn clickit" title="Navigation Button" aria-label="Navigation Button">
							<div class="fries">
								<div class="line"></div>
								<div class="line line2"></div>
								<div class="line"></div>
							</div>                              
						</a>
					</label>
				</div>
			</h1>
			<div class="dropdown-content">
				<a href="/about" title="About Me" aria-label="About Me">About Me</a>
				<a href="/contact" title="Contact" aria-label="Contact">Contact</a>
				<a href="https://beacons.ai/chrizxzftw" title="Other Links" rel="noopener noreferrer" target="_blank" aria-label="Other Links">Other Links</a>
				<a class="icons" href="https://discord.gg/ZJ9PwQEC6E" title="Discord" rel="noopener noreferrer" target="_blank" aria-label="Discord"><i class="fab fa-discord"></i></a>
				<a class="icons" href="https://twitter.com/ChrizxzFTW" title="Twitter" rel="noopener noreferrer" target="_blank" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
				<a class="icons" href="https://github.com/Chrizxz" title="Github" rel="noopener noreferrer" target="_blank" aria-label="Github"><i class="fab fa-github"></i></a>
			</div>
		</div>
		<!--desktop view-->
		<div class="desWrap">
			<ul class="links">
				<a class="desLogo" href="/" rel="noopener noreferrer">
					<img src="imgs/navWording.svg" alt="Logo"/>
				</a>
				<div>
					<li><a href="/about" title="About Me" aria-label="About Me">About Me</a></li>
					<li><a href="/contact" title="Contact" aria-label="Contact">Contact</a></li>
					<li><a href="https://beacons.ai/chrizxzftw" title="Other Links" rel="noopener noreferrer" target="_blank" aria-label="Other Links">Other Links</a></li>
					<li><span class="separator" style="user-select: none;">|</span></li>
					<li><a href="https://discord.gg/ZJ9PwQEC6E" title="Discord" rel="noopener noreferrer" target="_blank" aria-label="Discord"><i class="fab fa-discord"></i></a></li>
					<li><a href="https://twitter.com/ChrizxzFTW" title="Twitter" rel="noopener noreferrer" target="_blank" aria-label="Twitter"><i class="fab fa-x-twitter"></i ></a></li>
					<li><a href="https://github.com/Chrizxz" title="Github" rel="noopener noreferrer" target="_blank" aria-label="Github"><i class="fab fa-github"></i></a></li>
				</div>
			</ul>
		</div>
	</nav>

	<!--Back to Top Button -->
	<button on:click={backToTop} id="bttBtn" title="Back To Top" aria-label="Back To Top"> 
		<div class="bttIcon">
			<i class="fa-sharp fa-light fa-arrow-up"></i><br><br> 
		</div>
	</button>
	<!-- Back to Top Button -->

	<main>
		{#key data.pathname}
			<div in:fade={{ duration: 200, delay: 400 }} out:fade={{ duration: 200 }}>
				<slot />
			</div>
		{/key}
	</main>
</div>