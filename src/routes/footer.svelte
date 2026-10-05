<script lang="ts">
  const links = [
		{
			"href": "https://www.youtube.com/channel/UCWHU4Rqhvhc-2UUW4fxVHag",
			"icon": "fa fa-youtube-play"
		},
		{
			"href": "https://discord.com/invite/wbS9Nqv8YE",
			"icon": "fa-brands fa-discord"
		},
		{
			"href": "https://twitter.com/electronicsosu",
			"icon": "fa fa-twitter"
		},
		{
			"href": "mailto:electronicsosu@gmail.com",
			"icon": "fa fa-envelope-square"
		},
		{
			"href": "https://github.com/ElectronicsOSU",
			"icon": "fa fa-github"
		},		
		{
			"href": "https://www.instagram.com/electronicsclubosu/?hl=en",
			"icon": "fa fa-instagram"
		},
	]
</script>


<footer class="py-6 bg-(--black) text-neutral-300 ">
  <ul class="flex justify-center items-center gap-5">
    {#each links as l, i (i)}
    <li>
      <a href={l.href} class="text-2xl hover:text-(--accent-color)">
        <i class="{l.icon} icon-fade"></i>
      </a>
    </li>
    {/each}		
  </ul>
  <h3 class="mt-3 text-center text-sm"> © 2026 | The Electronics Club</h3>
</footer>