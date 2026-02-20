<script>
    import '$css/colors.css';
    import '$css/navbar.css';
    import { onMount } from 'svelte';

    onMount(() => {
		const navbar = document.getElementById('navbar');

		window.addEventListener('scroll', () => {
			// scrolling down
			if (window.scrollY > 50) {
				navbar.classList.add('fixed');
				return;
			}
			// scrolling up
			navbar.classList.remove('fixed');
		});

        const dropcheck = document.getElementById('dropcheck');
        const dropdownContent = document.querySelector('.dropdownContent');
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

		const label = document.getElementById('dropdownLabel');
        const links = document.querySelectorAll('.dropdownContent a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                label.click();
            });
        });

        document.addEventListener('click', (event) => {
            if (!event.target.closest('.dropdown') && !event.target.closest('.dropbtn2') && dropcheck.checked) {
                dropcheck.checked = false;
                dropdownContent.classList.add('slide-up');
                dropdownContent.classList.remove('slide-down');
                fries.classList.remove('open');
            }
        });
    });
</script>

<!--Navbar-->
<nav id="navbar">
    <!--mobile view-->
    <div class="dropdown">
        <input id="dropcheck" class="dropcheck" type="checkbox"/>
        <h1>
            <div class="dropbtnWrap">
                    <a href="/" title="Logo" class="mobileLogoWrap">
                        <img class="logoImg" src="imgs/navWording.svg" alt="Logo"/>
                    </a>
                <label id="dropdownLabel" for="dropcheck" class="dropbtn2">
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
        <div class="dropdownContent">
            <a href="/projects" title="Projects" aria-label="Projects">Projects</a>
            <a href="/about" title="About Me" aria-label="About Me">About Me</a>
            <a href="/contact" title="Contact" aria-label="Contact">Contact</a>
            <a href="/links" title="Other Links" rel="noopener noreferrer" target="_blank" aria-label="Other Links">Other Links <i class="fas fa-external-link-alt"></i></a>
            <a class="icons" href="/discord" title="Discord" rel="noopener noreferrer" target="_blank" aria-label="Discord"><i class="fab fa-discord"></i></a>
            <a class="icons" href="/twitter" title="Twitter" rel="noopener noreferrer" target="_blank" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
            <a class="icons" href="/github" title="Github" rel="noopener noreferrer" target="_blank" aria-label="Github"><i class="fab fa-github"></i></a>
        </div>
    </div>
    <!--desktop view-->
    <div class="desWrap">
        <ul class="links">
            <a class="desLogo" href="/" rel="noopener noreferrer">
                <img src="imgs/navWording.svg" alt="Logo"/>
            </a>
            <div>
                <li><a href="/projects" title="Projects" aria-label="Projects">Projects</a></li>
                <li><a href="/about" title="About Me" aria-label="About Me">About Me</a></li>
                <li><a href="/contact" title="Contact" aria-label="Contact">Contact</a></li>
                <li><a href="/links" title="Other Links" rel="noopener noreferrer" target="_blank" aria-label="Other Links">Other Links <i class="fas fa-external-link-alt"></i></a></li>
                <li><span class="separator" style="user-select: none;">|</span></li>
                <li><a href="/discord" title="Discord" rel="noopener noreferrer" target="_blank" aria-label="Discord"><i class="fab fa-discord"></i></a></li>
                <li><a href="/twitter" title="Twitter" rel="noopener noreferrer" target="_blank" aria-label="Twitter"><i class="fab fa-x-twitter"></i ></a></li>
                <li><a href="/github" title="Github" rel="noopener noreferrer" target="_blank" aria-label="Github"><i class="fab fa-github"></i></a></li>
            </div>
        </ul>
    </div>
</nav>