<script>
    import '$css/global.css';
    import { page } from '$app/stores';
</script>

<title>{$page.status} | Chriz</title>

<style>
    h1 {
        font-size: 10rem !important;
        line-height: 10rem;
    }

    div {
        background: var(--bg2) !important;
        box-shadow: 0px -5px 0px 10rem var(--bg2);
        padding-top: 20vh;padding-bottom: 10vh;
    }

    span {
        width: 20px;
        height: 50px;
        display: block;
    }
</style>

<div>
    <span></span>
    <h1>{$page.status}</h1>
    <h2>So you took the wrong turn and ended up here ay? Well atleast im not lonely anymore :)</h2>
    <h3>Err {$page.status}: {$page.error.message}</h3>
</div>