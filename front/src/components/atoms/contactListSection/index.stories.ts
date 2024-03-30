import ContactListSection from './index.vue';
import { seed } from '@/serviceWorker/seed';
import { IContact } from '@/types/contact';
import { randPastDate } from '@ngneat/falso';

export default {
    title: 'Components/Atoms/ContactListSection',
    component: ContactListSection,
    tags: ['autodocs']
};

const contacts = {} as Record<string, IContact[]>;
for (let i = 0; i < 5; i++) {
    const date = randPastDate().toDateString();
    contacts[date] = [];
    seed(contacts[date], 2);
}

export const Primary = {
    args: {
        items: contacts,
        sort: 'date'
    }
};
