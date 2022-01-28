<script>

import { computed, ref, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {
    props:{
        origin: String,
        frontmatter: Object
    },
    setup(){
        const route = useRoute();
        const store = useStore();
        const stories = ref(store.state.stories);
        const storySlug = computed(() => route.params.slug);
        const storyIdx = ref(stories.value.findIndex(story => story.slug === storySlug.value));
        const MarkdownComp = defineAsyncComponent(() => import(`../content/${storySlug.value}.md`));

        return {
            stories, storySlug, storyIdx, MarkdownComp
        }
    }
}
</script>

<template>
    <section class="story-header flex items-stretch ">
        <image-wrapper 
            v-for="(img, i) in stories[storyIdx].images" :key="`img${i}`"
            :src="img.src" :zoom="img.zoom" />
    </section>
    <section class="story-container">
        <component :is="MarkdownComp" />
        <!-- <markdown-comp></markdown-comp> -->
    </section>
</template>

<style scoped>
</style>