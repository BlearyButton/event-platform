<script setup>
const props = defineProps(['label', 'link', 'theme'])
const themeClass = props.theme === 'secondary' ? 'bg-secondary' : 'bg-tertiary'; 
</script>

<template>
  <div :class="[themeClass, 'rounded-[23px] pb-3 px-3 pt-8 flex flex-col justify-between']">
    <img class="grow-0 self-end" src="/arrow-right.svg" />
    <div class="text-dark text-sm mt-4" v-html="label">
    </div>
  </div>
</template>