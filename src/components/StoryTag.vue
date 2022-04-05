<script setup>
import {ref} from "vue";
defineProps({
    label: String
});
const amActive = ref(false);
</script>

<template>
    <button @click="amActive = !amActive"
        class="flex items-center px-2 text-xs
        ring-1 ring-inset bg-gray-50 ring-gray-100 text-gray-500 rounded-lg"
        :class="amActive ? 'bg-emerald-600 text-gray-50 ring-emerald-600' : ''"
    >
        {{ label.toUpperCase() }}
    </button>
</template>