<script>
    import '$css/colors.css';
    import '$css/buttons.css';
    // import { onMount } from 'svelte';
</script>

<style>
    footer {
        background-color: var(--bg2);
        box-shadow: 0px -5px 0px 5px var(--bg2);
    }

    .coralReef {
        background-image: url('/imgs/coralReef.svg');
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
        background-color: var(--footer);
        box-shadow: 0px 0px 0px 5px var(--footer);
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
            <a href="https://ko-fi.com/chrizxzftw" class="bttn footBttn" rel="noopener noreferrer" title="Ko-fi" aria-label="Ko-fi"><i class="fa-solid fa-mug"></i></a>
            <a href="https://discord.gg/ZJ9PwQEC6E" class="bttn footBttn" rel="noopener noreferrer" title="Discord" aria-label="Discord"><i class="fab fa-discord"></i></a>
            <a href="https://twitter.com/chrizxzftw" class="bttn footBttn" rel="noopener noreferrer" title="Twitter" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
        </div>
        <span class="footLine"></span>
        <div class="footContent">
            <span>©2021-24 ChrizxzFTW. All rights reserved.</span>
        </div>
    </div>
</footer>