import { createApp } from 'vue';
import { Fachwerk } from "fachwerk";
import "fachwerk/style.css";
import 'virtual:windi.css';
import './assets/o-styles.css'

import App from './App.vue'
import router from "./router/index.js"
import store from './store/index.js';

import MarkdownWrapper from "./components/MarkdownWrapper.vue";
import DetailsWrapper from "./components/DetailsWrapper.vue";
import ImageWrapper from "./components/ImageWrapper.vue";
import ImageModal from "./components/ImageModal.vue";
import DummySpacer from "./components/DummySpacer.vue";

import IconZoomIn from '~icons/icon-park-outline/zoom-in';
import IconCommunication from '~icons/icon-park-outline/communication';
import IconSources from '~icons/icon-park-outline/document-folder';
import IconTextMessage from '~icons/icon-park-outline/text-message';

const app = createApp(App).use(router).use(store).use(Fachwerk);

app.component('MarkdownWrapper', MarkdownWrapper);
app.component('DetailsWrapper', DetailsWrapper);
app.component('ImageWrapper', ImageWrapper);
app.component('ImageModal', ImageModal);
app.component('DummySpacer', DummySpacer);

app.component('IconZoomIn', IconZoomIn);
app.component('IconCommunication', IconCommunication);
app.component('IconSources', IconSources);
app.component('IconTextMessage', IconTextMessage);

router.isReady().then(() => {
    app.mount('#app');
});
