<script setup>
import EventCard from './EventCard.vue';
import EventCardFull from './EventCardFull.vue'
 
const data = [
    {
        icon: '/thumbnail-1.png',
        title: 'Design Thinking',
        location: 'Eindhoven',
        date: '18 april',
        avatars: ['/character-1.png', '/character-2.png', '/character-3.png', '/character-4.png', '/character-5.png', '/character-6.png',],
    },
    {
        icon: '/thumbnail-2.png',
        title: 'Design Conference 2023',
        location: 'Eindhoven',
        date: '18 april',
        avatars: ['/character-1.png', '/character-2.png', '/character-3.png', '/character-4.png', '/character-5.png', '/character-6.png',]
    },
    {
        icon: '/thumbnail-1.png',
        title: 'Design Thinking',
        location: 'Eindhoven',
        date: '18 april',
        avatars: ['/character-1.png', '/character-2.png', '/character-3.png', '/character-4.png', '/character-5.png', '/character-6.png',]
    },

]

</script>

<template>
    <h2 class="text-light font-semibold text-xl mb-5">
        Populaire evenementen
    </h2>
  <div class="max-w-screen-full w-full flex overflow-x-scroll gap-x-3">
      <EventCard v-for="card in data" v-bind="card"/>
  </div>

  <h2 class="mt-16 text-light font-semibold text-xl mb-5">
    Alle evenementen
  </h2>
  <div class="">
    <EventCardFull />
  </div>
</template>