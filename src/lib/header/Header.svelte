<script lang="ts">
	import { page } from '$app/stores';
	import '../../routes/css/header.css';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/projects'}><a sveltekit:prefetch href="/projects">Projects</a></li>
			<li class:active={$page.url.pathname === '/gallery'}><a sveltekit:prefetch href="/gallery">Gallery</a></li>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch class="header-logo" href="/">
					<img src="/logo.svg" alt="MindLabor Logo" width=56px height=56px>
				</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li class:active={$page.url.pathname === '/resume'}><a sveltekit:prefetch href="/resume">Resume</a></li>
			<li class:active={$page.url.pathname === '/contact'}><a sveltekit:prefetch href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>
