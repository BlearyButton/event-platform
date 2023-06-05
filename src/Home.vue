<script setup>
import EventActions from './components/EventActions.vue';
import EventCards from './components/EventCards.vue';
</script>

<template>
      <img src="/event-hero.png" />
      <div class="px-[24px]">
        <div class="mt-10">
          <EventActions />
        </div>
      </div>
      <div class="pl-[24px] mt-14">
          <EventCards />
      </div>
</template>

<style scoped>
</style>
