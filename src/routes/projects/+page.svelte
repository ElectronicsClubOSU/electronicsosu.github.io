<script lang="ts">
  import StudentProjects from "./student_projects.svelte";
  import NasaChallenge from "./nasa_challenge.svelte";
  import HackBadges from "./hack_badges.svelte";

  type TabID = 'StudentProject' | 'NasaChallenge' | 'HackBadges';

  type Tab = {
    id : TabID; 
    label: string 
  }

  const tabs: Array<Tab> = [
    { id: 'StudentProject', label: 'Student Projects' },
    { id: 'NasaChallenge', label: 'MICRO-G_Next Challenge' },
    { id: 'HackBadges', label: 'HackOHI/O Badges' }
  ];

  let currentTab = $state<TabID>('StudentProject');

</script>

<svelte:head>
  <title>Projects - OSU Electronics Club</title>
</svelte:head>

<div class="flex overflow-hidden border-b border-gray-300 bg-[#f1f1f1]">
	{#each tabs as tab, i (i)}
		<button
			class="cursor-pointer px-4 py-3 transition-colors hover:bg-[#ddd]
				{currentTab === tab.id ? 'bg-[#ccc]' : ''}"
			onclick={() => (currentTab = tab.id)}
		>
			{tab.label}
		</button>
	{/each}
</div>

<div class="mx-auto px-16 max-w-5xl">
  {#if currentTab == 'StudentProject'}
    <StudentProjects/> 
  {:else if currentTab == 'NasaChallenge'}
    <NasaChallenge/>
  {:else if currentTab == 'HackBadges'}
    <HackBadges/>
  {/if}
</div>




