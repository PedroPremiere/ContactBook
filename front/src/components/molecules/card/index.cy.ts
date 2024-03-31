import MyCard from './index.vue';
import vuetify from '@/plugins/vuetify';
import store from '@/store';
import { expect } from '@storybook/test';
import { seed } from '@/serviceWorker/seed';

//todo add i18n tests
describe('<Index />', () => {
    it('renders all elements', () => {
        const contacts = seed([]);
        const contact = contacts[0];

        store.commit('setContacts', contacts);
        cy.mount(MyCard, {
            props: { contact },
            extensions: { plugins: [vuetify, store] }
        });

        const card = cy.get('[data-cy="card"]');
        card.should('be.visible');

        const avatar = card.get('[data-cy="avatar"]');
        avatar.should('be.visible');

        //todo visible only on lg
        const cardDates = cy.get('[data-cy="cardDates"]');
        cardDates.should('not.be.visible');
    });

    it('cardMenuRemoveButton save data to store', () => {
        const contacts = seed([]);
        const contact = contacts[0];

        store.commit('setContacts', contacts);
        cy.mount(MyCard, {
            props: { contact },
            extensions: { plugins: [vuetify, store] }
        });

        const cardMenuRemoveButton = cy.get('[data-cy="cardMenuRemoveButton"]');

        cardMenuRemoveButton.click().then(() => {
            const isDeleteModalOpen = store.getters.isDeleteModalOpen;

            expect(isDeleteModalOpen).toBe(true);
        });
    });

    it('cardMenuEditButton save data to store', () => {
        const contacts = seed([]);
        const contact = contacts[0];

        store.commit('setContacts', contacts);
        cy.mount(MyCard, {
            props: { contact },
            extensions: { plugins: [vuetify, store] }
        });

        const cardMenuEditButton = cy.get('[data-cy="cardMenuEditButton"]');

        cardMenuEditButton.click().then(() => {
            const isEditModalOpen = store.getters.isEditModalOpen;

            expect(isEditModalOpen).toBe(true);
        });
    });

    it('cardMenuAddToFavoriteButton save data to store', () => {
        const contacts = seed([]);
        const contact = contacts[0];

        store.commit('setContacts', contacts);
        cy.mount(MyCard, {
            props: { contact },
            extensions: { plugins: [vuetify, store] }
        });

        const cardMenuAddToFavoriteButton = cy.get(
            '[data-cy="cardMenuAddToFavoriteButton"]'
        );

        cardMenuAddToFavoriteButton.click().then(() => {
            const items = store.getters.items;

            expect(items[0].favorite).toBe(true);
        });
    });
});
