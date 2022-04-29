<script lang="ts">
    import { page } from '$app/stores';
    import '../../routes/css/home-header.css';
</script>

<header>
    <nav>
        <ul>
            <li class:active={$page.url.pathname === '/'}>
                <a sveltekit:prefetch class="header-logo" href="/">
                    <img src="/logo.svg" alt="MindLabor Logo">
                </a>
            </li>
            <li></li>
            <li class:active={$page.url.pathname === '/blog'} class="float-hover"><a sveltekit:prefetch href="/blog">Blog</a></li>
            <li class:active={$page.url.pathname === '/about'} class="float-hover"><a sveltekit:prefetch href="/about">About</a></li>
        </ul>
    </nav>
</header>
