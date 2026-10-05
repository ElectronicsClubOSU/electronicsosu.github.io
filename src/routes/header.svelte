<script lang="ts">
	import { resolve } from '$app/paths';
  
</script>

<header class="fixed top-0 flex justify-between w-full h-16 z-50 bg-(--primary-color) header-shadow">
	<img 
		src="/assets/img/logo/electronics_club_logo-alt.png" 
		class="ml-4 mt-3 mb-1" 
		alt="The Electronics Club Logo"
	>

	<a 
		href="http://eepurl.com/gCbD2f" 
		title="Mailing List" 
		target="_blank" 
		rel="noopener noreferrer"
		class="ml-12 mt-4 mb-2 px-3 flex items-center text-md text-(--light-color) border-2 border-(--light-color) rounded-lg cursor-pointer" 
	>
		<p>Join the Mailing List</p>
	</a>

	<a 
		href={resolve('/meeting')} 
		target="_blank" 
		rel="noopener noreferrer" 
		class="ml-auto mt-2 mr-12 flex flex-col items-center text-(--light-color)"
	>
		<i class="fa-brands fa-google-drive fa-2x" id="icon"></i>
		<p>Slides</p>
	</a>
</header>