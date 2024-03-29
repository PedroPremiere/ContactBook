import ContactListSection from './index.vue';

export default {
    title: 'Components/Atoms/ContactListSection',
    component: ContactListSection,
    tags: ['autodocs']
};

export const Primary = {
    args: {
        value: new Date(),
        sort: 'date'
    }
};
