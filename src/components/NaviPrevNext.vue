<script setup>

import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)

</script>

<template>
<nav class="flex items-center justify-between p-4">
    <button >Eelmine</button>
    <button >Järgmine</button>
</nav>

</template>

<style scoped>

</style>
