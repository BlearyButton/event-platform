<script setup>
const props = defineProps(['text', 'color'])
</script>

<template>
 <div class="rounded-[15px] px-3 py-1.5 text-dark text-xs flex justify-center items-center" :class="[color ? color : '']">
    {{ text }}
 </div>
</template>