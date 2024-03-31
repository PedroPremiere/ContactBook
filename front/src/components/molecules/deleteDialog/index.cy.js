import Index from './index.vue';
import vuetify from '@/plugins/vuetify';
import i18n from '@/i18n';
import store from '@/store';
import { contactSeeder } from '@/seeders/contactSeeder';
import { expect } from '@storybook/test';

describe('<Index />', () => {
    it('delete dialog is hidden when open is false', () => {
        cy.mount(Index, { extensions: { plugins: [vuetify, i18n, store] } });
        const deleteDialog = cy.get('[data-cy="deleteDialog"]');

        deleteDialog.should('not.exist');
    });

    it('delete dialog is visible when open is true', () => {
        const contact = contactSeeder();
        store.commit('selectItemForDeleteModal', contact);

        cy.mount(Index, {
            props: { open: true },
            extensions: { plugins: [vuetify, i18n, store] }
        });
        const deleteDialog = cy.get('[data-cy="deleteDialog"]');

        deleteDialog.invoke('text').should('contain', contact.name);
    });

    it('deleteDialogCloseButton button emits close', () => {
        const contact = contactSeeder();
        store.commit('selectItemForDeleteModal', contact);
        cy.mount(Index, {
            props: { open: true },
            extensions: { plugins: [vuetify, i18n, store] }
        });
        const deleteDialogCloseButton = cy.get(
            '[data-cy="deleteDialogCloseButton"]'
        );

        deleteDialogCloseButton.should('be.visible');

        deleteDialogCloseButton.click().then(() => {
            cy.wrap(Cypress.vueWrapper.emitted()).should(
                'have.property',
                'close'
            );
        });

        const deleteDialog = cy.get('[data-cy="deleteDialog"]');

        deleteDialog.invoke('text').should('contain', contact.name);
    });

    it('deleteDialogConfirmButton button removes item', () => {
        cy.intercept('/api/**', {
            statusCode: 200,
            body: { ok: 'ok' }
        }).as('interceptor');
        // see: https://on.cypress.io/mounting-vue

        const contact = contactSeeder();
        store.commit('selectItemForDeleteModal', contact);
        store.commit('setContacts', [contact]);
        cy.mount(Index, {
            props: { open: true },
            extensions: { plugins: [vuetify, i18n, store] }
        });
        const deleteDialogConfirmButton = cy.get(
            '[data-cy="deleteDialogConfirmButton"]'
        );

        deleteDialogConfirmButton.should('be.visible');

        const deleteDialog = cy.get('[data-cy="deleteDialog"]');

        deleteDialog.invoke('text').should('contain', contact.name);

        deleteDialogConfirmButton.click().then(() => {
            const isDeletedModalOpen = store.getters.isDeleteModalOpen;
            expect(isDeletedModalOpen).toBe(false);

            const seletedForDelete = store.getters.selectedItemForDelete;
            expect(seletedForDelete).toStrictEqual({});

            cy.wait('@interceptor').then(() => {
                const items = store.getters.items;
                expect(items).toStrictEqual([]);
            });
        });
    });
});
