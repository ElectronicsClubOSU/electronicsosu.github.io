<script lang="ts">
	import { resolve } from '$app/paths';
  import { page } from '$app/state';

	const pages = [
		{
			"name": "Lab",
			"path": "/"
		},
		{
			"name": "Workshops",
			"path": "/calendar"
		},
		{
			"name": "Projects",
			"path": "/projects"
		},
		{
			"name": "Officers",
			"path": "/officers"
		},
		{
			"name": "Sponsors",
			"path": "/sponsorship"
		},
	]
</script>

<header class="fixed top-0 w-full h-18 z-50 bg-[#151313] border-b border-(--accent-color)">
	<div class="mx-auto max-w-7xl h-full px-8 flex justify-between items-center">
		<img 
			src="/assets/img/logo/electronics_club_logo-alt.png" 
			class="h-12 mt-3 mb-1" 
			alt="The Electronics Club Logo"
		>
	
		<nav class="flex items-center text-lg gap-8 text-white">
			{#each pages as p, i (i)}
				<a href={resolve(p.path)} 
					class:active-page={page.url.pathname === p.path} 
					class=""
				>
					<div class="pt-1 border-b-2 border-b-transparent hover:border-b-[#910000]">{p.name}</div>
				</a>
			{/each}

				<a href="" 
					class="px-4 py-2 bg-(--accent-color) rounded-md"
				>
					<div class="">Get Involved!</div>
				</a>
		</nav>
	</div>
</header>
