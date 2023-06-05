<script setup>
import AvatarGroup from './AvatarGroup.vue';

const props = defineProps(['icon', 'title', 'locationall', 'date', 'avatars'])

</script>

<template>
    <div class="bg-background-secondary rounded-[23px] pl-8 py-8 w-full max-w-[342px]">
        <div class="flex flex-col">
            <div class="pr-10 flex justify-end">
                <img class="" src="/arrow-right-light.svg" />
            </div>
            <div class="text-light">
                <div class="font-semibold">Design Thinking</div>
                <div class="flex flex-row">
                    <div class="flex items-center flex-wrap mb-4 mt-1">
                        <div class="flex items-center mr-3">
                            <img src="/icon-location.svg" class="h-4" />
                            <p class="text-light text-xs ml-2">Eindhoven</p>
                        </div>
                        <div class="flex items-center ">
                            <img src="/icon-date.svg" class="h-4" />
                            <p class="text-light text-xs ml-2">18 april</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>