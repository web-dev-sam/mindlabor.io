<script lang="ts">
	import { page } from '$app/stores';
	import '../../routes/css/header.css';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/projects'}><a sveltekit:prefetch href="/projects">Projects</a></li>
			<li class:active={$page.path === '/gallery'}><a sveltekit:prefetch href="/gallery">Gallery</a></li>
			<li class:active={$page.path === '/'}>
				<a sveltekit:prefetch class="header-logo" href="/">
					<img src="/logo.svg" alt="MindLabor Logo" width=56px height=56px>
				</a>
			</li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li class:active={$page.path === '/resume'}><a sveltekit:prefetch href="/resume">Resume</a></li>
			<li class:active={$page.path === '/contact'}><a sveltekit:prefetch href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>
