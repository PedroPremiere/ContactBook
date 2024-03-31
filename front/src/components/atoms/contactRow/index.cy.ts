import Index from './index.vue';
import vuetify from '@/plugins/vuetify';
import i18n from '@/i18n';
import store from '@/store';
import { seed } from '@/serviceWorker/seed';

describe('<Index />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-vue

        cy.viewport(1000, 1000);

        const items = seed([], 3);

        cy.mount(Index, {
            extensions: { plugins: [vuetify, i18n, store] },
            props: { items }
        });

        const contactRow = cy.get('[data-cy="contactRow"]');
        contactRow.should('be.visible');

        for (const item of items) {
            const card = cy.get(`[id="card${item.id}"]`);
            card.should('be.visible');
        }
    });
});
