<script setup>
    import { ref, computed, watch} from 'vue';
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
        // activeStory.value = Math.round( Math.random()*stories.value.length );
        const angle = rotationStep*activeStory.value-rotationValue.value;
        return angle;
    }

    const compassNeedleClick = () => {
        activeStory.value = Math.round( Math.random()*stories.value.length );
    };

    const compassNeedleTurn = () => {
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

    watch(activeStory, (n) => {
        compassNeedleTurn();
    })


</script>
<template>
    <section class="home-page bg-saarlus-100
    flex flex-col justify-around 
    h-[90vh]
    px-[8vw]
    gap-0
    md:(flex-row gap-6)">
        <div class="flex flex-col justify-center order-2 grow text-center md:(order-1 text-left)">
            <h1 class="font-saaremaa text-saarlus-700 text-5xl md:text-[6vw]">
                Saarlus.<br>Mis see veel on?
            </h1>
            <p class="font-serif">Siit leiad sa hulga materjale, mis aitavad sul saarlust paremini mõista. Alustuseks võid lihtsalt kompassil klikkida või valida sobiv lugu nimekirjast</p>
        </div>
        <div class="relative flex grow-0 justify-center items-center order-1 md:order-2 ">
            <svg viewBox="0 0 100 100" 
            class="h-[70vmin] w-[70vmin]
            md:(h-[70vmin] w-[70vmin])">
                <g transform="translate(50,50)">
                    <path v-for="one in 24"
                        :d="polygonpath([
                        { x: 0, y: 10 },
                        { x: 1, y: 45 },
                        { x: -1, y: 45 },
                        { x: 0, y: 10 }
                    ])"
                    fill="hsla(0 0% 100% / 0.2)"
                    :transform="`rotate(${one*(360/24)})`"
                    />
                </g>
                <g>
                    <!-- <circle cx="50" cy="50" r="49" stroke-width="0.5" fill="none" stroke="white" /> -->
                    <!-- <circle cx="50" cy="50" r="48.4" stroke-width="0.15" fill="none" stroke="white" /> -->
                    <circle cx="50" cy="50" r="45" stroke-width="2" fill="none" stroke="white" />
                    <!-- <circle cx="50" cy="50" r="44.5" stroke-width="0.15" fill="hsla(0,0%,100%,0.2)" stroke="white" /> -->
                    <circle cx="50" cy="50" r="10" stroke-width="0.5" fill="none" stroke="black" />
            
                </g>
                <!-- compass needle -->
                <g transform="translate(50,50)">
                <g  :style="animatedRotation">
                    <polyline points="0,-45 7,0 0,15 -7,0" />
                    <polyline points="0,-35 5,0 -5,0" fill="white" />
                    <circle r="9" stroke-width="0.25" fill="none" stroke="black" />
                    <circle r="8" fill="black"></circle>
                    <circle r="6.5"  fill="white" ></circle>
                    <path
                        :d="arcpath(0, 272, 3, 4, 0)"
                        fill="black"
                        stroke="none"
                    />
                    <path :d="polygonpath([
                        { x: 0, y: 0 },
                        { x: 3, y: 0 },
                        { x: 1.5, y: -2 }
                    ])"
                    fill="black"
                    transform="translate(-5,0)"
                    />
                </g>
                </g>
                <!-- invisible click area -->
                <g transform="translate(50,50)">
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
            <story-tooltip :storyIdx="activeStory" />
        </div>

    </section>
    
</template>

<style scoped>
    .home-page {
        background-image: url(../assets/svg-header-bottom.svg);
        background-repeat: no-repeat;
        background-size:100% 30%;
        background-position: 0 100%;
    }

    /* .compass {
        height: 70vmin;
        width: 70vmin;
    } */
    .compass-story {
        fill: var(--saarlus-700);
        cursor: pointer;
    }
    .compass-needle {
        /* transform-origin:50,50; */
        pointer-events: none;
    }

    
</style>