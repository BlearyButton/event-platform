<script setup>
import { computed } from '@vue/reactivity';
import AvatarGroup from './AvatarGroup.vue';
import Tag from './Tag.vue';

const props = defineProps({
  icon: {
    type: String,
  },
  title: {
    type: String,
  },
  location: {
    type: String,
  },
  date: {
    type: String,
  },
  avatars: {
    type: Array,
    default: () => []
  },
  cardType: {
    type: String,
    default: 'full'
  },
  jobTitle: {
    type: String
  },
  tags: {
    type: Array,
    default: () => [],
  },
  to: {
    type: String,
    required: true,
  }
});

const isFull = computed(() => props.cardType === 'full');

</script>

<template>
  <router-link :to="to" class="flex bg-background-secondary rounded-[23px] p-6 w-full grow min-w-[250px]" :class="[!isFull ? 'flex-row-reverse justify-between' : 'flex-col']">
    <div class="flex justify-between" :class="[!isFull ? 'flex-col-reverse items-center' : 'items-center']">
        <img :src="icon" class="h-14 " />
        <img class="grow-0 w-4" src="/arrow-right-light.svg" />
    </div>
    <div>
      <h3 class="text-light text-base font-semibold mt-5">{{ title }}</h3>
      <div class="flex items-center flex-wrap mb-4 mt-1">
          <div v-if="location" class="flex items-center mr-3">
              <img src="/icon-location.svg" class="h-4"/>
              <p class="text-light text-xs ml-2">{{ location }}</p>
          </div>
          <div v-if="date" class="flex items-center ">
              <img src="/icon-date.svg" class="h-4"/>
              <p class="text-light text-xs ml-2">{{ date }}</p>
          </div>
          <div v-if="jobTitle" class="flex items-center ">
              <img src="/icon-job.svg" class="h-3"/>
              <p class="text-light text-xs ml-2">{{ jobTitle }}</p>
          </div>
      </div>
      <div v-if="tags" class="flex items-center flex-wrap gap-1">
          <Tag v-for="tag in tags" v-bind="tag"/>
      </div>
      <AvatarGroup v-if="avatars?.length" limit="4" :avatars="avatars" />
    </div>
  </router-link>
</template>