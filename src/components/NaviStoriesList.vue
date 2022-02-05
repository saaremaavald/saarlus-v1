<script setup>

import {ref} from "vue";
import { useStore } from 'vuex';
const store = useStore();
const stories = ref(store.state.stories);

</script>

<template>
    <ul>
        <li v-for="story in stories" :key="story.slug">
            <router-link :to="`/lugu/${story.slug}`">{{story.title}}</router-link>
        </li>
    </ul>
</template>