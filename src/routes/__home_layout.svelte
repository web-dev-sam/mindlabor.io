<script lang="ts">
	import Footer from '$lib/footer/Footer.svelte';
	import HomeHeader from '$lib/header/HomeHeader.svelte';
	import '../app.css';
</script>

<HomeHeader />

<main>
	<slot />
</main>

<Footer />
