<script setup>

import { ref, computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import NaviPrevNext from '../components/NaviPrevNext.vue';
import NaviStoriesList from '../components/NaviStoriesList.vue';

const route = useRoute();
const store = useStore();
const stories = ref(store.state.stories);
const activeStory = computed(() => store.getters.activeStory);
const storySlug = ref(computed(() => route.params.slug));
const storyIdx = ref(stories.value.findIndex(story => story.slug === storySlug.value));
const MarkdownComp = defineAsyncComponent(() => import(`../content/${storySlug.value}.md`));
        
</script>

<template>
    <section class="flex items-stretch shadow-md">
        <image-wrapper 
            v-for="(img, i) in activeStory.images" :key="`img${i}`"
            :src="img.src" :zoom="img.zoom" :bgPos="img.bgPos" :bgSize="img.bgSize" :height="img.height" />
        
        <!-- <image-wrapper 
            v-for="(img, i) in stories[storyIdx].images" :key="`img${i}`"
            :src="img.src" :zoom="img.zoom" :bgPos="img.bgPos" :bgSize="img.bgSize" :height="img.height" /> -->
    </section>
    <section class="flex">
        <navi-stories-list class="<md:hidden" />
        <div class="story-container">
            <component :is="MarkdownComp" />
    <footer>
        <navi-prev-next :idx="storyIdx" :slug="storySlug" />
    </footer>
        </div>
    </section>
</template>

<style>
/* .story-h1 {
    font-family: 'Changa One';
    font-weight: normal;
    font-size: 2rem;
} */
</style>