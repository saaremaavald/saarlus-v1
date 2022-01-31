import { createApp } from 'vue';
import { Fachwerk } from "fachwerk";
import "fachwerk/style.css";
import 'virtual:windi.css';
import './assets/o-styles.css'

import App from './App.vue'
import router from "./router/index.js"
import store from './store/index.js';

import DetailsWrapper from "./components/DetailsWrapper.vue";
import ImageWrapper from "./components/ImageWrapper.vue";
import IconZoomIn from '~icons/icon-park-outline/zoom-in';
import IconThink from '~icons/icon-park-outline/thinking-problem';

const app = createApp(App).use(router).use(store).use(Fachwerk);

app.component('DetailsWrapper', DetailsWrapper);
app.component('ImageWrapper', ImageWrapper);
app.component('IconZoomIn', IconZoomIn);
app.component('IconThink', IconThink);

router.isReady().then(() => {
    app.mount('#app');
});

