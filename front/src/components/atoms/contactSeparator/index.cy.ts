import Index from './index.vue';
import vuetify from '@/plugins/vuetify';
import i18n from '@/i18n';
import store from '@/store';
import { randAnimal, randPastDate } from '@ngneat/falso';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

describe('<Index />', () => {
    it('renders avatar with text when sorting by name', () => {
        // see: https://on.cypress.io/mounting-vue
        const value = randAnimal();
        cy.mount(Index, {
            extensions: { plugins: [vuetify, i18n, store] },
            props: {
                value,
                sort: 'name'
            }
        });

        const contactSeparator = cy.get('[data-cy="contactSeparator"]');
        contactSeparator.should('be.visible');

        const contactSeparatorAvatar = cy.get(
            '[data-cy="contactSeparatorAvatar"]'
        );
        contactSeparatorAvatar.should('be.visible');
        contactSeparatorAvatar.should('have.text', value);

        const contactSeparatorDateText = cy.get(
            '[data-cy="contactSeparatorDateText"]'
        );
        contactSeparatorDateText.should('not.exist');
    });

    it('renders text when sorting by date', () => {
        // see: https://on.cypress.io/mounting-vue
        const value = randPastDate().toUTCString();
        dayjs.extend(relativeTime);
        const expectedValue = dayjs(value).fromNow();

        cy.mount(Index, {
            extensions: { plugins: [vuetify, i18n, store] },
            props: {
                value,
                sort: 'date'
            }
        });

        const contactSeparator = cy.get('[data-cy="contactSeparator"]');
        contactSeparator.should('be.visible');

        const contactSeparatorAvatar = cy.get(
            '[data-cy="contactSeparatorAvatar"]'
        );
        contactSeparatorAvatar.should('not.exist');

        const contactSeparatorDateText = cy.get(
            '[data-cy="contactSeparatorDateText"]'
        );
        contactSeparatorDateText.should('be.visible');

        contactSeparatorDateText.should('have.text', expectedValue);
    });
});
