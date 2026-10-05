<script type="ts">
	let { officer } = $props();
</script>

<div class="group relative h-90 shadow overflow-hidden">
  <img src="{officer.image}" class="object-cover h-65 w-full duration-300 group-hover:scale-[1.1]" />

  <div
    class="absolute bottom-25 bg-[maroon] text-white text-center translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-25 group-hover:bg-black"
  >
    <div class="py-3 px-5 h-25 flex flex-col gap-1">
      <h3 class="text-xl group-hover:text-[maroon]">{officer.name}</h3>
      <p>{officer.position}</p>
    </div>
    
    <p class="p-3 text-xs text-white">{officer.bio}</p>
  </div>
</div>