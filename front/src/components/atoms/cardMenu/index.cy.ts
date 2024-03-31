import CardMenu from './index.vue';
import vuetify from '@/plugins/vuetify';

describe('<Index />', () => {
    it('renders all items but not cardMenuRemoveFromFavoriteButton when favorite is false', () => {
        cy.mount(CardMenu, { extensions: { plugins: [vuetify] } });

        const cardMenuContainer = cy.get('[data-cy="cardMenuContainer"]');
        cardMenuContainer.should('be.visible');

        const cardMenuAddToFavoriteButton = cardMenuContainer.get(
            '[data-cy="cardMenuAddToFavoriteButton"]'
        );

        cardMenuAddToFavoriteButton.should('be.visible');

        const cardMenuRemoveFromFavoriteButton = cardMenuContainer.get(
            '[data-cy="cardMenuRemoveFromFavoriteButton"]'
        );
        cardMenuRemoveFromFavoriteButton.should('not.exist');

        const cardMenuEditButton = cardMenuContainer.get(
            '[data-cy="cardMenuEditButton"]'
        );

        cardMenuEditButton.should('be.visible');

        const cardMenuRemoveButton = cardMenuContainer.get(
            '[data-cy="cardMenuRemoveButton"]'
        );

        cardMenuRemoveButton.should('be.visible');
    });

    it('renders all items but not cardMenuAddToFavoriteButton when favorite is true', () => {
        cy.mount(CardMenu, {
            props: { favorite: true },
            extensions: { plugins: [vuetify] }
        });

        const cardMenuContainer = cy.get('[data-cy="cardMenuContainer"]');
        cardMenuContainer.should('be.visible');

        const cardMenuAddToFavoriteButton = cardMenuContainer.get(
            '[data-cy="cardMenuAddToFavoriteButton"]'
        );

        cardMenuAddToFavoriteButton.should('not.exist');

        const cardMenuRemoveFromFavoriteButton = cardMenuContainer.get(
            '[data-cy="cardMenuRemoveFromFavoriteButton"]'
        );
        cardMenuRemoveFromFavoriteButton.should('be.visible');

        const cardMenuEditButton = cardMenuContainer.get(
            '[data-cy="cardMenuEditButton"]'
        );

        cardMenuEditButton.should('be.visible');

        const cardMenuRemoveButton = cardMenuContainer.get(
            '[data-cy="cardMenuRemoveButton"]'
        );

        cardMenuRemoveButton.should('be.visible');
    });

    it('cardMenuRemoveButton emits openDeleteDialog after it is clicked', () => {
        cy.mount(CardMenu, { extensions: { plugins: [vuetify] } });

        const cardMenuRemoveButton = cy.get('[data-cy="cardMenuRemoveButton"]');

        cardMenuRemoveButton.click().then(() => {
            cy.wrap(Cypress.vueWrapper.emitted()).should(
                'have.property',
                'openDeleteDialog'
            );
        });
    });

    it('cardMenuEditButton emits openEditDialog after it is clicked', () => {
        cy.mount(CardMenu, { extensions: { plugins: [vuetify] } });

        const cardMenuRemoveButton = cy.get('[data-cy="cardMenuEditButton"]');

        cardMenuRemoveButton.click().then(() => {
            cy.wrap(Cypress.vueWrapper.emitted()).should(
                'have.property',
                'openEditDialog'
            );
        });
    });

    it('cardMenuAddToFavoriteButton emits editFavorite after it is clicked', () => {
        cy.mount(CardMenu, { extensions: { plugins: [vuetify] } });

        const cardMenuRemoveButton = cy.get(
            '[data-cy="cardMenuAddToFavoriteButton"]'
        );

        cardMenuRemoveButton.click().then(() => {
            cy.wrap(Cypress.vueWrapper.emitted()).should(
                'have.property',
                'editFavorite'
            );
        });
    });

    it('cardMenuRemoveFromFavoriteButton emits editFavorite after it is clicked', () => {
        cy.mount(CardMenu, {
            props: { favorite: true },
            extensions: { plugins: [vuetify] }
        });

        const cardMenuRemoveButton = cy.get(
            '[data-cy="cardMenuRemoveFromFavoriteButton"]'
        );

        cardMenuRemoveButton.click().then(() => {
            cy.wrap(Cypress.vueWrapper.emitted()).should(
                'have.property',
                'editFavorite'
            );
        });
    });
});
