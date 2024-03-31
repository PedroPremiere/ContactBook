import Index from './index.vue';
import vuetify from '@/plugins/vuetify';
import i18n from '@/i18n';
import store from '@/store';
import { seed } from '@/serviceWorker/seed';
import { randPastDate } from '@ngneat/falso';
import { IContact } from '@/types/contact';

describe('<Index />', () => {
    it('renders all items when sorting by name', () => {
        const items = {
            a: seed([]),
            b: seed([]),
            c: seed([])
        } as Record<string, IContact[]>;
        cy.mount(Index, {
            extensions: { plugins: [vuetify, i18n, store] },
            props: {
                items,
                sort: 'name'
            }
        });

        for (const property in items) {
            cy.get(`[id="contactSeparator${property}"]`).scrollIntoView();
            const separator = cy.get(`[id="contactSeparator${property}"]`);
            separator.should('be.visible');

            for (const subItem of items[property]) {
                cy.get(`[id="card${subItem.id}"]`).scrollIntoView();
                const card = cy.get(`[id="card${subItem.id}"]`);
                card.should('be.visible');
            }
        }
    });

    it('renders all items when sorting by date', () => {
        const items = {} as Record<string, IContact[]>;

        for (let i = 0; i < 4; i++) {
            const date = randPastDate().toUTCString();
            items[date] = seed([]);
        }

        cy.mount(Index, {
            extensions: { plugins: [vuetify, i18n, store] },
            props: {
                items,
                sort: 'date'
            }
        });

        for (const property in items) {
            cy.get(`[id="contactSeparator${property}"]`).scrollIntoView();
            const separator = cy.get(`[id="contactSeparator${property}"]`);
            separator.should('be.visible');

            for (const subItem of items[property] as IContact[]) {
                cy.get(`[id="card${subItem.id}"]`).scrollIntoView();
                const card = cy.get(`[id="card${subItem.id}"]`);
                card.should('be.visible');
            }
        }
    });
});
