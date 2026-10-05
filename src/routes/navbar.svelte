<script lang="ts"> 
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	const pages = [
		{
			"name": "Home",
			"path": "/",
			"icon": "fa-house" 
		},
		{
			"name": "Calendar",
			"path": "/calendar",
			"icon": "fa-calendar" 
		},
		{
			"name": "Officers",
			"path": "/officers",
			"icon": "fa-users" 
		},
		{
			"name": "Projects",
			"path": "/projects",
			"icon": "fa-microchip" 
		},
		{
			"name": "Sponsorship",
			"path": "/sponsorship",
			"icon": "fa-briefcase" 
		},
	]
</script>

<nav class="fixed top-16 w-18 h-full flex flex-col bg-(--dark-color) text-xs text-(--gray-color) text-center">
	{#each pages as p, i (i)}
		<a href={resolve(p.path)} 
			class:active-page={page.url.pathname === p.path} 
			class="py-4 hover:bg-(--dark-hover) hover:text-(--light-color)"
		>
			<i class="fa-solid {p.icon} fa-2x"></i>
			<div class="mt-2">{p.name}</div>
		</a>
	{/each}
</nav>