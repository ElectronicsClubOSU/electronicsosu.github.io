<script lang="ts">
  import { Calendar } from '@fullcalendar/core';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import googleCalendarPlugin from '@fullcalendar/google-calendar';
  import { onMount } from 'svelte';

  let calendarEl: HTMLDivElement;

  onMount(() => {
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, googleCalendarPlugin],
      
      initialView: 'dayGridMonth',
      googleCalendarApiKey: 'AIzaSyBu5kL2kgj9AZXCM8kfSLukPx1Vb7bRSh4',
      events: {
        googleCalendarId: 'electronicsosu@gmail.com'
      }
    });
    calendar.render();

    return () => calendar.destroy();
  });
</script>

<svelte:head>
  <title>Calendar - OSU Electronics Club</title>
</svelte:head>

<div id="intro">
  <div class="centered" id="calendar" bind:this={calendarEl}></div>
</div>