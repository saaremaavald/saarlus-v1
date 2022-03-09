<script setup>
    import { ref,computed } from "vue";
    import { useStore } from "vuex";

    defineProps({
        image:String
    });

    const store = useStore();
    const modalOpen = ref(computed(() => store.getters.modalOpen));
    const toggleModal = () => {store.commit("toggleModal", modalOpen.value)};
</script>

<template>

<div class="fixed h-screen w-screen z-110 inset-0 overflow-y-auto " v-if="modalOpen">
    <div class="absolute w-full h-full inset-0 bg-black opacity-75" @click="toggleModal"></div>
    <div class="flex items-center justify-center min-h-screen py-4 px-4 ">
        <div class="relative overflow-hidden transform transition-all " role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div class="rounded-sm p-2 bg-white shadow">
                <div class="absolute right-4 top-4">
                    <button class="bg-transparent border border-transparent" @click="toggleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-6 w-6 text-gray-700" viewBox="0 0 1792 1792">
                            <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z">
                            </path>
                        </svg>
                    </button>
                </div>
                <img 
                    :src="`${image}`" 
                    class="max-w-full sm:max-h-[95vh]"
                />
            </div>  
        </div>
    </div>
</div>

</template>