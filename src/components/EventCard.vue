<script setup>
import AvatarGroup from './AvatarGroup.vue';

const props = defineProps(['icon', 'title', 'location', 'date', 'avatars'])

</script>

<template>
  <div class="bg-background-secondary rounded-[23px] p-6 w-full grow min-w-[250px]">
    <div class="flex items-center justify-between">
        <img :src="icon" class="h-14" />
        <img src="/arrow-right-light.svg" />
    </div>
    <h3 class="text-light text-base font-semibold mt-5">{{ title }}</h3>
    <div class="flex items-center flex-wrap mb-4 mt-1">
        <div class="flex items-center mr-3">
            <img src="/icon-location.svg" class="h-4"/>
            <p class="text-light text-xs ml-2">{{ location }}</p>
        </div>
        <div class="flex items-center ">
            <img src="/icon-date.svg" class="h-4"/>
            <p class="text-light text-xs ml-2">{{ date }}</p>
        </div>
    </div>
    <AvatarGroup limit="4" :avatars="avatars" />
  </div>
</template>