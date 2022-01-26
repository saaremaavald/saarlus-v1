import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "/src/views/HomePage.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/lugu/:id',
        name: 'Lugu',
        component: () => import('../views/StoryPage.vue'),
    }, 
]

const router = createRouter( {
    history: createWebHistory(),
    routes
});

export default router;