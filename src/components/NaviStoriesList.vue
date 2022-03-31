<script setup>

import {ref, computed} from "vue";
import { useStore } from 'vuex';
const store = useStore();
const stories = ref(store.state.stories);
const activeStory = ref(computed(()=>store.getters.activeStory));
const toggleMenu = () => {store.commit("toggleMenu", true)};
</script>

<template>
    <div class="fixed top-0 left-0 grid grid-cols-12 w-full h-screen 
        overflow-y-auto scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-500 
        pointer-events-auto
        z-100">
        
        <div class="hidden pointer-events-none sm:block"></div>
        <div class="relative col-start-1 col-span-12 bg-white p-12
        pointer-events-auto
            sm:(col-start-2 col-span-11)">
            <button class="fixed right-6 top-6 p-4" @click="toggleMenu"><icon-close /></button>
            <h1 class="py-6
                font-saaremaa text-4xl text-saarlus-700
            ">Lugude nimekiri</h1>
            <nav class="py-4 sticky top-16 h-full">
                <ul class="grid grid-cols-1 gap-4
                sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <li v-for="story in stories" :key="story.slug" >
                        <router-link @click="toggleMenu" :to="`/lugu/${story.slug}`"
                        class="flex justify-between items-baseline py-1 text-sm border-b border-transparent hover:border-gray-200 transition" :class="story.slug == activeStory.slug?'bg-yellow-200':''"><IconCaretRight class="flex-grow w-1/6"/><span class="flex-grow w-5/6 text-lg leading-tight">{{story.title}}</span></router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>