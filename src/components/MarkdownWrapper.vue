<script setup>
    import { onMounted } from "vue";
import { useStore } from "vuex";
    const props = defineProps(["frontmatter"]);
    const store = useStore();
    onMounted(() => {
        store.commit('setActiveStory', props.frontmatter);
    });
</script>

<template>
    <div>
        <!-- AUTHOR {{frontmatter.author}} -->
        <slot></slot>
    </div>
</template>