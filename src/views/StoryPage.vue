<script>

import { computed, onMounted, ref, shallowRef } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
    setup(){
        const router = useRouter();
        const route = useRoute();
        const store = useStore();
        const stories = ref(store.state.stories);
        const storyId = computed(() => route.params.id);
        const storyContent = shallowRef();
            
        onMounted(async () => {
            await router.isReady();
            try {
                storyContent.value = (await import(`../content/${stories.value[storyId.value-1].file}.md`)).default;
            } catch(err) {
                console.error("ERRORZ: ", err); 
            }
        });

        return {
            stories, storyId, storyContent
        }
    }


}


    
    // onMounted( () => {
    //     // await router.isReady();
    //     storyContent = import(`../content/${stories[storyId-1].file}.md`);
        
    // });

    // (await import(`@/posts/${this.slug}/index.vue`)).default;
</script>

<template>
    <h1 class="font-saaremaa text-5xl font-bold">{{stories[storyId-1].title}}</h1>
    <div v-if="storyContent != null">
        <component :is="storyContent" />
    </div>
</template>

<style scoped>
    
</style>