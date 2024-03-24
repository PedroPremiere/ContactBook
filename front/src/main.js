import 'vuetify/styles'
import { createApp } from "vue";
import vuetify from './plugins/vuetify';
import App from "./App.vue";
import i18n from './i18n'
import store from '@/store'

createApp(App).use(i18n).use(vuetify).use(store).mount("#app");
