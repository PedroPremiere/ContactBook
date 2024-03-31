import Index from './index.vue';
import vuetify from '@/plugins/vuetify';
import i18n from '@/i18n';
import store from '@/store';
import { expect } from '@storybook/test';

describe('<Index />', () => {
    it('renders all items', () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(Index, { extensions: { plugins: [vuetify, i18n, store] } });

        const sortingMenu = cy.get('[data-cy="sortingMenu"]');
        sortingMenu.should('be.visible');

        const sortingMenuSortByName = cy.get(
            '[data-cy="sortingMenuSortByName"]'
        );
        sortingMenuSortByName.should('be.visible');

        const sortingMenuSortByDate = cy.get(
            '[data-cy="sortingMenuSortByDate"]'
        );
        sortingMenuSortByDate.should('be.visible');
    });

    it('sortingMenuSortByName emits setSorting', () => {
        // see: https://on.cypress.io/mounting-vue
        const onSetSorting = cy.spy().as('onSetSorting');
        cy.mount(Index, {
            extensions: { plugins: [vuetify, i18n, store] },
            props: {
                onSetSorting: onSetSorting
            }
        });

        const sortingMenu = cy.get('[data-cy="sortingMenu"]');
        sortingMenu.should('be.visible');

        const sortingMenuSortByName = cy.get(
            '[data-cy="sortingMenuSortByName"]'
        );
        sortingMenuSortByName.should('be.visible');

        sortingMenuSortByName.click().then(() => {
            cy.get('@onSetSorting').should('have.been.calledWith', 'name');
        });
    });

    it('sortingMenuSortByDate emits setSorting', () => {
        // see: https://on.cypress.io/mounting-vue
        const onSetSorting = cy.spy().as('onSetSorting');
        cy.mount(Index, {
            extensions: { plugins: [vuetify, i18n, store] },
            props: {
                onSetSorting: onSetSorting
            }
        });

        const sortingMenu = cy.get('[data-cy="sortingMenu"]');
        sortingMenu.should('be.visible');

        const sortingMenuSortByDate = cy.get(
            '[data-cy="sortingMenuSortByDate"]'
        );
        sortingMenuSortByDate.should('be.visible');

        sortingMenuSortByDate.click().then(() => {
            cy.get('@onSetSorting').should('have.been.calledWith', 'date');
        });
    });
});
