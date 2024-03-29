import { setup } from '@storybook/vue3';
import { withVuetifyTheme } from './withVuetifyTheme.decorator';

// Add Vuetify
import vuetify from '../src/plugins/vuetify';
import i18n from '../src/i18n';
import store from '../src/store';
import Vue3Tour from 'vue3-tour';
function registerPlugins(app) {
    app.use(vuetify).use(i18n).use(store).use(Vue3Tour);
}

setup(app => {
    registerPlugins(app);
});

export const decorators = [withVuetifyTheme];

// Existing code...
const preview = {};

export default preview;
