<script lang="ts">
	import ModeSwitcher from './ModeSwitcher.svelte';
	import Tailwindcss from './Tailwindcss.svelte';
	export let name: string;
</script>
<style>
	.custom-style {
		@apply tw-italic;
	}
</style>
<Tailwindcss />
<ModeSwitcher />
<main class="tw-p-4 tw-mx-auto tw-text-center tw-max-w-xl">
	<h1 class="tw-uppercase tw-text-6xl tw-leading-normal tw-font-thin tw-text-svelte">Hello {name}!</h1>
	<p class="tw-custom-style tw-mt-[3rem]">
		Visit the
		<a href="https://svelte.dev/tutorial" class="tw-text-blue-500 tw-underline">Svelte tutorial</a>
		to learn how to build Svelte apps.
	</p>
</main>