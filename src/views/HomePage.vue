<script setup>
    import { ref, computed } from 'vue';
    // import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    // import anime from 'animejs';

    // const router = useRouter();
    const store = useStore();
    const stories = computed(() => store.state.stories);

    // let animation = anime.timeline({
    //   // easing: "easeInOutCubic",
    //    easing: "cubicBezier(0.645, 0.045, 0.355, 1.000)",
    //   direction: "normal",
    //   duration: 1400,
    //   autoplay: false
    // });
    
    const rot = ref(0);

    const compassNeedleClick = () => {
        const step = 360/stories.value.length;
        const randomStory = Math.round( Math.random()*stories.value.length );
        
        const direction = step*randomStory;
        // animation.add({targets: rot.value, value:direction});
        // animation.play();
        // console.log("DIR" + direction);
        rot.value = direction;
    };


    const animatedRotation = computed ( () => {
        return `transform: rotate(${ rot.value }deg)`
    });

</script>
<template>
    <section class="home-page bg-saarlus-400">
        <svg viewBox="0 0 100 100" class="compass">
            <g @click="compassNeedleClick">
                <circle cx="50" cy="50" r="49" stroke-width="0.5" fill="none" stroke="black" />
                <circle cx="50" cy="50" r="48.4" stroke-width="0.15" fill="none" stroke="black" />
                <circle cx="50" cy="50" r="45.5" stroke-width="0.25" fill="none" stroke="black" />
                <circle cx="50" cy="50" r="44.5" stroke-width="0.15" fill="hsla(0,0%,100%,0.2)" stroke="black" />
                <circle cx="50" cy="50" r="9" stroke-width="0.5" fill="none" stroke="black" />
                <circle cx="50" cy="50" r="10" stroke-width="0.25" fill="none" stroke="black" />
            </g>
            <g transform="translate(50,50)">
                <g transform-origin="50,50" :style="animatedRotation"
                class="compass-needle"
                >
                    <polyline points="0,-45 7,0 0,15 -7,0" />
                    <polyline points="0,-35 5,0 -5,0" fill="white" />
                    <circle r="8" fill="black"></circle>
                    <circle r="5.5" stroke-width="3" stroke="white" ></circle>
                    <circle r="1" fill="white" ></circle>
                </g>
            </g>
            <circle
                v-for="(point, i) in polarpoints(stories.length, 47)"
                :cx="point.x + 50"
                :cy="point.y + 50"
                r="1"
                fill="var(--saarlus-700)"
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
        cursor: pointer;
    }
    .compass-story {
        cursor: pointer;
    }
    .compass-needle {
        transform-origin:50,50;
        pointer-events: none;

    }
</style>