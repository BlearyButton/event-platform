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
        avatars: ['/character-2.png', '/character-4.png', '/character-5.png', '/character-6.png',]
    },
    {
        icon: '/thumbnail-3.png',
        title: 'Stockholm Design Week',
        location: 'Stockholm',
        date: '11 augustus',
        to: '/event/3',
        avatars: ['/character-4.png', '/character-2.png',]
    },

]

</script>

<template>
    <h2 class="text-light font-semibold text-xl mb-5">
        Populaire evenementen
    </h2>
    <div class="cards-wrapper max-w-screen-full w-full flex snap-x snap-start overflow-x-scroll gap-x-3">
        <EventCard v-for="card in data" v-bind="card" />
    </div>
</template>
<style scoped>
.cards-wrapper {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}

.cards-wrapper::-webkit-scrollbar {
    display: none;
}
</style>