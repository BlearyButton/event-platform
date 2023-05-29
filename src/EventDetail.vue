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
    3: {
        id: 3,
        icon: '/thumbnail-3.png',
        title: 'Design Conference 2023',
        location: 'Dubrovnik',
        date: '18 april',
        startTime: '14:00',
        endTime: '18:00',
        intro: 'Dutch Design Week is een grootschalig en internationaal jaarlijks negendaags evenement in Eindhoven waarbij design in allerlei facetten centraal staat.',
        attendees: ['/character-1.png', '/character-2.png', '/character-3.png', '/character-4.png']
    }
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
            <div class="bg-background-secondary w-[42px] h-[42px] rounded-full flex items-center justify-center">
                <img class="h-3 rotate-180" src="/arrow-right-light.svg" />
            </div>
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
