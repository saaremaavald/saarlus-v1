<script setup>
    import { computed } from 'vue';
    // import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    // const router = useRouter();
    const store = useStore();
    const stories = computed(() => store.state.stories);

</script>
<template>
    <section class="home-page">
        <svg viewBox="0 0 100 100" class="compass">
            <circle
                v-for="(point, i) in polarpoints(stories.length, 45)"
                :cx="point.x + 50"
                :cy="point.y + 50"
                r="2"
                fill="skyblue"
                :data-idx="i"
                :key="`point+${i}`"
                @click="$router.push(`/lugu/${stories[i].slug}`)"
                class="compass-story"
            />
        </svg>
    </section>
</template>

<style scoped>
    .home-page {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
    }

    .compass {
        height: 80vmin;
        width: 80vmin;
    }
    .compass-story {
        cursor: pointer;
    }
</style>