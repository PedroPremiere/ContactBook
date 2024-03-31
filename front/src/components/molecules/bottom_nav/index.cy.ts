import MyBottom from './index.vue';
import vuetify from '@/plugins/vuetify';
import i18n from '@/i18n';
import store from '@/store';
import { VApp } from 'vuetify/components';
import { h } from 'vue';
import { expect } from '@storybook/test';

describe('<MyBottom />', () => {
    it('renders all items', () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(VApp, {
            slots: {
                default: h(MyBottom)
            },
            extensions: { plugins: [vuetify, i18n, store] }
        });

        const bottomNav = cy.get('[data-cy="bottomNav"]');
        bottomNav.should('be.visible');

        const bottomNavFavoriteOnly = cy.get(
            '[data-cy="bottomNavFavoriteOnly"]'
        );
        bottomNavFavoriteOnly.should('be.visible');

        const bottomNavAllContacts = cy.get('[data-cy="bottomNavAllContacts"]');
        bottomNavAllContacts.should('be.visible');

        const bottomNavAddNew = cy.get('[data-cy="bottomNavAddNew"]');
        bottomNavAddNew.should('be.visible');
    });

    it('bottomNavFavoriteOnly changes store ', () => {
        // see: https://on.cypress.io/mounting-vue
        const favoritesOnly = store.getters.favoritesOnly;
        expect(favoritesOnly).toBe(false);

        cy.mount(VApp, {
            slots: {
                default: h(MyBottom)
            },
            extensions: { plugins: [vuetify, i18n, store] }
        });

        const bottomNavFavoriteOnly = cy.get(
            '[data-cy="bottomNavFavoriteOnly"]'
        );
        bottomNavFavoriteOnly.should('be.visible');
        bottomNavFavoriteOnly.click().then(() => {
            const favoritesOnly = store.getters.favoritesOnly;
            expect(favoritesOnly).toBe(true);
        });
    });

    it('bottomNavAllContacts changes store ', () => {
        // see: https://on.cypress.io/mounting-vue
        const favoritesOnly = store.getters.favoritesOnly;
        expect(favoritesOnly).toBe(true);

        cy.mount(VApp, {
            slots: {
                default: h(MyBottom)
            },
            extensions: { plugins: [vuetify, i18n, store] }
        });

        const bottomNavAllContacts = cy.get('[data-cy="bottomNavAllContacts"]');
        bottomNavAllContacts.should('be.visible');
        bottomNavAllContacts.click().then(() => {
            const favoritesOnly = store.getters.favoritesOnly;
            expect(favoritesOnly).toBe(false);
        });
    });
});
