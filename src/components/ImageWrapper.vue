
<script setup>
    import {ref} from "vue";

    defineProps({
        src : { type: String },
        height : {type: String, default: "85vh" },
        classes: {type:String, default:""},
        bgSize: {type:String, default:"cover"},
        bgRepeat: {type:String, default:"no-repeat"},
        bgPos: {type:String, default:"50% 50%"},
        zoom: {type:Boolean, default:false}
    });

    const modalOpen = ref(false);

    // const openImage = () => {

    // }

</script>


<template>
    <div class="flex justify-center items-center"
    :style="{
        'background-image':`url(../images/stories/${src})`,
        'background-size' : bgSize, 
        'background-repeat' : bgRepeat, 
        'background-position' : bgPos, 
        'height':height, 
        'width':'100%'
    }"
    ><div class="flex justify-center items-center w-full h-full cursor-pointer hover:(bg-gray-900/70) transition" v-if="zoom" @click="modalOpen = !modalOpen">ZOOM</div></div>
    
<teleport to="#teleport-modal">  

    <div class="fixed h-screen w-screen z-10 inset-0 overflow-y-auto " v-if="modalOpen">
        <div class="absolute w-full h-full inset-0 bg-black opacity-75" @click="modalOpen = !modalOpen">
        </div>
        <div class="flex items-center justify-center min-h-screen py-4 px-4 ">
            <!-- <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span> -->
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
                            class="max-h-screen"
                        />
                    </div>
                
            </div>
        </div>
    </div>

</teleport>


</template>


<style scoped>
    .zoomable:hover {
        background: hsla(0, 0%, 0%, 0.5)
    }
</style>