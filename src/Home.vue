<script setup>
import AllEventCards from './components/AllEventCards.vue';
import EventActions from './components/EventActions.vue';
import EventCards from './components/EventCards.vue';
import Navigation from './components/Navigation.vue';

</script>

<template>
  <Navigation />

  <img src="/event-hero.png" />
  <div class="px-[24px]">
    <div class="mt-10">
      <EventActions />
    </div>
  </div>
  <div class="pl-[24px] mt-14">
    <EventCards />
  </div>
  <div class="px-[24px] mt-14">
    <AllEventCards />
  </div>
</template>

<style scoped></style>
