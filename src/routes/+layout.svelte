<script lang="ts">
	import './layout.css';

	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
  <title> The Electronics Club @ Ohio State</title>
	
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script src="https://kit.fontawesome.com/20b9d497a8.js" crossorigin="anonymous" defer></script>
</svelte:head>

<header class="header">
	<img src="/assets/img/logo/electronics_club_logo-alt.png" class="logo">
	<a class="header-button" title="Mailing List" href="http://eepurl.com/gCbD2f" target="_blank" rel="noopener noreferrer">
		Join the Mailing List
	</a>
	<div id="slides">
		<a href={resolve('/meeting')} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-google-drive fa-2x" id="icon"></i>
			<p>Slides</p>
		</a>
	</div>
</header>

<div class="navbar">
	<a href={resolve('/')} class:active-page={page.url.pathname === '/'}>
		<i class="fa-solid fa-house fa-2x"></i>
		<div class="label">Home</div>
	</a>
	<a href={resolve('/calendar')} class:active-page={page.url.pathname === '/calendar'}>
		<i class="fa-solid fa-calendar fa-2x"></i>
		<div class="label">Calendar</div>
	</a>
	<a href={resolve('/officers')} class:active-page={page.url.pathname === '/officers'}>
		<i class="fa-solid fa-users fa-2x"></i>
		<div class="label">Officers</div>
	</a>
	<a href={resolve('/projects')} class:active-page={page.url.pathname === '/projects'}>
		<i class="fa-solid fa-microchip fa-2x"></i>
		<div class="label">Projects</div>
	</a>
	<a href={resolve('/sponsorship')} class:active-page={page.url.pathname === '/sponsorship'}>
		<i class="fa-solid fa-briefcase fa-2x"></i>
		<div class="label">Sponsorship</div>
	</a>
</div>

<div class="main">
	{@render children()}

	<footer>
		<div class="footer-content">
			<h3>The Electronics Club</h3>
			<ul class="socials">
				<li><a href="https://www.youtube.com/channel/UCWHU4Rqhvhc-2UUW4fxVHag"><i class="fa fa-youtube-play"></i></a></li>
				<li><a href="https://discord.com/invite/wbS9Nqv8YE"><i class="fa-brands fa-discord"></i></a></li>
				<li><a href="https://twitter.com/electronicsosu"><i class="fa fa-twitter"></i></a></li>
				<li><a href="mailto:electronicsosu@gmail.com"><i class="fa fa-envelope-square"></i></a></li>
				<li><a href="https://github.com/ElectronicsOSU"><i class="fa fa-github"></i></a></li>
				<li><a href="https://www.instagram.com/electronicsclubosu/?hl=en"><i class="fa fa-instagram"></i></a></li>
			</ul>
		</div>
	</footer>
</div>



