<script setup>
    import { computed } from "vue";
    import { useStore } from 'vuex';

    const store = useStore();
    const stories = computed(() => store.state.stories);
    
    defineProps( {
        
        storyIdx: {
            type: Number,
            default: 0
        }
    });
</script>

<template>
    <div class="story-tooltip flex gap-5 py-3 px-5 bg-saarlus-700 text-saarlus-50 font-serif font-bold rounded-md">
        {{stories[storyIdx].title}} <button class="font-bold bg-saarlus-300 text-saarlus-800 rounded-sm px-2" @click="$router.push(`/lugu/${stories[storyIdx].slug}`)">LOE</button>
    </div>
</template>

<style scoped>
    .story-tooltip {
        position: absolute;
        left: 50%;
        top:65%;
        transform:translate(-50%, -30%);
        transition: all 0.25s ease-in-out;
    }
</style>