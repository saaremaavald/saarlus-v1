<script setup>
    import { ref,computed } from "vue";
    import { useStore } from "vuex";

    
import NaviMain from './components/NaviMain.vue'
import NaviStoriesList from './components/NaviStoriesList.vue';
import IconButton from './components/IconButton.vue'
const store = useStore();
    const menuOpen = ref(computed(() => store.getters.menuOpen));
    const toggleMenu = () => {store.commit("toggleMenu", menuOpen.value)};
// const menuOpen = ref(false);

</script>

<template>
<navi-main class="sticky top-0 z-100"  />

<div class="grid grid-cols-12">
  <div class="
    fixed bottom-0 w-full bg-green-100 px-4 
    sm:(static min-h-full)
    ">
    <nav class="
      flex flex-row justify-around items-center gap-6 py-2
      sm:(sticky top-20 flex-col justify-start justify-items-stretch py-12 px-2)">
      <icon-button label="LIST" icon="IconList" @click="toggleMenu" />
      <icon-button label="SILDID" icon="IconTagOne" />
      <icon-button label="WOOT" icon="IconList" />
    </nav>
  </div>
  <div class="col-start-1 col-span-12 sm:(col-start-2 col-span-11)">    
    <router-view :key="$route.path" />
  </div>
</div>

<teleport to="#teleport-modal">  
    <div v-if="menuOpen">
        <navi-stories-list />
    </div>
</teleport>

</template>
