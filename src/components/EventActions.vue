<script setup>
import EventAction from './EventAction.vue';

</script>

<template>
  <h1 class="text-light text-[32px] font-semibold">
    Evenementen
  </h1>
  <div class="grid grid-cols-2 gap-2 mt-5">
    <EventAction label="Jouw aangemaakte evenementen" theme="secondary"/>
    <EventAction label="Jouw <br/> inschrijvingen" theme="tertiary"/>
  </div>
</template>