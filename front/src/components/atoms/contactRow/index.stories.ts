import MyContactRow from './index.vue';
import { IContact } from '@/types/contact';
import { seed } from '@/serviceWorker/seed';

export default {
    title: 'Components/Atoms/MyContactRow',
    component: MyContactRow,
    tags: ['autodocs']
};

const contacts = [] as IContact[];

seed(contacts, 2);
export const Primary = {
    args: {
        items: contacts
    }
};
