<script setup>
    import {ref, computed} from "vue";
    import { useStore } from "vuex";

    defineProps({
        src : { type: String },
        height : {type: String, default: "75vh" },
        classes: {type:String, default:""},
        bgSize: {type:String, default:"cover"},
        bgRepeat: {type:String, default:"no-repeat"},
        bgPos: {type:String, default:"50% 50%"},
        zoom: {type:Boolean, default:false}
    });

    const store = useStore();
    const modalOpen = ref(computed(() => store.getters.modalOpen));
    const toggleModal = () => {store.commit("toggleModal", modalOpen.value)};

</script>

<template>
    <div class="flex justify-center items-center bg-gradient-to-b from-blue-800 via-green-600 to-blue-700 shadow"
    :style="{
        // 'background':`url(../images/stories/${src}), linear-gradient(to bottom, rgba(29,78,216,1), rgba(245, 158, 11, 1), rgba(4, 120, 87, 1))`,
        'background':`url(../images/stories/${src})`,
        'background-size' : bgSize, 
        'background-repeat' : bgRepeat, 
        'background-position' : bgPos, 
        'height':height, 
        'width':'100%',
        'background-blend-mode': 'overlay'
    }"
    >
        <div class="zoomable flex justify-center items-center w-full h-full cursor-pointer hover:(bg-saarlus-700/40) transition" v-if="zoom" @click="toggleModal">
            <div class="icon flex justify-center items-center w-16 h-16 rounded-2xl bg-saarlus-800/80 opacity-0 transition">
                <icon-zoom-in class="svg text-white stroke-current scale-150" style="transform: scale(2)" />
            </div>
        </div>
    </div>
    
<teleport to="#teleport-modal">  

    <div v-if="modalOpen">
        <image-modal :image="`../images/stories/${src}`" />
    </div>
    <!-- <div class="fixed h-screen w-screen z-10 inset-0 overflow-y-auto " v-if="modalOpen">
        <div class="absolute w-full h-full inset-0 bg-black opacity-75" @click="modalOpen = !modalOpen">
        </div>
        <div class="flex items-center justify-center min-h-screen py-4 px-4 ">
           <div class="relative overflow-hidden transform transition-all " role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                
                    <div class="rounded-sm p-2 bg-white shadow">
                        <div class="absolute right-4 top-4">
                            <button class="bg-transparent border border-transparent" @click="modalOpen = !modalOpen">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-6 w-6 text-gray-700" viewBox="0 0 1792 1792">
                                    <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <img 
                            :src="`../images/stories/${src}`" 
                            class="max-w-full sm:max-h-[95vh]"
                        />
                    </div>
                
            </div>
        </div>
    </div> -->
</teleport>

</template>

<style scoped>
    .zoomable:hover>.icon {
        opacity: 1;
    }
</style>