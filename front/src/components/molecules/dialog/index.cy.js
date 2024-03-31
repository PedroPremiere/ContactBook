import Index from './index.vue';
import vuetify from '@/plugins/vuetify';
import i18n from '@/i18n';
import store from '@/store';
import { contactSeeder } from '@/seeders/contactSeeder';
import { randAnimal } from '@ngneat/falso';

describe('<Index />', () => {
    it('Dialog not visible when open is false', () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(Index, { extensions: { plugins: [vuetify, i18n, store] } });

        const dialog = cy.get('[data-cy="dialog"]');
        dialog.should('not.exist');
    });

    it('Empty Dialog visible when open is true and no imput data', () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(Index, {
            extensions: { plugins: [vuetify, i18n, store] },
            props: { open: true }
        });

        const dialog = cy.get('[data-cy="dialog"]');
        dialog.should('be.visible');

        const contactForm = cy.get('[data-cy="contactForm"]');
        contactForm.should('be.visible');

        const contactFormFirstName = cy.get('[data-cy="contactFormFirstName"]');
        contactFormFirstName.should('be.visible');
        contactFormFirstName.find('input').should('have.value', '');

        const contactFormPhone = cy.get('[data-cy="contactFormPhone"]');
        contactFormPhone.should('be.visible');
        contactFormPhone.find('input').should('have.value', '');

        const contactFormClose = cy.get('[data-cy="contactFormClose"]');
        contactFormClose.should('be.visible');
        contactFormClose.should('not.be.disabled');
        contactFormClose.should('have.text', 'close');
        contactFormClose.click().then(() => {
            cy.wrap(Cypress.vueWrapper.emitted()).should(
                'have.property',
                'close'
            );
        });

        const contactFormSubmit = cy.get('[data-cy="contactFormSubmit"]');
        contactFormSubmit.should('be.visible');
        contactFormSubmit.should('be.disabled');
        contactFormSubmit.should('have.text', 'submit');
    });

    it('Filled Dialog visible when open is true and data provided', () => {
        // see: https://on.cypress.io/mounting-vue

        cy.viewport(1000, 1000);

        const contact = contactSeeder();
        const phone = '600600600';

        const text = randAnimal();
        const title = randAnimal();
        cy.mount(Index, {
            extensions: { plugins: [vuetify, i18n, store] },
            props: {
                open: true,
                text,
                title,
                name: contact.name,
                phone
            }
        });

        const dialog = cy.get('[data-cy="dialog"]');
        dialog.should('be.visible');

        const contactForm = cy.get('[data-cy="contactForm"]');
        contactForm.should('be.visible');

        const contactFormFirstName = cy.get('[data-cy="contactFormFirstName"]');
        contactFormFirstName.should('be.visible');
        contactFormFirstName.find('input').should('have.value', contact.name);

        const contactFormPhone = cy.get('[data-cy="contactFormPhone"]');
        contactFormPhone.should('be.visible');
        contactFormPhone.find('input').should('have.value', phone);

        const contactFormClose = cy.get('[data-cy="contactFormClose"]');
        contactFormClose.should('be.visible');
        contactFormClose.should('not.be.disabled');
        contactFormClose.should('have.text', 'close');
        contactFormClose.click().then(() => {
            cy.wrap(Cypress.vueWrapper.emitted()).should(
                'have.property',
                'close'
            );
        });

        const contactFormSubmit = cy.get('[data-cy="contactFormSubmit"]');
        contactFormSubmit.should('be.visible');
        contactFormSubmit.should('not.be.disabled');
        contactFormSubmit.should('have.text', 'submit');
        contactFormSubmit.click().then(() => {
            cy.wrap(Cypress.vueWrapper.emitted()).should(
                'have.property',
                'save'
            );
        });
    });
});
