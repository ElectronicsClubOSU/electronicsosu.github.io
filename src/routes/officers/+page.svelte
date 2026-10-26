<script>
	import officers from "$lib/data/officers.json"
	import Card from "./card.svelte";
</script>

<svelte:head>
	<title>Officers - OSU Electronics Club</title>
</svelte:head>

<div class="w-full max-w-7xl mx-auto px-16">
	<h1 class="my-8 text-3xl center font-bold">Meet the Officers</h1>

	<div class="grid team-grid gap-6 mb-8">
		{#each officers as officer, i(i)}
				<Card {officer}/>
		{/each}
	</div>
</div>


<style>
	.team-grid {
		grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
	}
</style>