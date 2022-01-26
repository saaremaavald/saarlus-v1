<script setup>

import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)

</script>

<template>
  <!-- <nav class="flex flex-row p-1 bg-blue">
    <h1 class="font-saaremaa text-2xl font-bold">Saaremaa</h1>
    <button type="button" @click="count++">count is: {{ count }}</button>
  </nav> -->
  
<nav class="flex bg-white flex-wrap items-center justify-between p-4">
    <div class="lg:order-2 w-auto lg:w-1/5 lg:text-center">
        <a class="text-xl text-gray-800 font-semibold font-heading font-saaremaa" href="/">
            Saarlus
        </a>
    </div>
    <div class="block lg:hidden">
        <button class="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>
                    Menu
                </title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                </path>
            </svg>
        </button>
    </div>
    <div class="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
        <a class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="/lugu/1">
            Lugu 1
        </a>
        <a class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="/lugu/2">
            Lugu 2
        </a>
    </div>
    <div class="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
        <a class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="/lugu/3">
            Lugu 3
        </a>
        <a class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="/lugu/4">
            Lugu 4
        </a>
    </div>
</nav>

</template>

<style scoped>

</style>
