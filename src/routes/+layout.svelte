<script lang="ts">
	import './layout.css';
	
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import Navbar from './navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
  <title> The Electronics Club @ Ohio State</title>
	
  <script src="https://kit.fontawesome.com/20b9d497a8.js" crossorigin="anonymous"></script>
</svelte:head>

<Header/>
<Navbar/>

<div class="relative flex flex-col justify-between mt-16 ml-18 min-w-[calc(100vw-4.5rem)] overflow-hidden">
	{@render children()}

	<Footer/>
</div>



