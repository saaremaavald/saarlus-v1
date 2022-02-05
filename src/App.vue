<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import Test from './content/test.md';
import NaviMain from './components/NaviMain.vue'
import NaviStoriesList from './components/NaviStoriesList.vue';
</script>

<template>

<navi-main />

<div class="flex">
  <navi-stories-list />
  <div class="flex flex-col">
    <router-view :key="$route.path" />
  </div>
</div>
<!-- <div class="flex md: < flex-col lg:flex-row justify-center items-center p-10"> -->

</template>

<style>

#app {
  /* font-family: rampart; */
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
