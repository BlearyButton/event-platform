<script setup>
import EventCard from './EventCard.vue';
import EventCardFull from './EventCardFull.vue'
 
const data = [
    {
        icon: '/character-1.png',
        title: 'Kees van der Voet',
        jobTitle: 'UX Consultant',
        location: '4Net',
        to: '/people/1',
        tags: [
            {
                text: 'Animatie',
                color: 'bg-tertiary'
            },
            {
                text: 'Wireframing',
                color: 'bg-secondary'
            },
        ]
    },
    {
        icon: '/character-2.png',
        title: 'Sarah bakker',
        jobTitle: 'UX Developer',
        location: 'Bikkelhart',
        to: '/people/2',
        tags: [
            {
                text: 'Interfaces',
                color: 'bg-quaternary'
            },
            {
                text: 'Animaties',
                color: 'bg-quinary'
            }
        ]
    },
    {
        icon: '/character-4.png',
        title: 'Max Luxemborg',
        jobTitle: 'Design Strateeg',
        location: 'BrainBrothers',
        to: '/people/3',
        tags: [
            {
                text: 'Animaties',
                color: 'bg-secondary'
            },
            {
                text: 'Wireframing',
                color: 'bg-quaternary'
            }
        ]
    },

]

</script>

<template>
    <h2 class="text-light font-semibold text-xl mb-5">
        Overzicht van collega's
    </h2>
  <div class="max-w-screen-full w-full flex flex-col gap-y-3 mb-16">
      <EventCard class="min-w-full" v-for="card in data" v-bind="card"/>
  </div>
</template>