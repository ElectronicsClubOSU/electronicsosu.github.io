<script>
	import officers from "$lib/data/officers.json"
	import Card from "./card.svelte";
</script>

<svelte:head>
	<title>Officers - OSU Electronics Club</title>
</svelte:head>

<div class="mx-16">
	<h1 class="my-8 text-3xl font-bold">Officers</h1>
	<div class="h-px bg-gray-300 my-6"></div>
	
	
	<div class="grid team-grid gap-6 mb-8">
	
		{#each officers as officer, i(i)}
				<Card {officer}/>
		{/each}
		
		
	</div>
</div>
