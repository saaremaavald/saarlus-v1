<script setup>
    import { computed } from "vue";
    import { useStore } from 'vuex';

    const store = useStore();
    const stories = computed(() => store.state.stories);
    
    defineProps( {
        
        storyIdx: {
            type: Number,
            default: 0
        },
        pos: {
            type: Object,
            default: {
                top: 0,
                left:0
            }
        }
    });
</script>

<template>
    <div class="story-tooltip absolute flex gap-5 py-3 px-5 bg-saarlus-800 text-saarlus-100 font-serif font-bold rounded-md">
        {{stories[storyIdx].title}} <button class="font-bold bg-saarlus-300 text-saarlus-800 rounded-sm px-2" @click="$router.push(`/lugu/${stories[storyIdx].slug}`)">LOE</button>
    </div>
</template>

<style scoped>
    .story-tooltip {
        margin-left: auto;
        margin-right: auto;
    }
</style>