import Index from './index.vue';
import vuetify from '@/plugins/vuetify';
import store from '@/store';
import i18n from '@/i18n';
import { seed } from '@/serviceWorker/seed';

describe('<Index />', () => {
    it('renders', () => {
        //todo add more tests
        const contacts = seed([]);
        store.commit('setContacts', contacts);
        cy.mount(Index, {
            extensions: { plugins: [vuetify, store, i18n] }
        });

        for (const subItem of contacts) {
            cy.get(`[id="card${subItem.id}"]`).scrollIntoView();
            const card = cy.get(`[id="card${subItem.id}"]`);
            card.should('be.visible');
        }
    });
});
