<script setup>

import {ref, computed, onMounted} from "vue";
import { useStore } from 'vuex';
import StoryTag from "./StoryTag.vue";
import IconButton from "./IconButton.vue"; 

const store = useStore();
const stories = ref(store.state.stories);
const activeStory = ref(computed(()=>store.getters.activeStory));
const toggleMenu = () => {store.commit("toggleMenu", true)};
const tagsOpen = ref(computed(() => store.getters.tagsOpen));
const toggleTags = () => {store.commit("toggleTags", true)};

const tags = ref();
const activeTags = ref([]);

const toggleTag = (tag) => {
    if(activeTags.value.find(item => item === tag)){
        const newArr = activeTags.value.filter(item => item != tag);
        activeTags.value = newArr;
    } else {
        activeTags.value.push(tag);
    }

};

// const findCommonTags = () => {
//     if (activeTags.value.length == 0){
//         console.log("length 0");
//         return true;
//     } else {
//         console.log("length bigger");
//         activeTags.value.some(item => tags.value.includes(item));
//     }
// }

const sortedTags = () => {
  return [...tags.value].sort( (a, b) => {
    return a.localeCompare(b);
  });
};

onMounted(() => {
    const allTags = [];
    stories.value.forEach(story => {
        story.tags.forEach(tag => {
            allTags.push(tag);
        });
    });
    
    tags.value = [...new Set(allTags)];
    tags.value = sortedTags();
});

</script>

<template>
    <div class="fixed top-0 left-0 w-full h-screen 
        overflow-y-scroll scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-500 
        bg-white
        z-100">
                
        <div class="relative  p-12">
            <button class="fixed right-6 top-6 p-4" @click="toggleMenu"><icon-close /></button>
            
            <h1 class="py-4
                font-saaremaa font-bold text-6xl text-saarlus-700
            ">Lugude nimekiri</h1>

            <IconButton label="Sildid" icon="IconTagOne" @click="toggleTags" />

            <!-- <section v-if="tagsOpen"> -->
                <div class="flex flex-wrap gap-x-1 gap-y-2 border-solid border-t-2 border-b-2 my-6 overflow-hidden transition-all" :class="tagsOpen ? 'h-auto py-6' : 'h-0 py-0'">
                    <story-tag v-for="tag in tags" @click="toggleTag(tag)" :label="tag" :key="tag" />
                </div>
            <!-- </section> -->

            <nav class="py-4 h-full">
                <ul v-if="tags" class="grid grid-cols-1 gap-4
                sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <template v-for="story in stories" :key="story.slug">
                        <li :style="`transform:rotate(${-3+Math.random()*6}deg)`"
                            v-show="activeTags.length == 0 || story.tags.some(item => activeTags.includes(item))"
                        >
                            <router-link @click="toggleMenu" :to="`/lugu/${story.slug}`"
                            class="flex justify-between items-baseline py-4 pr-4 rounded-xl shadow text-sm border hover:border-gray-200 transition " :class="story.slug == activeStory.slug?'bg-yellow-200':''"><IconCaretRight class="flex-grow w-1/6"/><span class="flex-grow w-5/6 text-xl leading-tight font-saaremaa">{{story.title}}</span></router-link>
                        </li>
                    </template>
                </ul>
            </nav>
        </div>
    </div>
</template>