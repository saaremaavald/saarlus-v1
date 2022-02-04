<script setup>

import { computed, ref, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';



// const { frontmatter } = defineProps(["frontmatter"]);
// const frontmatter  = defineProps(["frontmatter"]);
// const origin = frontmatter.origin;
// console.log(frontmatter);

// export default {
    // props:{
    //     origin: String,
    //     frontmatter: Object
    // },
    // setup(props){
        const route = useRoute();
        const store = useStore();
        const stories = ref(store.state.stories);
        const activeStory = computed(() => store.getters.activeStory);
        const storySlug = computed(() => route.params.slug);
        // const storyIdx = ref(stories.value.findIndex(story => story.slug === storySlug.value));
        const MarkdownComp = defineAsyncComponent(() => import(`../content/${storySlug.value}.md`));
        
        
        // console.log("ACTIVE STORY" + activeStory.value.origin);
        
        // const MarkdownComp = import(`../content/${storySlug.value}.md`);

        // const author = props.frontmatter.author;

        // return {
        //     stories, storySlug, storyIdx, MarkdownComp
        // }
    // }
// }
</script>

<template>
    <section class="story-header flex items-stretch shadow-md">
        <image-wrapper 
            v-for="(img, i) in activeStory.images" :key="`img${i}`"
            :src="img.src" :zoom="img.zoom" :bgPos="img.bgPos" :bgSize="img.bgSize" :height="img.height" />
        
        <!-- <image-wrapper 
            v-for="(img, i) in stories[storyIdx].images" :key="`img${i}`"
            :src="img.src" :zoom="img.zoom" :bgPos="img.bgPos" :bgSize="img.bgSize" :height="img.height" /> -->
    </section>
    <section class="story-container">
        <component :is="MarkdownComp" />
    </section>
</template>

<style scoped>
</style>