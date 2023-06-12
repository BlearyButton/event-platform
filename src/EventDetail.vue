<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import AvatarGroup from './components/AvatarGroup.vue';
import EventAction from './components/EventAction.vue';
import EventButtonAdd from './components/EventButtonAdd.vue';
import EventMaps from './components/EventMaps.vue';

const eventTemplate = ref(null);
const route = useRoute();

const data = {
    1: {
        id: 1,
        icon: '/thumbnail-1.png',
        title: 'Design Thinking',
        location: 'Eindhoven',
        date: '18 april',
        startTime: '14:00',
        endTime: '18:00',
        intro: 'Dutch Design Week is een grootschalig en internationaal jaarlijks negendaags evenement in Eindhoven waarbij design in allerlei facetten centraal staat.',
        attendees: ['/character-1.png', '/character-2.png', '/character-3.png', '/character-4.png', '/character-5.png', '/character-6.png',]
    },
    2: {
        id: 2,
        icon: '/thumbnail-2.png',
        title: 'Design Conference 2023',
        location: 'Dubrovnik',
        date: '24 juni',
        startTime: '09:00',
        endTime: '16:00',
        intro: 'The DESIGN Conference programme offers broad exchange possibilities to researchers and practitioners, strategic decision makers, managers, design and engineering professionals, national or regional agencies or governmental bodies.',
        attendees: ['/character-2.png', '/character-4.png', '/character-7.png', '/character-6.png',]
    },
    3: {
        id: 3,
        icon: '/thumbnail-3.png',
        title: 'Stockholm Design Week',
        location: 'Stockholm',
        date: '11 aug.',
        startTime: '08:00',
        endTime: '14:00',
        intro: 'Stockholm Design Week returns with a pop-up September edition in 2023. Inviting professionals as well as enthusiasts, the autumn pop-up provides a platform to network, launch news and discuss ideas together. It serves as an intimate gathering with an emphasize on knowledge sharing.',
        attendees: ['/character-4.png', '/character-2.png',]
    },
    4: {
        id: 4,
        icon: '/thumbnail-4.png',
        title: 'Dribbble UX Cursus',
        location: 'Online',
        date: '17 aug.',
        startTime: '11:00',
        endTime: '17:00',
        intro: 'Leer meer over hoe Dribbble omgaat met de ontwikkelingen in User Experience design.',
        attendees: ['/character-2.png', '/character-4.png', '/character-5.png', '/character-6.png']
    },
    5: {
        id: 5,
        icon: '/thumbnail-5.png',
        title: 'UXOK Design Conference',
        location: 'Californië',
        date: '06 sept.',
        startTime: '09:00',
        endTime: '17:00',
        intro: 'Learn the latest Product, UX, Design and Dev practices, increase your T-shaped skills and discover the techniques companies are using to empower teams to deliver.',
        attendees: ['/character-3.png', '/character-8.png', '/character-6.png', '/character-1.png']
    },
    6: {
        id: 6,
        icon: '/thumbnail-6.png',
        title: 'Design Thinking Conference',
        location: 'Online',
        date: '19 sept.',
        startTime: '19:00',
        endTime: '22:00',
        intro: '“We must design for the way people behave, not for how we would wish them to behave.” ― Donald A. Norman',
        attendees: ['/character-6.png', '/character-11.png', '/character-2.png', '/character-3.png']
    },
    7: {
        id: 7,
        icon: '/thumbnail-7.png',
        title: 'Understand Lean Startup',
        location: 'Amsterdam',
        date: '01 okt.',
        startTime: '14:00',
        endTime: '20:00',
        intro: 'Get skilled up for a versatile, innovative startup ecosystem! No excuse but to succeed.',
        attendees: ['/character-8.png', '/character-4.png', '/character-5.png', '/character-10.png']
    },
    8: {
        id: 8,
        icon: '/thumbnail-8.png',
        title: 'DNI.Amsterdam',
        location: 'Amsterdam',
        date: '09 okt.',
        startTime: '11:00',
        endTime: '22:00',
        intro: 'We organize niche and private recruiting experiences for badass IT professionals and progressive employers. #dniamsterdam',
        attendees: ['/character-11.png', '/character-10.png', '/character-9.png', '/character-8.png']
    },
}

onMounted(() => {
    eventTemplate.value = data[route.params.id];
})
watch(route, async (route) => {
    eventTemplate.value = data[route.params.id];
}, { deep: true });




</script>

<template>
    <template v-if="eventTemplate">
        <div class="fixed w-full flex justify-between items-center p-6 z-10">
            <a href="./">
                <div class="bg-background-secondary w-[42px] h-[42px] rounded-full flex items-center justify-center">
                    <img class="h-3 rotate-180" src="/arrow-right-light.svg" />
                </div>
            </a>
            <div class="bg-background-secondary w-[42px] h-[42px] rounded-full flex items-center justify-center">
                <img class="w-3" src="/icon-smalloverlay.svg" />
            </div>
        </div>
        <div class="px-[24px] pt-[150px]">
            <div class="flex items-center justify-between">
                <img :src="eventTemplate.icon" class="h-20" />
            </div>
            <h1 class="text-light text-2xl font-semibold mt-10">{{ eventTemplate.title }}</h1>
            <div class="flex items-center flex-wrap mb-4 mt-1">
                <div class="flex items-center mr-4">
                    <img src="/icon-location.svg" class="h-4" />
                    <p class="text-light text-sm ml-2">{{ eventTemplate.location }}</p>
                </div>
                <div class="flex items-center mr-4">
                    <img src="/icon-date.svg" class="h-4" />
                    <p class="text-light text-sm ml-2">{{ eventTemplate.date }}</p>
                </div>
                <div class="flex items-center">
                    <img src="/icon-location.svg" class="h-4" />
                    <p class="text-light text-sm ml-2">{{ `${eventTemplate.startTime} - ${eventTemplate.endTime}` }}</p>
                </div>
            </div>
                <div class="bg-background-secondary rounded-[23px] p-6 mt-11">
                    <div class="flex justify-between items-center mb-3">
                        <p class="text-light text-sm font-semibold">Deze collega's zijn al ingeschreven</p>
                        <img class="h-[9px]" src="/arrow-right-light.svg" />
                    </div>
                    <AvatarGroup :key="eventTemplate.id" limit="4" :avatars="eventTemplate.attendees" avatarSize="large" />
                </div>
            <div class="text-light mt-16">
                <h2 class="text-xl font-semibold">
                    Over het evenement
                </h2>
                <p class="leading-loose text-base mt-1">
                    {{ eventTemplate.intro }}
                </p>
            </div>
            <div class="grid grid-cols-2 gap-2 mt-10">
                <EventAction label="Lees meer over dit evenement" theme="tertiary" />
                <EventAction label="Open chat met anderen" theme="secondary" />
            </div>
            <div class="pt-12 ">
                <EventMaps />
            </div>
        </div>
        <div class="pt-12 pb-24">
            <EventButtonAdd />
        </div>
    </template>
</template>

<style scoped></style>
