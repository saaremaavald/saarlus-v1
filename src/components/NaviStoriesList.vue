<script setup>

import {ref, computed} from "vue";
import { useStore } from 'vuex';
const store = useStore();
const stories = ref(store.state.stories);
const activeStory = ref(computed(()=>store.getters.activeStory));
</script>

<template>
    <nav class="py-4 sticky top-8 h-full">
        <ul>
            <li v-for="story in stories" :key="story.slug" class="pl-4" :class="story.slug == activeStory.slug?'bg-yellow-100':''">
                <router-link :to="`/lugu/${story.slug}`" 
                class="flex justify-between py-1 text-sm border-b border-transparent hover:border-gray-200 transition"><span class="flex-grow w-5/6">{{story.title}}</span><IconCaretRight class="flex-grow w-1/6" /></router-link>
            </li>
        </ul>
    </nav>
</template>