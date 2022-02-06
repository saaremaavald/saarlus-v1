import { createApp } from 'vue';
import { Fachwerk } from "fachwerk";
import "fachwerk/style.css";
import 'virtual:windi.css';
import './assets/o-styles.css'

import App from './App.vue'
import router from "./router/index.js"
import store from './store/index.js';

import DetailsWrapper from "./components/DetailsWrapper.vue";
import DummySpacer from "./components/DummySpacer.vue";
import MarkdownWrapper from "./components/MarkdownWrapper.vue";
import ImageModal from "./components/ImageModal.vue";
import ImageWrapper from "./components/ImageWrapper.vue";
import StoryAuthor from "./components/StoryAuthor.vue";
import StoryDictionary from "./components/StoryDictionary.vue";
import YoutubeWrapper from "./components/YoutubeWrapper.vue";

import IconAuthors from '~icons/icon-park-outline/peoples';
import IconArrowLeft from '~icons/icon-park-outline/left-small';
import IconArrowRight from '~icons/icon-park-outline/right-small';
import IconCaretLeft from '~icons/icon-park-outline/left';
import IconCaretRight from '~icons/icon-park-outline/right';
import IconCommunication from '~icons/icon-park-outline/communication';
import IconSources from '~icons/icon-park-outline/document-folder';
import IconTextMessage from '~icons/icon-park-outline/text-message';
import IconZoomIn from '~icons/icon-park-outline/zoom-in';

const app = createApp(App).use(router).use(store).use(Fachwerk);

app.component('DummySpacer', DummySpacer);
app.component('DetailsWrapper', DetailsWrapper);
app.component('MarkdownWrapper', MarkdownWrapper);
app.component('ImageModal', ImageModal);
app.component('ImageWrapper', ImageWrapper);
app.component('StoryAuthor', StoryAuthor);
app.component('StoryDictionary', StoryDictionary);
app.component('YoutubeWrapper', YoutubeWrapper);

app.component('IconAuthors', IconAuthors);
app.component('IconArrowLeft', IconArrowLeft);
app.component('IconArrowRight', IconArrowRight);
app.component('IconCaretLeft', IconCaretLeft);
app.component('IconCaretRight', IconCaretRight);
app.component('IconCommunication', IconCommunication);
app.component('IconSources', IconSources);
app.component('IconTextMessage', IconTextMessage);
app.component('IconZoomIn', IconZoomIn);

router.isReady().then(() => {
    app.mount('#app');
});
