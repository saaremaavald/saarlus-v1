<script setup>

import { ref, computed } from 'vue'
import { useStore } from 'vuex';

const props = defineProps({
    idx : {
        type: Number
    },
});

const store = useStore();
const stories = ref(computed(()=>store.getters.stories));

const prevIdx = ref(props.idx===0?parseInt(stories.value.length-1):parseInt(props.idx-1));
const nextIdx = ref(props.idx===parseInt(stories.value.length-1)?0:parseInt(props.idx+1));

</script>

<template>
<nav class="flex items-center justify-between gap-4 pb-12">
    <router-link :to="`/lugu/${stories[prevIdx].slug}`" class="flex items-center bg-transparent py-2 px-4 rounded shadow-dark border border-gray-300 transition transition-shadow uppercase text-sm  hover:(border-gray-400)"><IconArrowLeft class="inline" />Eelmine</router-link>
    <router-link :to="`/lugu/${stories[nextIdx].slug}`" class="flex items-center bg-transparent py-2 px-4 rounded shadow-dark border border-gray-300 transition transition-shadow uppercase text-sm  hover:(border-gray-400)">Järgmine<IconArrowRight class="inline" /></router-link>
</nav>
</template>

<style scoped>

</style>
