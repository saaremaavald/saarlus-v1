import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "/src/views/HomePage.vue";
import StoryPage from "/src/views/StoryPage.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/lugu/:slug',
        name: 'Lugu',
        component: StoryPage
    }, 
]

const router = createRouter( {
    history: createWebHistory('/saarlus/'),
    routes
});

export default router;