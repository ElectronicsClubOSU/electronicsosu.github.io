<script>
	import officers from "$lib/data/officers.json"
</script>

<svelte:head>
	<title>Officers - OSU Electronics Club</title>
</svelte:head>

<div class="section-title">
	<h2>Officers</h2>
	<hr class="horizontal-line" />
</div>


<div class="team-area">
	<div class="box">

		{#each officers as officer, i(i)}
			<div class="card">
				<div class="single-team">
					<div class="team-img">
						<img src="{officer.image}" alt="" class="img-responsive" />
					</div>
					<div class="team-content">
						<div class="team-info">
							<h3>{officer.name}</h3>
							<p>{officer.position}</p>
						</div>
						<div class="scrollable-paragraph">
							<p class="team-text">{officer.bio}</p>
						</div>
					</div>
				</div>
			</div>
		{/each}
		
	</div>
</div>

<style>
	.scrollable-paragraph {
		max-height: 100px;
		overflow-y: auto;
	}
</style>