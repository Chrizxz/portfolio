<script>
    import '$css/global.css';
    import { page } from '$app/stores';
</script>

<title>{$page.status} | Chriz</title>

<style>
    h1 {
        font-size: 10rem !important;
        line-height: 8rem;
    }

    div {
        background: var(--bg2) !important;
        box-shadow: 0px -5px 0px 10rem var(--bg2);
        padding-top: 20vh;
        padding-bottom: 15vh;
    }

    div > span {
        width: 20px;
        height: 50px;
        display: block;
    }

    h2 {
        margin-bottom: 2rem;
    }

    h3 {
        font-family: 'Nunito', sans-serif;
        color: var(--glassHov);
        display: flex;
        justify-content: center;
    }
    
    h3 span {
        border: 1px solid var(--glassHov);
        padding: 1rem;
        margin: 0;
        border-radius: .3rem;
        line-height: 0px !important;
        max-width: 80%;
        background-color: var(--glass2);
    }
</style>

<div>
    <span></span>
    <h1>{$page.status}</h1>
    <h2>Well this isn't what we were expecting now, were we? 🤔</h2>
    <h3><span>Err {$page.status}: {$page.error.message}</span></h3>
</div>