<script setup>
    import { ref, computed} from 'vue';
    import { useStore } from 'vuex';
    import anime from 'animejs';
    import StoryTooltip from '../components/StoryTooltip.vue';

    const store = useStore();
    const stories = computed(() => store.state.stories);
    const rotationStep = 360/stories.value.length;
    const rotationEnd = ref(0);
    const rotationValue = ref(0);
    let currentAngle = 0;
    let activeStory = ref(0);

    let animation = anime.timeline({
        easing: "cubicBezier(0.645, 0.045, 0.355, 1.000)",
        direction: "normal",
        duration: 2000,
        autoplay: false
    });
    

    const calcAngle = () => {
        activeStory.value = Math.round( Math.random()*stories.value.length );
        const angle = rotationStep*activeStory.value;
        return angle;
    }

    const compassNeedleClick = () => {
        rotationEnd.value = calcAngle();
        currentAngle = rotationValue.value;

        animation.seek(0);
        animation.pause();
        animation.remove(rotationValue);
        animation.delay = 0;
        animation.duration = 0;
      
        animation.add({targets: rotationValue, value:[currentAngle, `+=${rotationEnd.value+Math.floor(Math.random()*4)*360}`], duration:1400});
        animation.restart();
    };


    const animatedRotation = computed ( () => {
        return `transform: rotate(${ rotationValue.value }deg)`
    });

    // watch(rotationEnd, (n) => {
    //     animation.to = n;
    // })


</script>
<template>
    <section class="home-page bg-saarlus-400">
        <svg viewBox="0 0 100 100" class="compass">
            <g transform="translate(50,50)">
                <path v-for="one in 24"
                    :d="polygonpath([
                    { x: 0, y: 10 },
                    { x: 1, y: 45 },
                    { x: -1, y: 45 },
                    { x: 0, y: 10 }
                ])"
                fill="hsla(0 0% 100% / 0.1)"
                :transform="`rotate(${one*(360/24)})`"
                />
            </g>
            <g>
                <circle cx="50" cy="50" r="49" stroke-width="0.5" fill="none" stroke="black" />
                <circle cx="50" cy="50" r="48.4" stroke-width="0.15" fill="none" stroke="black" />
                <circle cx="50" cy="50" r="45.5" stroke-width="0.25" fill="none" stroke="black" />
                <circle cx="50" cy="50" r="44.5" stroke-width="0.15" fill="hsla(0,0%,100%,0.2)" stroke="black" />
                <circle cx="50" cy="50" r="10" stroke-width="0.5" fill="none" stroke="black" />
                
            </g>
            <g transform="translate(50,50)">
                <g transform-origin="50,50" :style="animatedRotation"
                class="compass-needle"
                >
                    <polyline points="0,-45 7,0 0,15 -7,0" />
                    <polyline points="0,-35 5,0 -5,0" fill="white" />
                </g>
            </g>
            <g transform="translate(50,50)" >
                <circle r="9" stroke-width="0.25" fill="none" stroke="black" />
                <circle r="8" fill="black"></circle>
                <circle r="5.5" stroke-width="3" stroke="white" ></circle>
                <circle r="1" fill="white" ></circle>
                <circle r="20" @click="compassNeedleClick" style="cursor:pointer" fill="hsla(0,0%,100%,0)" ></circle>
            </g>
            
            <circle
                v-for="(point, i) in polarpoints(stories.length, 47)"
                :cx="point.x + 50"
                :cy="point.y + 50"
                r="1"
                
                :data-idx="i"
                :key="`point+${i}`"
                @click="activeStory = i"
                
                class="compass-story"
            />
        </svg>

    </section>
    <story-tooltip :storyIdx="activeStory" />
</template>

<style scoped>
    .home-page {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
        background: url(../assets/svg-header.svg) no-repeat 0 0;
        background-size:100% 100%;
    }

    .compass {
        height: 70vmin;
        width: 70vmin;
        /* height: 100%;
        width: auto; */
    }
    .compass-story {
        fill: var(--saarlus-700);
        cursor: pointer;
    }
    .compass-needle {
        transform-origin:50,50;
        pointer-events: none;

    }
</style>