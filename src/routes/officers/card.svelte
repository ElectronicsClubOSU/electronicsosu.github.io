<script type="ts">
	let { officer } = $props();
</script>

<div class="group flex flex-col hover:outline-(--accent-color) transition-all duration-200 ease-in-out outline-2 outline-transparent shadow-sm rounded-lg overflow-hidden">
  <div class="h-65 overflow-hidden">
    <img src="{officer.image}" alt="officer" class="object-cover h-full w-full duration-200 group-hover:scale-[1.05]" />
  </div>

  <div
    class="flex flex-col justify-between gap-1 flex-1 py-4 px-5 bg-(--light-color)"
  >
    <div>
      <p class="mb-1 text-xl text-(--black) font-semibold">{officer.name}</p>
      <p class="mb-4 text-sm text-(--accent-color) font-semibold">{officer.position}</p>
      <p class="mb-4 text-sm text-(--gray-color)">{officer.bio}</p>
    </div>

    <div class="flex items-center gap-4">
      <a href={officer.linkedin}>
        <img src="/assets/img/temp/linkedin.svg" alt="linkedin" class="size-5 invert"/>
      </a>
      <a href={officer.email}>
        <img src="/assets/img/temp/email.svg" alt="email" class="size-5 invert"/>
      </a>
    </div>
      
  </div>
</div>