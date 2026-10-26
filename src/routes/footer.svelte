<script lang="ts">
  const links = [
		{
			"label": "Discord",
			"href": "https://discord.com/invite/wbS9Nqv8YE",
			"logo": "/assets/img/temp/discord.svg"
		},
		{
			"label": "Instagram",
			"href": "https://www.instagram.com/electronicsclubosu/?hl=en",
			"logo": "/assets/img/temp/instagram.svg"
		},
		{
			"label": "GitHub",
			"href": "https://github.com/ElectronicsOSU",
			"logo": "/assets/img/temp/github.svg"
		},		
		{
			"label": "YouTube",
			"href": "https://www.youtube.com/channel/UCWHU4Rqhvhc-2UUW4fxVHag",
			"logo": "/assets/img/temp/youtube.svg"
		},
		{
			"label": "Twitter",
			"href": "https://twitter.com/electronicsosu",
			"logo": "/assets/img/temp/twitter.svg"
		},
		{
			"label": "Email",
			"href": "mailto:electronicsosu@gmail.com",
			"logo": "/assets/img/temp/email.svg"
		},
	]
</script>


<footer class="pt-6 pb-12 w-full bg-(--black) text-md text-white font-medium">
	<div class="flex flex-col max-w-7xl mx-auto px-5 text-center sm:px-10 sm:text-left">
		<div class="flex flex-col justify-between items-center gap-4 mb-6 sm:flex-row">
			<img src="/assets/img/logo/electronics_club_logo-alt.png" alt="The Electronics Club" class="h-auto w-auto max-w-full max-h-16">
			
			<img src="/assets/img/temp/osu.svg" alt="The Ohio State University" class="hidden mt-3 h-10 w-auto max-w-full sm:block">
			
		</div>
		
		<div class="flex flex-col items-center gap-6 mb-6 sm:flex-row sm:items-start sm:justify-between">
			<div class="flex flex-col">
				<div>
					<p class="mb-2">078 Caldwell Laboratory</p>
					<p>2024 Neil Avenue,</p>
					<p>Columbus, OH 43210</p>
				</div>
			</div>

			<div class="sm:text-right">
				<p class="mb-1">Website Developers</p>
				<div class="text-sm font-normal text-gray-400">
					<p>Aarush Maddula</p>
					<p>David Stephenson</p>
				</div>
			</div>

		</div>
		
		<div class="flex flex-col gap-6 items-center sm:flex-row sm:justify-between">
			<ul class="flex flex-wrap justify-center items-center gap-1">
				{#each links as l, i (i)}
				<li>
					<a href={l.href} aria-label={l.label} class="flex size-8 items-center justify-center">
						<img src={l.logo} alt="" class="size-5">
					</a>
				</li>
				{/each}		
			</ul>
			
			<p class="text-sm"> © 2026 The Electronics Club</p>
		</div>
	</div>

</footer>
