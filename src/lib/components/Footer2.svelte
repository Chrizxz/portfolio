<script>
    import '$css/colors.css';
    import '$css/buttons.css';
    // import { onMount } from 'svelte';
    let currentYear = new Date().getFullYear();
    currentYear -= 2000;
</script>

<style>
    .coralReef {
        background-image: url('/imgs/coralReef2.svg');
        height: 20rem;
        width: 100%;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: bottom;
    }

    .footWrap {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--footer2);
        box-shadow: 0px 0px 0px 5px var(--footer2);
        padding: 1.3rem 0;
        font-size: 12px;
    }

    .footBttnWrap {
        margin: 0 1.7rem;
    }

    .footLine {
        width: 100%;
        height: 1px;
        background-color: var(--glass);
    }

    .footContent {
        display: flex;
        margin: 0 2rem;
        white-space: nowrap;
    }

    @media screen and (min-width: 2250px) {
        .coralReef {
            height: 35rem !important;
        }
    }

    @media (max-width: 700px) {
        .coralReef {
            height: 10rem;
        }

        .footWrap {
            flex-direction: column;
        }

        .footLine {
            width: 80%;
            height: 1px;
            margin: 1rem 0;
        }

        .footContent {
            opacity: .6;
        }
        
    }
</style>

<footer>
    <div class="coralReef"></div>
    <div class="footWrap">
        <div class="bttnWrap footBttnWrap">
            <a href="/donate" class="bttn footBttn" rel="noopener noreferrer" title="Ko-fi" aria-label="Ko-fi"><i class="fa-solid fa-mug"></i></a>
            <a href="/discord" class="bttn footBttn" rel="noopener noreferrer" title="Discord" aria-label="Discord"><i class="fab fa-discord"></i></a>
            <a href="/twitter" class="bttn footBttn" rel="noopener noreferrer" title="Twitter" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
        </div>
        <span class="footLine"></span>
        <div class="footContent">
            <span>©2021-{currentYear} ChrizxzFTW. All rights reserved.</span>
        </div>
    </div>
</footer>