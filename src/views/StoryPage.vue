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
        const MarkdownComp = defineAsyncComponent(() => import(`../content/${storySlug.value}.md`));
        // const origin = ref(MarkdownComp.value.frontmatter.origin);

        return {
            stories, storySlug, MarkdownComp
        }
    }
}
</script>

<template>
    <section class="story-header">
       ASAS {{frontmatter}}
    </section>
    <section class="story-container">
        <component :is="MarkdownComp" />
        <!-- <markdown-comp></markdown-comp> -->
    </section>
</template>

<style scoped>
</style>