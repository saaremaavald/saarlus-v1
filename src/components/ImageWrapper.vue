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
        <image-modal :image="`../images/stories/${src}`" :key="src" />
    </div>
</teleport>

</template>

<style scoped>
    .zoomable:hover>.icon {
        opacity: 1;
    }
</style>