<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex';

    const router = useRoute();
    const store = useStore();
    const stories = computed(() => store.state.stories);

    const storyId = computed(() => router.params.id);
</script>

<template>
    <div>
        <h1 class="font-saaremaa text-5xl font-bold">{{stories[storyId-1].title}}</h1>

    </div>
</template>

<style scoped>
    
</style>