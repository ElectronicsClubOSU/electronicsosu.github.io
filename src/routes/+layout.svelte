<script lang="ts">
	import './layout.css';
	
	import Footer from './footer.svelte';
	import Header from './header.svelte';

	let { children } = $props();
</script>

<svelte:head>
  <title> The Electronics Club @ Ohio State</title>
</svelte:head>

<Header/>

<div class="relative flex flex-col justify-between mt-18 min-w-screen overflow-hidden">
	{@render children()}

	<Footer/>
</div>



