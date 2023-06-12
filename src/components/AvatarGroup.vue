<script setup>
const props = defineProps(['avatars', 'limit', 'avatarSize'])
const leftOver = props.avatars.length - props.limit;
const size = props.avatarSize === 'large' ? 'h-[42px] w-[42px] -ml-4' : 'h-9 w-9 -ml-3';
</script>

<template>
    <div class="flex ml-3">
        <img v-for="avatar in avatars.slice(0, limit)" :src="avatar" class="rounded-full" :class="[size]"/>
        <div v-if="leftOver" class="flex justify-center items-center rounded-full bg-primary text-dark text-[10px]" :class="[size]">
            {{ `+${leftOver}` }}
        </div>
    </div>
</template>