<script setup>
import EventCard from './EventCard.vue';
import EventCardFull from './EventCardFull.vue'
 
const data = [
    {
        icon: '/thumbnail-1.png',
        title: 'Design Thinking',
        location: 'Eindhoven',
        date: '18 april',
        to: '/event/1',
        avatars: ['/character-1.png', '/character-2.png', '/character-3.png', '/character-4.png', '/character-5.png', '/character-6.png',],
    },
    {
        icon: '/thumbnail-2.png',
        title: 'Design Conference 2023',
        location: 'Dubrovnik',
        date: '24 juni',
        to: '/event/2',
        avatars: ['/character-2.png', '/character-4.png', '/character-7.png', '/character-6.png',]
    },
    {
        icon: '/thumbnail-3.png',
        title: 'Stockholm Design Week',
        location: 'Stockholm',
        date: '11 augustus',
        to: '/event/3',
        avatars: ['/character-4.png', '/character-2.png',]
    },
    {
        icon: '/thumbnail-4.png',
        title: 'Dribbble UX Cursus',
        location: 'Online',
        date: '17 augustus',
        to: '/event/4',
        avatars: ['/character-2.png', '/character-4.png', '/character-5.png', '/character-6.png',]
    },
    {
        icon: '/thumbnail-5.png',
        title: 'UXOK Design Conference',
        location: 'Californië',
        date: '06 september',
        to: '/event/5',
        avatars: ['/character-3.png', '/character-5.png', '/character-6.png', '/character-1.png',]
    },
    {
        icon: '/thumbnail-6.png',
        title: 'Design Thinking Conference',
        location: 'Online',
        date: '19 september',
        to: '/event/6',
        avatars: ['/character-6.png', '/character-5.png', '/character-2.png', '/character-3.png',]
    },
    {
        icon: '/thumbnail-7.png',
        title: 'Understand Lean Startup',
        location: 'Amsterdam',
        date: '01 oktober',
        to: '/event/7',
        avatars: ['/character-8.png', '/character-4.png', '/character-5.png', '/character-10.png',]
    },
    {
        icon: '/thumbnail-8.png',
        title: 'DNI.Amsterdam',
        location: 'Amsterdam',
        date: '09 oktober',
        to: '/event/8',
        avatars: ['/character-11.png', '/character-10.png', '/character-9.png', '/character-8.png',]
    },

]

</script>

<template>
    <h2 class="text-light font-semibold text-xl mb-5">
        Alle evenementen
    </h2>
  <div class="max-w-screen-full w-full flex flex-col gap-y-3 mb-16">
      <EventCard class="min-w-full" v-for="card in data" v-bind="card" cardType="compact"/>
  </div>
</template>