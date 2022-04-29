<script lang="ts">
    import { page } from '$app/stores';
    import '../../routes/css/header.css';
</script>


{#if $page.url.pathname === '/'}
    <header class="home-header">
        <nav>
            <ul>
                <li class:active={$page.url.pathname === '/'}>
                    <a sveltekit:prefetch class="header-logo" href="/">
                        <img src="/logo.svg" alt="MindLabor Logo" class="logo">
                        <img src="/logo.svg" alt="MindLabor Logo" class="logo-shadow">
                    </a>
                </li>
                <li></li>
                <li class="float-hover"><a sveltekit:prefetch href="/blog">Blog</a></li>
                <li class="float-hover"><a sveltekit:prefetch href="/about">About</a></li>
            </ul>
        </nav>
    </header>
{:else}
    <header class="default-header">
        <nav>
            <ul>
                <li class:active={$page.url.pathname === '/'}>
                    <a sveltekit:prefetch class="header-logo" href="/">
                        <img src="/logo.svg" alt="MindLabor Logo" class="logo">
                        <img src="/logo.svg" alt="MindLabor Logo" class="logo-shadow">
                    </a>
                </li>
                <li></li>
                <li class:active={$page.url.pathname === '/'} class="float-hover"><a sveltekit:prefetch href="/">Home</a></li>
                <li class:active={$page.url.pathname === '/blog'} class="float-hover"><a sveltekit:prefetch href="/blog">Blog</a></li>
                <li class:active={$page.url.pathname === '/about'} class="float-hover"><a sveltekit:prefetch href="/about">About</a></li>
            </ul>
        </nav>
    </header>
{/if}


