import 'vuetify/styles';
import { createApp } from 'vue';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import i18n from './i18n';
import store from '@/store';
import Vue3Tour from 'vue3-tour';
import 'vue3-tour/dist/vue3-tour.css';

createApp(App).use(i18n).use(vuetify).use(store).use(Vue3Tour).mount('#app');
