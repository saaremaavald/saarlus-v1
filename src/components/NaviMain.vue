<script setup>

import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)

</script>

<template>
  <nav class="flex flex-row p-1 bg-blue">
    <h1 class="font-saaremaa text-2xl font-bold">Saaremaa</h1>
    <button type="button" @click="count++">count is: {{ count }}</button>
  </nav>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
