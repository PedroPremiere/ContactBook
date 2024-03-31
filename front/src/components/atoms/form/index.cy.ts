import Index from './index.vue';
import vuetify from '@/plugins/vuetify';
import i18n from '@/i18n';
import { contactSeeder } from '@/seeders/contactSeeder';

//todo add i18n test
describe('<Index />', () => {
    it('renders empty form', () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(Index, {
            extensions: { plugins: [vuetify, i18n] }
        });

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

        const contactFormSubmit = cy.get('[data-cy="contactFormSubmit"]');
        contactFormSubmit.should('be.visible');
        contactFormSubmit.should('be.disabled');
        contactFormSubmit.should('have.text', 'submit');
    });

    it('renders fulfilled form', () => {
        // see: https://on.cypress.io/mounting-vue
        const contact = contactSeeder();
        const phone = '600600600';
        cy.mount(Index, {
            extensions: { plugins: [vuetify, i18n] },
            props: {
                firstname: contact.name,
                phone
            }
        });

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

        const contactFormSubmit = cy.get('[data-cy="contactFormSubmit"]');
        contactFormSubmit.should('be.visible');
        contactFormSubmit.should('not.be.disabled');
        contactFormSubmit.should('have.text', 'submit');
    });
});
