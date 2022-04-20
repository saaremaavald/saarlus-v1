<script setup>
    import { inject } from "vue";
    // import { useStore } from "vuex";
    // import IconButton from "./IconButton.vue";

    const props = defineProps({
        image:String
    });

    //const store = useStore();
    //const modalOpen = ref(computed(() => store.getters.modalOpen));
    //const toggleModal = () => {store.commit("toggleModal", modalOpen.value)};
    const { amOpen, toggleModal } = inject('open');
</script>

<template>

<div class="fixed h-screen w-screen z-110 inset-0 overflow-y-auto" v-if="amOpen" >
    <div class="absolute w-full h-full inset-0 bg-black opacity-75" @click="toggleModal"></div>
    <div class="flex items-center justify-center min-h-screen py-4 px-4 ">
        <div class="relative overflow-hidden transform transition-all " role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div class="rounded-sm p-2 bg-white shadow">
                <div class="absolute right-4 top-4">
                    <button class="bg-white border border-transparent p-2 rounded" @click="toggleModal">
                        <icon-close />
                    </button>
                </div>
                <img 
                    :src="`${props.image}`" 
                    class="max-w-full sm:max-h-[95vh]"
                />
            </div>  
        </div>
    </div>
</div>

</template>