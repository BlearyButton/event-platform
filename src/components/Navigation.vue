<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
}

</script>

<template>
  <div v-show="isOpen" class="fixed flex flex-col justify-center bg-background-primary inset-0">
    <nav class="pl-6 mb-20">
        <ul class="flex flex-col gap-y-10 text-light">
            <li>
                <router-link to="/" class="flex items-center gap-x-3">

                    <img class="h-4 w-4" src="./events.svg" />
                    <p class="">Evenementen</p>
                </router-link>
            </li>
            <li>
                <router-link to="/peoples" class="flex items-center gap-x-3">

                    <img class="h-4 w-4" src="./people.svg" />
                    <p class="">People overzicht</p>
                </router-link>
            </li>
            <li>
                <router-link to="/saved" class="flex items-center gap-x-3">

                    <img class="h-4 w-4" src="./saved.svg" />
                    <p class="">Opgeslagen</p>
                </router-link>
            </li>
            <li>
                <router-link to="/notifications" class="flex items-center gap-x-3">

                    <img class="h-4 w-4" src="./notifications.svg" />
                    <p class="">Notificaties</p>
                </router-link>
            </li>
        </ul>
    </nav>

  </div>
  <div class="fixed flex justify-between items-center max-w-screen top-5 left-5 right-5">
    <button @click="toggle" class="bg-background-secondary rounded-full w-10 h-10 flex justify-center items-center">
        <svg v-show="!isOpen" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H14" stroke="white" stroke-linecap="round"/>
            <path d="M1 10.3594H14" stroke="white" stroke-linecap="round"/>
            <path d="M1 5.67969H11" stroke="white" stroke-linecap="round"/>
        </svg>
        <svg v-show="isOpen" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5.8046L0.977011 9.82759C0.862069 9.94253 0.727969 10 0.574713 10C0.421456 10 0.287356 9.94253 0.172414 9.82759C0.0574713 9.71264 0 9.57854 0 9.42529C0 9.27203 0.0574713 9.13793 0.172414 9.02299L4.1954 5L0.172414 0.977011C0.0574713 0.862069 0 0.727969 0 0.574713C0 0.421456 0.0574713 0.287356 0.172414 0.172414C0.287356 0.0574713 0.421456 0 0.574713 0C0.727969 0 0.862069 0.0574713 0.977011 0.172414L5 4.1954L9.02299 0.172414C9.13793 0.0574713 9.27203 0 9.42529 0C9.57854 0 9.71264 0.0574713 9.82759 0.172414C9.94253 0.287356 10 0.421456 10 0.574713C10 0.727969 9.94253 0.862069 9.82759 0.977011L5.8046 5L9.82759 9.02299C9.94253 9.13793 10 9.27203 10 9.42529C10 9.57854 9.94253 9.71264 9.82759 9.82759C9.71264 9.94253 9.57854 10 9.42529 10C9.27203 10 9.13793 9.94253 9.02299 9.82759L5 5.8046Z" fill="white"/>
        </svg>

    </button>
    <button v-show="!isOpen" class="flex items-center bg-background-secondary rounded-full pl-1 pr-5 py-1">
        <img src="avatar-menu.png" />
        <p class="text-white text-sm ml-3">Judith</p>
    </button>
  </div>
</template>
<style>
.router-link-exact-active {
    font-weight: bold;
}
</style>