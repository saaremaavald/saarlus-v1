<script setup>
    defineProps({
        height: String
    });
</script>
<template>
    <div :style="{
        'height':`${height}`
    }"></div>
</template>